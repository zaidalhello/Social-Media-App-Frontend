import * as PostApi from "../api/PostApi.js";
export const addPost = (data) => async (dispatch) => {
  dispatch({ type: "Upload_Start" });
  try {
    const newData = await PostApi.AddPost(data);
    dispatch({ type: "Upload_Success", data: newData.data.post });
  } catch (error) {
    console.log(error);
    dispatch({ type: "Upload_Fail" });
  }
};
export const getTimelinePosts = (data) => async (dispatch) => {
  dispatch({ type: "Get_Start" });
  try {
    const newData = await PostApi.getTimelinePost(data);
  

    dispatch({ type: "Get_Success", data: newData.data.posts });
  } catch (error) {
    dispatch({ type: "Get_Fail" });
  }
};
export const likeAndDisLikePost = (data) => async (dispatch) => {
  try {
    const newData = await PostApi.LikeAndDisLikePost(data);
  } catch (error) {
  }
};
