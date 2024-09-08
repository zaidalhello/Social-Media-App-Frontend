import * as UploadApi from "../api/UploadRequest.js";
export const uploadImg = (data) => async (dispatch) => {
  dispatch({ type: "Upload_Start" });
  try {
    await UploadApi.uploadImg(data);
    dispatch({ type: "Upload_Success" });
  } catch (error) {
    dispatch({ type: "Upload_Fail" });
  }
};
