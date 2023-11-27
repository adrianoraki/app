import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, push, ref } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { getStorage, ref as refstor, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";

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
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getDatabase(app)
const storage = getStorage(app);

document.querySelector('#upload-button').addEventListener('click', () => {
    const i = document.querySelector("#file-input").files[0].name
    const n = document.querySelector('#nome').value
    const v = document.querySelector('#valor').value
    const d = document.querySelector('#descricao').value

    const file = document.querySelector("#file-input").files[0]
    const storageRef = refstor(storage, `imagens/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {

        console.log('Imagem enviada com sucesso!')

        getDownloadURL(storageRef).then((url) => {

            // Registra um novo produto.
            push(ref(db, 'catalogo/'), {
                produto: n,
                valor: v,
                imagem: i,
                descricao: d,
                url_img: url
            })
                .then(() => {

                    console.log('Registrado com sucesso!');
                    window.location.href = '../View/novoproduto.html';
                })
                .catch(() => {
                    // Ocorreu um erro.
                    console.log('Erro ao registrar');
                })
        })
    })

})


