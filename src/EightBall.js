import { useState } from "react";
import "./EightBall.css";

//TODO: rename function to random generic name
function getMsgAndColor(answers) {
  let idx = Math.floor(Math.random() * answers.length);

  return answers[idx];
}

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");


  function toggleMessage(evt) {
    let answer = getMsgAndColor(answers); //TODO: change to const!
    setMsg(answer.msg);
    setColor(answer.color);
  }

  return (
    <div
      className="EightBall"
      onClick={toggleMessage}
      style={{ backgroundColor: color, color: "white" }}> //TODO: set the font color in css
      <p className="EightBall-msg">{msg}</p>
    </div>
  );
}

export default EightBall;
