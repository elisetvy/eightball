import { useState } from "react";
import "./EightBall.css";
import choice from "./utils"

/** Display Eightball.
 *
 * Props:
 * - answers
 *
 * State:
 * - msg: message string
 * - color: eightball background color
 *
 * App -> Eightball
 */

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");


  function toggleMessage(evt) {
    const answer = choice(answers);
    setMsg(answer.msg);
    setColor(answer.color);
  }

  return (
    <div
      className="EightBall"
      onClick={toggleMessage}
      style={{ backgroundColor: color}}>
      <p className="EightBall-msg">{msg}</p>
    </div>
  );
}

export default EightBall;
