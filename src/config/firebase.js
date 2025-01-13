const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyDTgg377lpNYIeTJsJCL4LMm0iXdlG3ndQ",
  authDomain: "cloud-storage-test-d0943.firebaseapp.com",
  projectId: "cloud-storage-test-d0943",
  storageBucket: "cloud-storage-test-d0943.firebasestorage.app",
  messagingSenderId: "738005879789",
  appId: "1:738005879789:web:ccb2916eef4da5a5b435e4",
  measurementId: "G-L3LKLCKRDR",
};

const app = initializeApp(firebaseConfig);

module.exports = app;
