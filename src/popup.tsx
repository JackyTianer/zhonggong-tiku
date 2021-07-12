import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { SHOW_COMPUTER_ANSWER, HIDE_COMPUTER_ANSWER } from "./actions/computer";


const HideButton = styled.button`
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px #0000000b;
  height: 32px;
  width:120px;
  padding: 4px 15px;
  font-size: 14px;
  outline:0;
`;

const ShowButton = styled.button`
  color: #1890ff;
  background: white;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px #0000000b;
  height: 32px;
  width:120px;
  padding: 4px 15px;
  font-size: 14px;
  outline:0;
  margin-top:20px;
  border:1px solid #1890ff;
`;

const sendMessage = (action: string, params?: any) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tab = tabs[0];
    if (tab.id) {
      debugger;
      chrome.tabs.sendMessage(
        tab.id,
        {
          action,
          params
        },
        (msg) => {
          console.log("result message:", msg);
        }
      );
    }
  });
};

const Popup = () => {
  const hideAnswer = () => {
    sendMessage(HIDE_COMPUTER_ANSWER);
  };
  const showAnswer = () => {
    sendMessage(SHOW_COMPUTER_ANSWER);
  };
  return (
    <>
      <HideButton onClick={hideAnswer}>隐藏答案</HideButton>
      <ShowButton onClick={showAnswer}>展示答案</ShowButton>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup/>
  </React.StrictMode>,
  document.getElementById("root")
);
