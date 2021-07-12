import { HIDE_COMPUTER_ANSWER, SHOW_COMPUTER_ANSWER } from "../../actions/computer";

const findAnswerElement = () => {
  return [...document.querySelectorAll("p")].filter((itm: HTMLElement) => {
    return !!itm.textContent && (itm.textContent.includes("答案") || itm.textContent.includes("答："));
  });
};

const hideAnswer = () => {
  const answerEles = findAnswerElement();
  answerEles.forEach((itm: HTMLElement) => {
    itm.style.setProperty("display", "none");
  });
};

const showAnswer = () => {
  const answerEles = findAnswerElement();
  answerEles.forEach((itm: HTMLElement) => {
    itm.style.setProperty("display", "block");
  });
};

hideAnswer();
export default function(msg: { action: string }, sender: any, sendResponse: any) {
  switch (msg.action) {
    case HIDE_COMPUTER_ANSWER:
      hideAnswer();
      break;
    case SHOW_COMPUTER_ANSWER:
      showAnswer();
      break;
    default:
      sendResponse("error");
      return;
  }
  sendResponse("ok");
}
