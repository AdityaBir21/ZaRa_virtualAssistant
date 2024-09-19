let btn = document.querySelector("button");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice")

function speak(text) {
  let textSpeak = new SpeechSynthesisUtterance(text);
  textSpeak.rate = 1;
  textSpeak.pitch = 1;
  textSpeak.volume = 1;
  textSpeak.lang = "hi-IN";
  window.speechSynthesis.speak(textSpeak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();

  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir")
  } else if (hours >= 12 && hours < 17) {
    speak("Good Afternoon Sir")
  } else {
    speak("Good Evening Sir");
}
}
window.addEventListener('load',()=>{
    wishMe();
})

let speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;

  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});


function takeCommand(message){

    btn.style.display = "flex";
    voice.style.display = "none";


    if(message.includes("hello")|| message.includes("hey")){
        speak("Hello sir,how may i help you?");
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant , created by MR Aditya birholiya ");
    }
    else if(message.includes("who is som")){
        speak("aree vo toh motu hai gadha sa dimaag hi nahi hai jisme ");
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...");
        window.open("https://www.youtube.com/","_blank");
    }
    else if(message.includes("open google")){
        speak("opening google...");
        window.open("https://www.google.com/","_blank");
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...");
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...");
        window.open("https://www.facebook.com/","_blank");
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...");
        window.open("calculator://");
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...");
        window.open("whatsapp://");
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric" , minute:"numeric"});
        speak(time);
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric" , month:"short"});
        speak(date);
    }
    else{
        let finalText = "this is what i found on internet regarding" + message.replace("zara","");
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("zara","")}`,"_blank")
    }
}


gsap.from("h1",{
  y:30,
  opacity:0,
  duration:2,
  delay:1,
  ease:"elastic.out(1.5,0.1)"
})

for (let i = 0; i < 60; i++) {
  let particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top = `${Math.random() * window.innerHeight}px`;
  particle.style.left = `${Math.random() * window.innerWidth}px`;
  particle.style.animationDelay = `${Math.random() * 4}s`;
  document.body.appendChild(particle);
}