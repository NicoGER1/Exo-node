const information = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello i'm ${information.name} from ${information.campus}`,
    e : "oO",
    T : "U "
}));