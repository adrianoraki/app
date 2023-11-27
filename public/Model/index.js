import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

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
const db = getDatabase(app);


// Adiciona um manipulador de evento ao botão de login.
document.querySelector('#btn-encomenda').addEventListener('click', () => {
    // Obtem a encomenda.
    const nome = document.querySelector('#nome').value;
    const contato = document.querySelector('#contato').value;
    const assunto = document.querySelector('#assunto').value;
    const mensagem = document.querySelector('#mensagem').value;

    // Tenta logar o usuário.
    push(ref(db, 'encomendas/'), {
        nome: nome,
        contato: contato,
        assunto: assunto,
        mensagem: mensagem
    })
        .then(() => {
            // Encomenda registra.
            console.log('Registrado com sucesso!');
            window.location.href = 'index.html';
        })
        .catch(() => {
            // Ocorreu um erro ao tentar logar o usuário.
            console.log('Erro ao registrar');
        });
});
