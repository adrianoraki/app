// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCHsNf4V_TiQ-accLs3mjzGy292nJhb_e0",
    authDomain: "serra-cake-dff95.firebaseapp.com",
    projectId: "serra-cake-dff95",
    storageBucket: "serra-cake-dff95.appspot.com",
    messagingSenderId: "171131757502",
    appId: "1:171131757502:web:37d2c54b33ee525fabcfef",
    measurementId: "G-D3C762YMXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


// Adiciona um manipulador de evento ao botão de login.
document.querySelector('#botao').addEventListener('click', () => {
    // Obtem o e-mail e a senha do usuário.
    const email = document.querySelector('#Usuario').value;
    const password = document.querySelector('#Senha').value;

    // Tenta logar o usuário.
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // O usuário foi logado com sucesso.
            console.log('Logado com sucesso!');
            window.location.href = '../View/pedidos.html';
        })
        .catch((error) => {
            // Ocorreu um erro ao tentar logar o usuário.
            console.log('Erro ao logar');
        });
});