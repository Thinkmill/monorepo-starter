import sayHi from "@monorepo-starter/simple-package";
import sayBi from "@monorepo-starter/with-multi-entrypoints/sayBi";
import sayChange from "@monorepo-starter/with-multi-entrypoints/sayChange";

let words = process.argv[2];
let emphasis = process.argv[3];

if (emphasis === "bi") {
  sayBi(words);
} else if (emphasis === "change") {
  sayChange(words);
} else {
  sayHi(words);
}
