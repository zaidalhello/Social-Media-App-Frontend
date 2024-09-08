import React, { useRef, useState } from "react";
import "./PostShare.css";
import ProfileImg from "../../../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { upload } from "@testing-library/user-event/dist/upload";
import { uploadImg } from "../../../../actions/UploadActions";
import { addPost } from "../../../../actions/PostsAction";

import { BlinkBlur } from "react-loading-indicators";
import Dropdown from "../../../Dropdown/Dropdown";
const PostShare = () => {
  
  const updateduser = useSelector((state) => state.user.UserData);
  const [image, setImg] = useState(null);
  const loding = useSelector((state) => state.Post.loading);
  const Uploading = useSelector((state) => state.Post.Uploading);
  const imgRef = useRef();
  const desRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData.user);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(event.target.files[0]);
    }
  };
  const reset = () => {
    setImg(null);
    desRef.current.value = "";
  };
  const handleSubmint = (e) => {
    e.preventDefault();

    const newPost = {
      userid: user._id,
      desc: desRef.current.value,
    };
    if (image) {
      const imageData = new FormData();
      const fileName = Date.now() + image.name;
      imageData.append("name", fileName);
      imageData.append("file", image);
      newPost.image = fileName;
      try {
        dispatch(uploadImg(imageData));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(addPost(newPost));
    reset();
  };

  return (<>
  <Dropdown/>
   <div className="PostShare">
      <div className="imgAndSearch">
        <img src= { updateduser?.profilePicture
              ? process.env.REACT_APP_PUBLIC_FOLDER + updateduser?.profilePicture: "https://cdn-icons-png.flaticon.com/512/9513/9513679.png"} alt="Profile" className="ProfileImg" />
        <input
          type="text"
          placeholder="What's happening"
          ref={desRef}
          required
        />
      </div>

      <div>
        <div className="PostOption">
          <div
            className="option"
            style={{ color: "var(--video)" }}
            onClick={() => imgRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          {loding ? (
            <BlinkBlur color="Orange" size="medium" text="" textColor="" />
          ) : (
            <button className="button ps-button" onClick={handleSubmint}>
              Share
            </button>
          )}
        </div>

        <div style={{ display: "none" }}>
          <input
            type="file"
            name="myImage"
            ref={imgRef}
            onChange={onImageChange}
          />
        </div>
      </div>
      <hr />
      {image && (
        <div className="previewImg">
          <UilTimes
            onClick={() => {
              setImg(null);
              imgRef.current.value = "";
            }}
          />
          <img src={URL.createObjectURL(image)} alt="Preview" />
        </div>
      )}
    </div>
    </>
   
  );
};

export default PostShare;
