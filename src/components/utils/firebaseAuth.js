import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  getAuth,
  
} from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import CurrentUserContext from "./contexts/CurrentUserContext";
import { useContext } from "react";


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


  /// cards
  export const fetchArticles = async (article, keyword) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(!user) throw new Error("You are not authorized");
    const articleData = {
      title: article.title || "N/A",
      description: article.description || "N/A",
      urlToImage: article.urlToImage || "N/A",
      publishedAt: article.publishedAt || "",
      source: article.source.name || "",
      keyword: keyword || "",
      userId: user.uid,
      
    }
    const articleInfo = await addDoc(collection(db, "article"), articleData);
    return articleInfo.id;
    }
 
export const  fetchUserSavedArticles = async (userId) => {
  const q = query(collection(db, "article"), where("userId", "==", userId))
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
   
}
export const deleteArticles = async (id) => {
  await deleteDoc(doc(db, "article", id))
}