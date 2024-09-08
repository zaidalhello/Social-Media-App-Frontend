import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUser } from "../../../actions/UserAction";

import { uploadImg } from "../../../actions/UploadActions";
function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const Authuser = useSelector((state) => state.user.UserData);
  const [userState, setUserState] = useState(Authuser);

  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const handelUpdate = (e) => {
    e.preventDefault();

    if (profileImage) {
      const data2 = new FormData();
      const fileName2 = Date.now() + profileImage.name;
      data2.append("name", fileName2);
      data2.append("file", profileImage);
      userState.profilePicture = fileName2;
      try {
        dispatch(uploadImg(data2));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data2 = new FormData();
      const fileName2 = Date.now() + coverImage.name;
      data2.append("name", fileName2);
      data2.append("file", coverImage);
      userState.coverPicture = fileName2;
      try {
        dispatch(uploadImg(data2));
      } catch (err) {
        console.log(err);
      }
    }

    setUserState((prevState) => ({
      ...prevState,
      currentUserID: prevState?._id,
      _id: Authuser._id,
    }));
    try {
      dispatch(editUser(userState));
    } catch (error) {
      console.log(error);
    }
    setModalOpened(false);
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.dir("userState" + Authuser);
  });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };
  const onprofileImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setProfileImage(img)
       
    }
  };
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onSubmit={handelUpdate}
      onClose={() => setModalOpened(false)}
    >
      <form className="modelForm">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="InfoInput"
            name="firstName"
            onChange={handleChanges}
            value={userState?.firstName}
            placeholder="First Name"
          />

          <input
            type="text"
            className="InfoInput"
            name="lastName"
            onChange={handleChanges}
            value={userState?.lastName}
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="InfoInput"
            name="workat"
            onChange={handleChanges}
            value={userState?.workat}
            placeholder="Works at"
          />
        </div>

        <div>
          <input
            type="text"
            className="InfoInput"
            name="livesin"
            onChange={handleChanges}
            value={userState?.livesin}
            placeholder="Lives in"
          />
        </div>

        <div>
          <input
            type="text"
            className="InfoInput"
            name="relationShip"
            onChange={handleChanges}
            value={userState?.relationShip}
            placeholder="Relationship Status"
          />
        </div>

        <div className="uploadImages">
          Profile Image
          <input type="file" name="profileImage" onChange={onprofileImageChange} />
        </div>
        <div className="uploadImages">
          Cover Image
          <input type="file" name="coverImg" onChange={onImageChange} />
        </div>

        <button type="submit" className="button InfoButton">
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
