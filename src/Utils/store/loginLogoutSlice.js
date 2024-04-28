import { createSlice } from "@reduxjs/toolkit";
import auth from "../../firebase";
import firebase from "firebase/compat/app";

const loginLogoutSlice = createSlice({
  name: "loginLogout",
  initialState: {
    name: null,
    profilePicture: null,
    email: null,
  },
  reducers: {
    addLoginUser: async (state, action) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      console.log(provider);
      const res = await auth.signInWithPopup(provider);
      const { name, picture, email } = res.additionalUserInfo.profile;
      console.log(name + picture + email);
    },
  },
});

export const { addLoginUser } = loginLogoutSlice.actions;

export default loginLogoutSlice.reducer;
