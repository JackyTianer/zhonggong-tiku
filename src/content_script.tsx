import messageListener from "./listener/computer/message-listener";

const addMessageListener = () => {
  chrome.runtime.onMessage.addListener(messageListener);
};



addMessageListener();
