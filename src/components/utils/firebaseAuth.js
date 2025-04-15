import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";
import { auth } from "./firebase";

export const registerUser = async (email, password, username) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  await updateProfile(userCredential.user, {
    displayName: username,
  });
  return userCredential;
};

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};


