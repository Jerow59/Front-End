let btn = document.querySelector('.talk');
let content = document.querySelector('.content');

/*try {

} catch(e) {

}*/

// On définit plusieurs réponses possibles

const greetings = [
    'Moi ça va super, et toi comment vas tu ?',
    'Oh bah écoute ça va pas trop mal',
    'Au top !'
];

const weather = [
    "La météo est plutôt Ok aujourd'hui",
    'La météo est toujours belle car la vie est belle'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('La voix est activée, vous pouvez parler.');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// On ajoute le listener au bouton

btn.addEventListener('click', () => {
    recognition.start();
})

// On étudie les mots présents dans la question posée et renvoie une des réponses si elles ont été définies

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    if(message.includes('ça va')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else if(message.includes('météo')) {
        const weatherText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = weatherText;
    } else {
        speech.text = "Je n'en ai aucune idée";
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}