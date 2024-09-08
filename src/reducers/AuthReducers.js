const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "Auth_Start":
      return { ...state, loading: true };

    case "Auth_Success":
      return { ...state, loading: false, authData: action.data, error: false };

    case "Auth_Fail":
      return { ...state, loading: false, error: true };
      case "LOG_OUT":
        localStorage.clear();
        return {...state,  authData: null, loading: false, error: false, updateLoading: false }
  
    default:
      return state;
  }
};

export default authReducer;