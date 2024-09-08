import * as AuthApi from "../api/AuthApiRequest.js";
export const signIn = (formData) => async (dispatch) => {
  dispatch({ type: "Auth_Start" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "Auth_Success", data: data });
    
  } catch (error) {
    dispatch({ type: "Auth_Fail" });
    const errorMessage = error.response
      ? error.response.data?.message || "An error occurred during signup."
      : "An unexpected error occurred.";

    alert(errorMessage);
  }
};
export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "Auth_Start" });

  try {
    const { data } = await AuthApi.RegisterNewUser(formData);
    dispatch({ type: "Auth_Success", data: data });
    
    alert(data["message"]);
  } catch (error) {
    dispatch({ type: "Auth_Fail" });
    const errorMessage = error.response
      ? error.response.data?.message || "An error occurred during signup."
      : "An unexpected error occurred.";

    alert(errorMessage);
  }
};
export const logout = ()=> async(dispatch)=> {
  dispatch({type: "LOG_OUT"})
}