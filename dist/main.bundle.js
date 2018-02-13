webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__ = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__["a" /* VideoCenterComponent */] },
    { path: 'videos1', component: __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__["a" /* VideoCenterComponent */] },
    { path: 'videos2', component: __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__["a" /* VideoCenterComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">TreeApp</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n    <li><a routerLink=\"/videos\" routerLinkActive=\"active\">Tree</a></li>\n    <li><a href=\"/api/videos0\">Root</a></li>\n    <li><a href=\"/api/videos1\">1st Parent</a></li>\n    <li><a href=\"/api/videos2\">2nd Parent</a></li>\n    </ul>\n  </div>\n</nav>    \n<div class=\"container\">\n  <router-outlet></router-outlet>      \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__video_center_video_center_component__ = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video_list_video_list_component__ = __webpack_require__("../../../../../src/app/video-list/video-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_detail_video_detail_component__ = __webpack_require__("../../../../../src/app/video-detail/video-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__video_list2_video_list2_component__ = __webpack_require__("../../../../../src/app/video-list2/video-list2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__video_list3_video_list3_component__ = __webpack_require__("../../../../../src/app/video-list3/video-list3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__video_center_video_center_component__["a" /* VideoCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__video_list_video_list_component__["a" /* VideoListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__video_detail_video_detail_component__["a" /* VideoDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__safe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_11__video_list2_video_list2_component__["a" /* VideoList2Component */],
                __WEBPACK_IMPORTED_MODULE_12__video_list3_video_list3_component__["a" /* VideoList3Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1>Tree Application</h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select {\n\twidth: 100%;\n    background: #fcfcfc;\n    border: 1px solid #ccc;\n    height: 37px;\n    border-radius: 5px;\n    padding-left: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-3\">\n\t\t<div *ngIf=\"!hidenewVideo\">\n\t\t\t<h2>New Node</h2>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>Level</label>\n\t\t\t\t<div style=\"display: flex;\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" style=\"flex: 1;\" name=\"level\" ngModel #level>\n\t\t\t\t\t<button style=\"margin-left: 5px;\" class=\"btn btn-success\" (click)=\"renderForm(level.value)\">Select</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<form *ngIf=\"fvis1\" #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\" class=\"well\">\n\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n\t\t\t\t\t<label>1st Parent</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [ngModel]=\"defVal\" required name=\"parent1\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n\t\t\t\t\t<label>2nd Parent</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [ngModel]=\"defVal\" name=\"parent2\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" required name=\"title\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n\t\t\t\t\t<label>Level</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [ngModel]=\"defl1\" name=\"level\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Save</button>\n\t\t\t</form>\n\t\t\t<form *ngIf=\"fvis2\" #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\" class=\"well\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Root</label>\n\t\t\t\t\t<select (change)=\"handle(selectField.value);\" #selectField>\n\t\t\t\t\t\t<option *ngFor=\"let video of videos\"><span *ngIf=\"video.level == '0'\">{{video.title}}</span></option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n\t\t\t\t\t<label>Root</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [ngModel]=\"def2Valp1\" required name=\"parent1\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n\t\t\t\t\t<label>2nd Parent</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [ngModel]=\"defVal\" name=\"parent2\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" required name=\"title\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n\t\t\t\t\t<label>Level</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [ngModel]=\"defl2\" name=\"level\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Save</button>\n\t\t\t</form>\n\t\t\t<form *ngIf=\"fvis3\" #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\" class=\"well\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>1st Parent</label>\n\t\t\t\t\t<select (change)=\"handle2(selectField2.value);\" #selectField2>\n\t\t\t\t\t\t<option *ngFor=\"let video of videos\"><span *ngIf=\"video.level == '0'\">{{video.title}}</span></option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n\t\t\t\t\t<label>1st Parent</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [ngModel]=\"def3Valp1\" required name=\"parent1\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>2nd Parent</label>\n\t\t\t\t\t<select (change)=\"handle3(selectField3.value);\" #selectField3>\n\t\t\t\t\t\t<option *ngFor=\"let video of videos\"><span *ngIf=\"video.level == '1'\">{{video.title}}</span></option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n\t\t\t\t\t<label>2nd Parent</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [ngModel]=\"def3Valp2\" required name=\"parent2\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" required name=\"title\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n\t\t\t\t\t<label>Level</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [ngModel]=\"defl3\" name=\"level\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Save</button>\n\t\t\t</form>\n\t\t</div>\n\t\t<video-detail *ngIf=\"selectedVideo && hidenewVideo\" \n\t\t(updateVideoEvent)=\"onUpdateVideoEvent($event)\" \n\t\t(deleteVideoEvent)=\"onDeleteVideoEvent($event)\"\n\t\t [video]=\"selectedVideo\">\n\t\t</video-detail>\n\t</div>\n\t<div class=\"col-sm-3\">\n\t\t<button style=\"margin-bottom:2px;\" type=\"button\" (click)=\"newVideo()\" class=\"btn btn-success btn-block\">+ New Node</button>\n\t\t<video-list [videos]=\"videos\" (SelectVideo)=\"onSelectVideo($event)\"></video-list>\n\t</div>\n\t<div class=\"col-sm-3\">\n\t\t<button style=\"margin-bottom:2px;\" type=\"button\" (click)=\"newVideo()\" class=\"btn btn-success btn-block\">+ New Node</button>\n\t\t<video-list2 [videos]=\"videos\" (SelectVideo)=\"onSelectVideo($event)\"></video-list2>\n\t</div>\n\t<div class=\"col-sm-3\">\n\t\t<button style=\"margin-bottom:2px;\" type=\"button\" (click)=\"newVideo()\" class=\"btn btn-success btn-block\">+ New Node</button>\n\t\t<video-list3 [videos]=\"videos\" (SelectVideo)=\"onSelectVideo($event)\"></video-list3>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_service__ = __webpack_require__("../../../../../src/app/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoCenterComponent = /** @class */ (function () {
    function VideoCenterComponent(_videoService) {
        this._videoService = _videoService;
        this.hidenewVideo = true;
        this.fvis1 = false;
        this.fvis2 = false;
        this.fvis3 = false;
        this.selectedValue = null;
        this.defVal = 'null';
        this.defValp = 'null';
        this.def2Valp1 = 'null';
        this.def3Valp1 = 'null';
        this.def3Valp2 = 'null';
        this.defl1 = '0';
        this.defl2 = '1';
        this.defl3 = '2';
        this.selectedValue2 = null;
    }
    VideoCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideos()
            .subscribe(function (resVideoData) { return _this.videos = resVideoData; });
    };
    VideoCenterComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        console.log(this.selectedVideo);
    };
    VideoCenterComponent.prototype.newVideo = function () {
        this.hidenewVideo = false;
    };
    VideoCenterComponent.prototype.handle = function (val) {
        this.def2Valp1 = val;
        console.log(val);
    };
    VideoCenterComponent.prototype.handle2 = function (val) {
        this.def3Valp1 = val;
        console.log(val);
    };
    VideoCenterComponent.prototype.handle3 = function (val) {
        this.def3Valp2 = val;
        console.log(val);
    };
    VideoCenterComponent.prototype.renderForm = function (level) {
        if (level == 0) {
            this.fvis1 = true;
            this.fvis2 = false;
            this.fvis3 = false;
        }
        if (level == 1) {
            this.fvis1 = false;
            this.fvis2 = true;
            this.fvis3 = false;
        }
        if (level == 2) {
            this.fvis1 = false;
            this.fvis2 = false;
            this.fvis3 = true;
        }
    };
    VideoCenterComponent.prototype.onSubmitAddVideo = function (video) {
        var _this = this;
        this._videoService.addVideo(video)
            .subscribe(function (resNewVideo) {
            _this.videos.push(resNewVideo);
            _this.hidenewVideo = true;
            _this.selectedVideo = resNewVideo;
        });
    };
    VideoCenterComponent.prototype.onUpdateVideoEvent = function (video) {
        this._videoService.updateVideo(video)
            .subscribe(function (resUpdatedVideo) { return video = resUpdatedVideo; });
        this.selectedVideo = null;
    };
    ;
    VideoCenterComponent.prototype.onDeleteVideoEvent = function (video) {
        var videoArray = this.videos;
        this._videoService.deleteVideo(video)
            .subscribe(function (resDeletedVideo) {
            for (var i = 0; i < videoArray.length; i++) {
                if (videoArray[i]._id === video._id) {
                    videoArray.splice(i, 1);
                }
            }
        });
        this.selectedVideo = null;
    };
    ;
    VideoCenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-video-center',
            template: __webpack_require__("../../../../../src/app/video-center/video-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-center/video-center.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__video_service__["a" /* VideoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__video_service__["a" /* VideoService */]])
    ], VideoCenterComponent);
    return VideoCenterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/video-detail/video-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-detail/video-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form>  \n        <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{video.title}}</h3>     \n        <div *ngIf=\"editTitle\" class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"title\" required placeholder=\"title\"\n            [(ngModel)]=\"video.title\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"parent1\" required placeholder=\"1st Parent Node\"\n            [(ngModel)]=\"video.parent1\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"parent2\" required placeholder=\"2nd Parent Node\"\n            [(ngModel)]=\"video.parent2\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"level\" required placeholder=\"Level\"\n            [(ngModel)]=\"video.level\">\n        </div>\n        <button type=\"button\" (click)=\"updateVideo()\" class=\"btn btn-primary\">Update</button>  \n        <button type=\"button\" (click)=\"deleteVideo()\" class=\"btn btn-danger\">Delete</button>    \n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/video-detail/video-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoDetailComponent = /** @class */ (function () {
    function VideoDetailComponent() {
        this.editTitle = false;
        this.updateVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.deleteVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
    };
    VideoDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    VideoDetailComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    VideoDetailComponent.prototype.updateVideo = function () {
        this.updateVideoEvent.emit(this.video);
    };
    VideoDetailComponent.prototype.deleteVideo = function () {
        this.deleteVideoEvent.emit(this.video);
    };
    VideoDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'video-detail',
            template: __webpack_require__("../../../../../src/app/video-detail/video-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-detail/video-detail.component.css")],
            inputs: ['video'],
            outputs: ['updateVideoEvent', 'deleteVideoEvent']
        }),
        __metadata("design:paramtypes", [])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n\tcursor: pointer;\n}\n\nul {\n\t-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n\t        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"nav nav-pills nav-stacked\">\n    <li (click)=\"onSelect(video)\" *ngFor=\"let video of videos\"><a *ngIf=\"video.level == '0'\">{{video.level}} :<span *ngIf=\"video.parent1 != 'null'\"> {{video.parent1}} -></span> <span *ngIf=\"video.parent2 != 'null'\">{{video.parent2}} -></span> {{video.title}}</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
        this.SelectVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    VideoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'video-list',
            template: __webpack_require__("../../../../../src/app/video-list/video-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-list/video-list.component.css")],
            inputs: ['videos'],
            outputs: ['SelectVideo']
        }),
        __metadata("design:paramtypes", [])
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/video-list2/video-list2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n\tcursor: pointer;\n}\n\nul {\n\t-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n\t        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-list2/video-list2.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"nav nav-pills nav-stacked\">\n    <li (click)=\"onSelect(video)\" *ngFor=\"let video of videos\"><a *ngIf=\"video.level == '1'\">{{video.level}} :<span *ngIf=\"video.parent1 != 'null'\"> {{video.parent1}} -></span> <span *ngIf=\"video.parent2 != 'null'\">{{video.parent2}} -></span> {{video.title}}</a></li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/video-list2/video-list2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoList2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoList2Component = /** @class */ (function () {
    function VideoList2Component() {
        this.SelectVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    VideoList2Component.prototype.ngOnInit = function () {
    };
    VideoList2Component.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    VideoList2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'video-list2',
            template: __webpack_require__("../../../../../src/app/video-list2/video-list2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-list2/video-list2.component.css")],
            inputs: ['videos'],
            outputs: ['SelectVideo']
        }),
        __metadata("design:paramtypes", [])
    ], VideoList2Component);
    return VideoList2Component;
}());



