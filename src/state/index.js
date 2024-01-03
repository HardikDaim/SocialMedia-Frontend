import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
 
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        const { friends } = action.payload;
        
        // Prevent making the logged-in user a friend of themselves
        if (friends.some(friend => friend._id === state.user._id)) {
          console.error("Cannot make yourself a friend.");
          return;
        }
    
        state.user.friends = friends;
      } else {
        console.error("User friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts.reverse();
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    deletePost: (state, action) => {
      const postIdToDelete = action.payload._id; 
      state.posts = state.posts.filter((post) => post._id !== postIdToDelete);
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const postToUpdate = state.posts.find((post) => post._id === postId);
      if (postToUpdate) {
        postToUpdate.comments.push(comment);
      }
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost , deletePost, addComment } =
  authSlice.actions;
export default authSlice.reducer;