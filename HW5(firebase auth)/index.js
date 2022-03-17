import "./styles/style.scss";
import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG, AUTH_URL } from "./api/api-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth();
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const submitButton = document.querySelector(".submit");
const resultBlock = document.querySelector(".result");

const registerInDB = () => {
  const emailInputValue = emailInput.value;
  const passwordInputValue = passwordInput.value;

  createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
    .then((userCredential) => {
      resultBlock.innerText = `You are successfuly registered
		Don't forget it:
		Login: ${emailInputValue}
		Password: ${passwordInputValue}`;
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      let errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      errorCode = errorCode.split("/").slice(1).join().split("-").join(" ");
      errorCode = errorCode.charAt(0).toUpperCase() + errorCode.slice(1);
      resultBlock.innerText = `Error ocured:
		${errorCode}
		`;
    });
};
submitButton.onclick = registerInDB;

// using fetch
// fetch (
// 	AUTH_URL,
// 	 {
// 		  method:'POST',
// 		  headers: {
// 				'Content-Type': 'application/json'
// 		  },
// 		  body: JSON.stringify ({
// 				email: "lal2ala@mail.com",
// 				password: "aasdewrasdasd"
// 		  })
// 	 }
// ).then (responce => console.log (responce))
