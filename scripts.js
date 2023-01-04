const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const resultHolder = document.getElementById("result-holder");
const resultii = document.getElementById("resultii");
const candy = document.getElementById("candy");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const soundit = document.getElementById("soundit");
var pagun = document.querySelector('.swiper-pagination');

btn.addEventListener("click", ()=>{

    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            pagun.classList.add('showpagun')
            soundit.classList.add('showsoundit')
            candy.innerHTML = `${inpWord}`
            result.innerHTML = `<div class="word">
            </div>
            <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;

            resultii.innerHTML = `<div class="word">
            </div>
            <div class="details">
            <p>${data[0].meanings[1].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">
            ${data[0].meanings[1].definitions[0].definition}
            </p>
            <p class="word-example">
            ${data[0].meanings[1].definitions[0].example || ""}
            </p>`;


        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);


        })
        .catch(() =>{
            soundit.classList.remove('showsoundit')
            pagun.classList.remove('showpagun')
            result.innerHTML = `<h3 class="error" >Couldn't Find the Word</h3>`
        });
});



function playSound(){
    sound.play();
}

var nav = document.querySelector(".nav");

function dropmenu(){
    nav.classList.toggle('drop-menu')
}

