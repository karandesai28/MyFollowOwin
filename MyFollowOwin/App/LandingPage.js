"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OwnerForm_1 = require('./OwnerForm');
var ProductComponent_1 = require('./ProductComponent');
var router_1 = require('@angular/router');
var MyApp = (function () {
    function MyApp() {
    }
    MyApp.prototype.ngOnInit = function () { };
    MyApp = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [OwnerForm_1.OwnerForm, ProductComponent_1.ProductList, router_1.ROUTER_DIRECTIVES],
            template: "<button routerLink=\"Home/Index/Owner\" routerLinkActive=\"active\">Become Owner</button>\n<router-outlet></router-outlet>\n<product-list></product-list>"
        }), 
        __metadata('design:paramtypes', [])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=LandingPage.js.map