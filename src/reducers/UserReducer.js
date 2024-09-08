const userReducer = (
  state = {
    UserData: [],
    AllUsersData: [],
    loading: false,
    error: false,
    msg:""
  },
  action
) => {
  switch (action.type) {
    case "User_Upload_Start":
      return { ...state, loading: true };
    case "User_Upload_Success":
      return {
        ...state,
        loading: false,
        UserData: action.data,
        error: false,
      };
    case "User_Upload_Fail":
      return { ...state, loading: false, error: true };

    case "get_Users_Start":
      return { ...state, loading: true };

    case "get_Users_Success":
      return {
        ...state,
        loading: false,
        AllUsersData: action.data,
        error: false,
      };

    case "get_Users__Fail":
      return { ...state, loading: false, error: true };

    case "followUnfollwUser_Start":
    
      return { ...state, loading:true,loading:true,error:false};
    case "followUnfollwUser_Success":
     
      return { ...state, msg: action.data,loading:false,error:false };
    case "followUnfollwUser__Fail":
  
    return { ...state, msg: action.data,loading:false ,error:true};
    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        AllUsersData: null,
        UserData: null,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default userReducer;
