import { app } from '../../firebase/firebase.js'
import { getAuth,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
let auth = getAuth(app);
const resetPasswordForm = document.getElementById('resetPasswordForm');
const resetEmailInput = document.getElementById('resetEmail');

resetPasswordForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = resetEmailInput.value;

  try {
    await firebase.auth().sendPasswordResetEmail(email);
    alert('Password reset email sent. Please check your inbox.');
  } catch (error) {
    alert(error.message);
  }
});