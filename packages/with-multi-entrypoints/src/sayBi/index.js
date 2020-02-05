import cfonts from "cfonts";

function sayBi(text) {
  cfonts.say(text, {
    font: "chrome",
    colors: ["#ff0080", "#a349a4", "#0000ff"]
  });
}

export default sayBi;
