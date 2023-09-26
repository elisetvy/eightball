/** Returns random choice from an array */

function choice(answers) {
  const idx = Math.floor(Math.random() * answers.length);

  return answers[idx];
}

export default choice;