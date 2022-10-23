function setupAudio() {
  console.log("testing");
  navigator.mediaDevices
    .getUserMedia({
      audio: { echoCancellation: true },
    })
    .then((e) => {
      chrome.runtime.sendMessage({ from: "success" });
    })
    .catch((e) => {
      console.log(e);
    });
}

setupAudio();
