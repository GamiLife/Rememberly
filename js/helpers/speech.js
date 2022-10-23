export function textToSpeach(message) {
  const messageSpeech = new SpeechSynthesisUtterance();
  messageSpeech.text = message;
  messageSpeech.lang = "en";
  messageSpeech.volume = 1;

  window.speechSynthesis.speak(messageSpeech);
}

export function speechToText(recognition) {
  recognition.onstart = () => {
    console.log("Recording your voice and pronunciation");
  };

  recognition.onerror = (e) => {
    console.log(e.error);
  };

  recognition.onspeechend = () => {
    console.log("Stop Recording");
    recognition.stop();
  };

  recognition.onresult = (e) => {
    const [[{ transcript, confidence }]] = e.results;
    console.log(transcript, confidence);
  };

  console.log("Initializing recognition", recognition);
  recognition.start();
}

export function validateSpeechRecognitionApi() {
  const RecognitionApi =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!RecognitionApi) {
    throw new Error(
      "Its not supported speech recognition in this browser version 😣"
    );
  }
  const recognition = new RecognitionApi();

  recognition.lang = "en";
  recognition.continuous = true;

  return recognition;
}

export function validateSpeechApi() {
  const isSupportedInBrowser = window.speechSynthesis;

  if (!isSupportedInBrowser) {
    throw new Error("Its not supported in this browser version 😣");
  }
}
