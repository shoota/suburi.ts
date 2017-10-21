"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./models/person");
function greeting(names) {
    var man = new person_1.Man(names.boy);
    var woman = new person_1.Woman(names.girl);
    return man.say() + ', ' + woman.say();
}
exports.greeting = greeting;
//# sourceMappingURL=index.js.map