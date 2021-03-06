var Quarter = (function () {
    function Quarter() {
        this._value = .25;
    }
    Object.defineProperty(Quarter.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
/// <reference path="./coin.ts" />
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptedCoins = [new Quarter()];
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
    }
    return VendingMachine;
}());
/// <reference path="./VendingMachine.ts" />
var machine = new VendingMachine();
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map