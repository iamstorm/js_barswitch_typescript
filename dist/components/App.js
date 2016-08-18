"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Mainbar_1 = require("./components/Mainbar");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return;
        React.createElement(Mainbar_1.Mainbar, null);
    };
    return App;
}(React.Component(AppProps, {})));
exports.App = App;
//# sourceMappingURL=App.js.map