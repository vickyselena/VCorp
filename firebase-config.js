// firebase-config.js
// FILE INI WAJIB ADA DI ROOT REPO — SEMUA HALAMAN LANGSUNG IMPORT DARI SINI!

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBi7bnioRz_xzMDa9vGSSm1E37_nbMmSDE",
  authDomain: "vickypro-6acfa.firebaseapp.com",
  databaseURL: "https://vickypro-6acfa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vickypro-6acfa",
  storageBucket: "vickypro-6acfa.firebasestorage.app",
  messagingSenderId: "448365739500",
  appId: "1:448365739500:web:78e4379702d32bb3b8d4c9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
