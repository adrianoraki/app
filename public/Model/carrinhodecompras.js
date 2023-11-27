
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

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

 // Menu carrinho.
document.querySelector('#btn-proximo').addEventListener('click', () => {
    const total = document.getElementById("total");
    const texto = total.innerText

    const items = document.querySelectorAll('ul[id="lista-carrinho"]');

    const carrinho = []
    for (const item of items) {
        carrinho.push(item.innerText);

    }
  
    push(ref(db, 'carrinho/'), {
        pedido: carrinho,
        total: texto

    })
        .then(() => {
            // Encomenda registra.
            window.location.href = '../View/testeformcorp.html';
        })
        .catch(() => {
            // Ocorreu um erro ao tentar registra.
            alert('Erro ao registrar');
        });
});


