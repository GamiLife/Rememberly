function setUpContentScript() {
  const iframe = document.createElement("iframe");
  iframe.src = chrome.extension.getURL("html/audiosources.html");
  iframe.style.display = "none";

  document.body.appendChild(iframe);
}

console.log("test");
setUpContentScript();
