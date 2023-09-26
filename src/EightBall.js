import { useState } from "react";
import "./EightBall.css";

function getMsgAndColor(answers) {
  let idx = Math.floor(Math.random() * answers.length);

  return answers[idx];
}

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  console.log("What is color", color)
  function toggleMessage(evt) {
    let answer = getMsgAndColor(answers);
    setMsg(answer.msg);
    setColor(answer.color);
  }

  return (
    //style={{backgroundcolor: {color}}}
    <div className="EightBall" onClick={toggleMessage} style={{backgroundColor: color, color: "white"}}>
      <p className="EightBall-msg">{msg}</p>
    </div>
  )
}

export default EightBall;