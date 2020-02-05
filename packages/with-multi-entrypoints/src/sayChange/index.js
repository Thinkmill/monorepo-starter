import cfonts from "cfonts";

function sayChange(text) {
  cfonts.say(text, {
    font: "chrome",
    colors: ["#B77FDD", "#FFFFFF", "#48821E"]
  });
}

export default sayChange;
