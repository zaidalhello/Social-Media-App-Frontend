const postReducer = (
  state = {
    MediaPosts: [],
    Posts: [],
    Getloading: false,
    loading: false,
    error: false,
    Uploading: false,
  },
  action
) => {
  switch (action.type) {
    case "Upload_Start":
      return { ...state, loading: true, Uploading: true };

    case "Upload_Success":
      return {
        ...state,
        loading: false,
        Posts: action.data,
        error: false,
        Uploading: false,
      };

    case "Upload_Fail":
      return { ...state, loading: false, Uploading: false, error: true };

    case "Get_Start":
      return { ...state, Getloading: true };

    case "Get_Success":
      return {
        ...state,
        Getloading: false,
        MediaPosts: action.data,
        error: false,
      };

    case "Get_Fail":
      return { ...state, Getloading: false, error: true };

    default:
      return state;
  }
};

export default postReducer;
