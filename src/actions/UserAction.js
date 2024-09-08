import * as PostApi from "../api/UserApiRequest.js";

export const editUser = (data) => async (dispatch) => {
  dispatch({ type: "User_Upload_Start" });

  try {
    const response = await PostApi.updateUser(data);

    console.dir(response);

    const updatedUserData = response.data;

    console.log("API Response Data:", updatedUserData.otherDetails);

    dispatch({
      type: "User_Upload_Success",
      data: updatedUserData.otherDetails,
    });
  } catch (error) {
    console.error("Error updating user:", error.message);
    dispatch({ type: "User_Upload_Fail" });
  }
};

export const getUser = (id) => async (dispatch) => {
  dispatch({ type: "User_Upload_Start" });

  try {
    const newData = await PostApi.getUserbyID(id);

    dispatch({ type: "User_Upload_Success", data: newData });
  } catch (error) {
    console.log("Error fetching user:", error);
    dispatch({ type: "User_Upload_Fail" });
  }
};


export const getAllUsers = (id) => async (dispatch) => {
  dispatch({ type: "get_Users_Start" });

  try {
    const newData = await PostApi.getAllUsers(id);

    dispatch({ type: "get_Users_Success", data: newData });
  } catch (error) {
    console.log("Error fetching user:", error);
    dispatch({ type: "get_Users__Fail" });
  }
};
export const followUnfollwUser = (id,currentUserID) => async (dispatch) => {
  dispatch({ type: "followUnfollwUser_Start" });

  try {
    const newData = await PostApi.followUnfollwUsers(id,currentUserID);

    dispatch({ type: "followUnfollwUser_Success", data: newData });
  } catch (error) {
    console.log("Error fetching user:", error);
    dispatch({ type: "followUnfollwUser__Fail" });
  }
};