/***/ }),

/***/ "../../../../../src/app/video-list3/video-list3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n\tcursor: pointer;\n}\n\nul {\n\t-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n\t        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-list3/video-list3.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"nav nav-pills nav-stacked\">\n    <li (click)=\"onSelect(video)\" *ngFor=\"let video of videos\"><a *ngIf=\"video.level == '2'\">{{video.level}} :<span *ngIf=\"video.parent1 != 'null'\"> {{video.parent1}} -></span> <span *ngIf=\"video.parent2 != 'null'\">{{video.parent2}} -></span> {{video.title}}</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/video-list3/video-list3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoList3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoList3Component = /** @class */ (function () {
    function VideoList3Component() {
        this.SelectVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    VideoList3Component.prototype.ngOnInit = function () {
    };
    VideoList3Component.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    VideoList3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'video-list3',
            template: __webpack_require__("../../../../../src/app/video-list3/video-list3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-list3/video-list3.component.css")],
            inputs: ['videos'],
            outputs: ['SelectVideo']
        }),
        __metadata("design:paramtypes", [])
    ], VideoList3Component);
    return VideoList3Component;
}());



/***/ }),

/***/ "../../../../../src/app/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoService = /** @class */ (function () {
    function VideoService(_http) {
        this._http = _http;
        this._getUrl = "/api/videos";
        this._postUrl = "/api/video";
        this._putUrl = "/api/video/";
        this._deleteUrl = "/api/video/";
    }
    VideoService.prototype.getVideos = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.addVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.updateVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.deleteVideo = function (video) {
        return this._http.delete(this._deleteUrl + video._id)
            .map(function (response) { return response.json(); });
    };
    VideoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map