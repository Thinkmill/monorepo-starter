import cfonts from "cfonts";

function sayHi(text) {
  cfonts.say(text, {
    font: "chrome",
    colors: ["#fff433", "#ffffff", "#9b59d0"]
  });
}

export default sayHi;
