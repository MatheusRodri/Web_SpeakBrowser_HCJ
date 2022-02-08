const voices = speechSynthesis.getVoices().filter((voice)=>voice.lang.includes("pt-BR"))[0]

function play(){
    const phase = document.getElementById("phase").innerText
    const utterance = new SpeechSynthesisUtterance(phase)
    utterance.voice = voices
    speechSynthesis.speak(utterance)
}