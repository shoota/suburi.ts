"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GENDER_MEN = 1;
var GENDER_WOMEN = 2;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.say = function () {
        return "I am `{name}`";
    };
    return Person;
}());
exports.Person = Person;
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name) {
        var _this = _super.call(this, name) || this;
        _this.gender = GENDER_MEN;
        return _this;
    }
    return Man;
}(Person));
exports.Man = Man;
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman(name) {
        var _this = _super.call(this, name) || this;
        _this.gender = GENDER_WOMEN;
        return _this;
    }
    return Woman;
}(Person));
exports.Woman = Woman;
//# sourceMappingURL=person.js.map