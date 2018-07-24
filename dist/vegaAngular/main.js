(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <ngx-toastr></ngx-toastr> -->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/vehicles/new']\">New Vehicle</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/vehicle-form/vehicle-form.component */ "./src/app/components/vehicle-form/vehicle-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var router = [
    { path: 'vehicles/new', component: _components_vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_9__["VehicleFormComponent"] },
    { path: 'vehicles/:id', component: _components_vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_9__["VehicleFormComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_9__["VehicleFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(router),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot()
            ],
            providers: [
                _services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"]
                // { provide: ErrorHandler, useClass: AppErrorHandler }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/vehicle-form/vehicle-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/vehicle-form/vehicle-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-inline {\r\n    margin-right: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/vehicle-form/vehicle-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/vehicle-form/vehicle-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>New Vehicle</h1>\n<p> {{ vehicle | json }} </p>\n<form #f=\"ngForm\" (ngSubmit)=\"submit()\">\n  <div class=\"form-group\">\n    <label for=\"make\">Make</label>\n    <select id=\"make\" class=\"form-control\" (change)=\"onMakeChange()\" [(ngModel)]=\"vehicle.makeId\" name=\"makeId\" required #make=\"ngModel\">\n      <option value=\"\"></option>\n      <option *ngFor=\"let m of makes\" value=\"{{ m.id }}\">{{ m.name }}</option>\n    </select>\n    <div class=\"alert alert-danger\" *ngIf=\"make.touched && !make.valid\">Please specify the make.</div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"model\">Model</label>\n    <select id=\"model\" class=\"form-control\" [(ngModel)]=\"vehicle.modelId\" name=\"modelId\" required #model=\"ngModel\">\n      <option value=\"\"></option>\n      <option *ngFor=\"let m of models\" value=\"{{ m.id }}\">{{ m.name }}</option>\n    </select>\n    <div class=\"alert alert-danger\" *ngIf=\"model.touched && !model.valid\">Please specify the model.</div>\n  </div>\n\n  <p>Is this vehicle registered?</p>\n  <label for=\"registered\" class=\"radio-inline\">\n    <input type=\"radio\" name=\"isRegistered\" id=\"registered\" value=\"true\" [(ngModel)]=\"vehicle.isRegistered\"> Yes \n  </label>\n  <label for=\"notRegistered\" class=\"radio-inline\">\n    <input type=\"radio\" name=\"isRegistered\" id=\"notRegistered\" value=\"false\" [(ngModel)]=\"vehicle.isRegistered\"> No\n  </label>\n\n  <h2>Features</h2>\n  <div *ngFor=\"let f of features\" class=\"checkbox\">\n    <label for=\"feature{{ f.id }}\">\n      <input type=\"checkbox\" id=\"feature{{ f.id }}\" (change)=\"onFeatureToggle(f.id, $event)\"> {{ f.name }}\n    </label>\n  </div>\n\n  <h2>Contect</h2>\n  <div class=\"form-group\">\n    <label for=\"contactName\">Name</label>\n    <input id=\"contactName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"vehicle.contact.name\" name=\"contactName\" required #name=\"ngModel\">\n    <div class=\"alert alert-danger\" *ngIf=\"name.touched && !name.valid\">Please specify the name.</div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"contactPhone\">Phone</label>\n    <input id=\"contactPhone\" type=\"text\" class=\"form-control\" [(ngModel)]=\"vehicle.contact.phone\" name=\"contactPhone\" required #phone=\"ngModel\">\n    <div class=\"alert alert-danger\" *ngIf=\"phone.touched && !phone.valid\">Please specify the phone.</div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"contactEmail\">Email</label>\n    <input id=\"contactEmail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"vehicle.contact.email\" name=\"contactEmail\">\n  </div>\n  <button class=\"btn btn-primary\">Save</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/vehicle-form/vehicle-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/vehicle-form/vehicle-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: VehicleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleFormComponent", function() { return VehicleFormComponent; });
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import * as forkJoin from 'rxjs/observable/forkJoin';
// import { forkJoin } from 'rxjs/observable/forkJoin';
// import { forkJoin } from 'rxjs';

var VehicleFormComponent = /** @class */ (function () {
    function VehicleFormComponent(route, router, vehicleService, toastrService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.vehicleService = vehicleService;
        this.toastrService = toastrService;
        this.vehicle = {
            features: [],
            contact: {}
        };
        route.params.subscribe(function (p) {
            _this.vehicle.id = +p['id'];
        });
    }
    VehicleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sources = [
            this.vehicleService.getMakes(),
            this.vehicleService.getFeatures()
        ];
        if (this.vehicle.id)
            sources.push(this.vehicleService.getVehicle(this.vehicle.id));
        rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].forkJoin(sources).subscribe(function (data) {
            _this.makes = data[0];
            _this.features = data[1];
            if (_this.vehicle.id)
                _this.vehicle = data[2];
        }, function (err) {
            if (err.status == 404)
                _this.router.navigate(['/']);
        });
        // this.vehicleService.getVehicle(this.vehicle.id)
        //   .subscribe(v => {
        //     this.vehicle = v;
        //   });
        //FOR CHECK INVALID ID 
        // , err => {
        //   if (err.status == 404)
        //     this.router.navigate(['/']);
        // }
        // this.vehicleService.getMakes()
        //   .subscribe(makes => this.makes = makes);
        // this.vehicleService.getFeatures()
        //   .subscribe(features => this.features = features);
    };
    VehicleFormComponent.prototype.onMakeChange = function () {
        var _this = this;
        var selectedMake = this.makes.find(function (m) { return m.id == _this.vehicle.makeId; });
        this.models = selectedMake ? selectedMake.models : [];
        delete this.vehicle.modelId;
    };
    VehicleFormComponent.prototype.onFeatureToggle = function (featureId, $event) {
        if ($event.target.checked)
            this.vehicle.features.push(featureId);
        else {
            var index = this.vehicle.features.indexOf(featureId);
            this.vehicle.features.splice(index, 1);
        }
    };
    VehicleFormComponent.prototype.submit = function () {
        var _this = this;
        this.vehicleService.create(this.vehicle)
            .subscribe(function (x) { return console.log(x); }, function (err) {
            _this.toastrService.error('An expected error happened', 'Error', {
                timeOut: 5000
            });
        });
    };
    VehicleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-form',
            template: __webpack_require__(/*! ./vehicle-form.component.html */ "./src/app/components/vehicle-form/vehicle-form.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-form.component.css */ "./src/app/components/vehicle-form/vehicle-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__["VehicleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], VehicleFormComponent);
    return VehicleFormComponent;
}());



/***/ }),

/***/ "./src/app/services/vehicle.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/vehicle.service.ts ***!
  \*********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleService = /** @class */ (function () {
    function VehicleService(http) {
        this.http = http;
    }
    VehicleService.prototype.getMakes = function () {
        return this.http.get('http://localhost:5000/api/makes')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    VehicleService.prototype.getFeatures = function () {
        return this.http.get('http://localhost:5000/api/features')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    VehicleService.prototype.create = function (vehicle) {
        return this.http.post('http://localhost:5000/api/vehicles', vehicle)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    VehicleService.prototype.getVehicle = function (id) {
        return this.http.get('http://localhost:5000/api/vehicles/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    VehicleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], VehicleService);
    return VehicleService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\Job\VegaSeparate\vegaAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map