import React from "react";
import { Button,InputGroup,FormControl } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
const Dashboard = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [videoUpload,setVideoUpload] = useState(null)
 const [videoUrls,setVideoUrls] = useState([])
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const imagesListRef = ref(storage, `images/${user.email}`);
  const uploadFile = () => {
    if (imageUpload == null) return; 
    const imageRef = ref(storage, `images/${user.email}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };
  const videosListRef = ref(storage, `videos/${user.email}`);
  const vuploadFile = () => {
    if (videoUpload == null) return; 
    const videosRef = ref(storage, `videos/${user.email}/${videoUpload.name + v4()}`);
    uploadBytes(videosRef, videoUpload).then((snap) => {
      getDownloadURL(snap.ref).then((url) => {
        setVideoUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  useEffect(() => {
    listAll(videosListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setVideoUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
        
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>

 
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
       <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url}/>;
      })}
     
      <input
        type="file"
        onChange={(event) => {
          setVideoUpload(event.target.files[0]);
        }}
      />
      <button onClick={vuploadFile}> Upload Video</button>
      {videoUrls.map((url) => {
        return <video  controls>
          <source src={url} type="video/mp4"></source>
        </video>
        ;
      })}
    </div>
  

        </div>
    </>
  );
};
export default Dashboard;