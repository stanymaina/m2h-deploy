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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/theme.module */ "./src/app/theme/theme.module.ts");




var routes = [
    {
        path: '',
        // canActivateChild: [AuthorizationGuard],
        children: [
            // routes here
            // { path: 'portal',
            // component: PortalComponent,
            // loadChildren: () =>  PortalModule
            // canActivate: [AfterLoginService],
            // data: {
            //   allowedRoles: ['root', 'admin', 'cashier', 'director', 'tenant']
            // }
            // },
            {
                path: '',
                // component: ThemeComponent,
                loadChildren: function () { return _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"]; },
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/script.service */ "./src/app/services/script.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(script, router) {
        this.script = script;
        this.router = router;
        this.title = 'hotel';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        this.load();
    }
    AppComponent.prototype.load = function () {
        /* this.script.load(
          'jquery',
          'migrate',
          'popper',
          'bootstrapjs',
          'easing',
          'waypoints',
          'waypoints',
          'stellar',
          'bdatepicker',
          'jtimepicker',
          'scrollax',
          'aos',
          'google-map',
          'main'
          ).then(data => {
          console.log('Script loaded ', data);
        }).catch(error => console.log(error)); */
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/authorization.service */ "./src/app/services/authorization.service.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/before-login.service */ "./src/app/services/before-login.service.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm5/sweetalert2-ngx-sweetalert2.js");

















function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SweetAlert2Module"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: [
                            'localhost:8000',
                            'localhost:8080',
                            'localhost:80',
                            'localhost:443',
                            '172.16.88.25:8000',
                            'api.mainahighwayhotel.com:443',
                            'api.mainahighwayhotel.com'
                        ],
                        blacklistedRoutes: ['torrent.com']
                    }
                }),
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__["OwlModule"]
            ],
            providers: [
                _services_jarwis_service__WEBPACK_IMPORTED_MODULE_10__["JarwisService"],
                _services_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_authorization_service__WEBPACK_IMPORTED_MODULE_13__["AuthorizationService"],
                _services_after_login_service__WEBPACK_IMPORTED_MODULE_14__["AfterLoginService"],
                _services_before_login_service__WEBPACK_IMPORTED_MODULE_15__["BeforeLoginService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/after-login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/after-login.service.ts ***!
  \*************************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");



var AfterLoginService = /** @class */ (function () {
    function AfterLoginService(Token) {
        this.Token = Token;
    }
    AfterLoginService.prototype.canActivate = function (route, state) {
        return this.Token.loggedIn();
    };
    AfterLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AfterLoginService);
    return AfterLoginService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");




var AuthService = /** @class */ (function () {
    function AuthService(Token) {
        this.Token = Token;
        this.loggedIn = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.Token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
    }
    AuthService.prototype.changeAuthStatus = function (value) {
        this.loggedIn.next(value);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authorization.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/authorization.service.ts ***!
  \***************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");



var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(jwtHelperService) {
        this.jwtHelperService = jwtHelperService;
    }
    AuthorizationService.prototype.isAuthorized = function (allowedRoles) {
        // check if the list of allowed roles is empty, if empty, authorize the user to access the page
        if (allowedRoles == null || allowedRoles.length === 0) {
            return true;
        }
        // get token from local storage or state management
        var token = localStorage.getItem('token');
        var role = localStorage.getItem('role_name');
        // decode token to read the payload details
        var decodeToken = this.jwtHelperService.decodeToken(token);
        // check if it was decoded successfully, if not the token is not valid, deny access
        if (!decodeToken) {
            console.log('Invalid token');
            return false;
        }
        // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
        // return allowedRoles.includes(decodeToken['role']);
        return allowedRoles.includes(role);
    };
    AuthorizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ }),

/***/ "./src/app/services/before-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/before-login.service.ts ***!
  \**************************************************/
/*! exports provided: BeforeLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function() { return BeforeLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");



var BeforeLoginService = /** @class */ (function () {
    function BeforeLoginService(Token) {
        this.Token = Token;
    }
    BeforeLoginService.prototype.canActivate = function (route, state) {
        return !this.Token.loggedIn();
    };
    BeforeLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], BeforeLoginService);
    return BeforeLoginService;
}());



/***/ }),

/***/ "./src/app/services/jarwis.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/jarwis.service.ts ***!
  \********************************************/
/*! exports provided: JarwisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JarwisService", function() { return JarwisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var JarwisService = /** @class */ (function () {
    function JarwisService(http) {
        this.http = http;
        /* private baseUrl = 'http://localhost:8080/api';
        private webUrl = 'http://localhost:8080';  */
        // Internet Points
        this.baseUrl = 'http://api.mainahighwayhotel.com/api';
        this.webUrl = 'http://api.mainahighwayhotel.com/';
    }
    JarwisService.prototype.signup = function (data) {
        return this.http.post(this.baseUrl + "/auth/signup", data);
    };
    JarwisService.prototype.login = function (data) {
        return this.http.post(this.baseUrl + "/auth/login", data);
    };
    JarwisService.prototype.sendPasswordResetLink = function (data) {
        return this.http.post(this.baseUrl + "/sendPasswordResetLink", data);
    };
    JarwisService.prototype.changePassword = function (data) {
        return this.http.post(this.baseUrl + "/resetPassword", data);
    };
    // Index URI
    JarwisService.prototype.getURI = function (url) {
        return this.http.get(this.baseUrl + "/" + url);
    };
    // Create URI
    JarwisService.prototype.createURI = function (url) {
        return this.http.get(this.baseUrl + "/" + url + "/create");
    };
    // Store URI
    JarwisService.prototype.postURI = function (url, data) {
        return this.http.post(this.baseUrl + "/" + url, data);
    };
    // Show URI
    JarwisService.prototype.showURI = function (url, id) {
        return this.http.get(this.baseUrl + "/" + url + "/" + id);
    };
    // Edit URI
    JarwisService.prototype.editURI = function (url, id) {
        return this.http.get(this.baseUrl + "/" + url + "/" + id + "/edit");
    };
    // Update URI
    JarwisService.prototype.putURI = function (url, id, data) {
        return this.http.put(this.baseUrl + "/" + url + "/" + id, data);
    };
    // Delete URI
    JarwisService.prototype.deleteURI = function (url, id) {
        return this.http.delete(this.baseUrl + "/" + url + "/" + id);
    };
    // Edit URI
    JarwisService.prototype.editWebURI = function (url, id) {
        return this.http.get(this.webUrl + "/" + url + "/" + id + "/edit");
    };
    JarwisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JarwisService);
    return JarwisService;
}());



/***/ }),

/***/ "./src/app/services/library.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/library.service.ts ***!
  \*********************************************/
/*! exports provided: LibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryService", function() { return LibraryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var LibraryService = /** @class */ (function () {
    function LibraryService(document) {
        this.document = document;
        this._loadedLibraries = {};
    }
    LibraryService.prototype.lazyLoadLibraries = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.loadScript('/assets/islagrande/js/main.js'),
            this.loadStyle('/assets/islagrande/css/style.css')
        ]);
    };
    LibraryService.prototype.lazyLoadLibrariesBack = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.loadScript('/assets/islagrande/js/jquery.min.js'),
            this.loadScript('/assets/islagrande/js/jquery-migrate-3.0.1.min.js'),
            this.loadScript('/assets/islagrande/js/popper.min.js'),
            this.loadScript('/assets/islagrande/js/bootstrap.min.js'),
            this.loadScript('/assets/islagrande/js/jquery.easing.1.3.js'),
            this.loadScript('/assets/islagrande/js/jquery.waypoints.min.js'),
            this.loadScript('/assets/islagrande/js/jquery.stellar.min.js'),
            this.loadScript('/assets/islagrande/js/owl.carousel.min.js'),
            this.loadScript('/assets/islagrande/js/jquery.magnific-popup.min.js'),
            this.loadScript('/assets/islagrande/js/aos.js'),
            this.loadScript('/assets/islagrande/js/jquery.animateNumber.min.js'),
            this.loadScript('/assets/islagrande/js/bootstrap-datepicker.js'),
            // this.loadScript('/assets/islagrande/js/jquery.timepicker.min.js'),
            this.loadScript('/assets/islagrande/js/scrollax.min.js'),
            // this.loadScript('/assets/islagrande/js/google-map.js'),
            this.loadScript('/assets/islagrande/js/main.js'),
        ]);
    };
    LibraryService.prototype.lazyJqueryLibraries = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.loadScript('/assets/islagrande/js/jquery-migrate-3.0.1.min.js'),
            this.loadScript('/assets/islagrande/js/popper.min.js'),
            this.loadScript('/assets/islagrande/js/bootstrap.min.js'),
            this.loadScript('/assets/islagrande/js/jquery.easing.1.3.js'),
            this.loadScript('/assets/islagrande/js/jquery.waypoints.min.js'),
            this.loadScript('/assets/islagrande/js/jquery.stellar.min.js'),
            this.loadScript('/assets/islagrande/js/owl.carousel.min.js'),
            this.loadScript('/assets/islagrande/js/jquery.magnific-popup.min.js'),
            this.loadScript('/assets/islagrande/js/aos.js'),
            this.loadScript('/assets/islagrande/js/jquery.animateNumber.min.js'),
            this.loadScript('/assets/islagrande/js/bootstrap-datepicker.js'),
            // this.loadScript('/assets/islagrande/js/jquery.timepicker.min.js'),
            this.loadScript('/assets/islagrande/js/scrollax.min.js'),
        ]);
    };
    LibraryService.prototype.loadScript = function (url) {
        var _this = this;
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }
        this._loadedLibraries[url] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        var script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
        script.onload = function () {
            _this._loadedLibraries[url].next();
            _this._loadedLibraries[url].complete();
        };
        this.document.body.appendChild(script);
        return this._loadedLibraries[url].asObservable();
    };
    LibraryService.prototype.loadStyle = function (url) {
        var _this = this;
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }
        this._loadedLibraries[url] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        var style = this.document.createElement('link');
        style.type = 'text/css';
        style.href = url;
        style.rel = 'stylesheet';
        style.onload = function () {
            _this._loadedLibraries[url].next();
            _this._loadedLibraries[url].complete();
        };
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
        return this._loadedLibraries[url].asObservable();
    };
    LibraryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], LibraryService);
    return LibraryService;
}());



/***/ }),

/***/ "./src/app/services/script.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/script.service.ts ***!
  \********************************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _script_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.store */ "./src/app/services/script.store.ts");



var ScriptService = /** @class */ (function () {
    function ScriptService() {
        var _this = this;
        this.scripts = {};
        _script_store__WEBPACK_IMPORTED_MODULE_2__["ScriptStore"].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                // load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) { //IE
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === 'Loaded' || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else { // Others
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
        });
    };
    ScriptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScriptService);
    return ScriptService;
}());



/***/ }),

/***/ "./src/app/services/script.store.ts":
/*!******************************************!*\
  !*** ./src/app/services/script.store.ts ***!
  \******************************************/
/*! exports provided: ScriptStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
var ScriptStore = [
    { name: 'jquery', src: './../assets/islagrande/js/jquery.min.js' },
    { name: 'migrate', src: './../assets/islagrande/js/jquery-migrate-3.0.1.min.js' },
    { name: 'popper', src: './../assets/islagrande/js/popper.min.js' },
    { name: 'bootstrapjs', src: './../assets/islagrande/js/bootstrap.min.js' },
    { name: 'easing', src: './../assets/islagrande/js/jquery.easing.1.3.js' },
    { name: 'waypoints', src: './../assets/islagrande/js/jquery.waypoints.min.js' },
    { name: 'stellar', src: './../assets/islagrande/js/jquery.stellar.min.js' },
    { name: 'aos', src: './../assets/islagrande/js/aos.js' },
    { name: 'bdatepicker', src: './../assets/islagrande/js/bootstrap-datepicker.js' },
    { name: 'jtimepicker', src: './../assets/islagrande/js/jquery.timepicker.min.js' },
    { name: 'scrollax', src: './../assets/islagrande/js/scrollax.min.js' },
    { name: 'google-map', src: './../assets/islagrande/js/google-map.js' },
    { name: 'main', src: './../assets/islagrande/js/main.js' },
];


/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenService = /** @class */ (function () {
    function TokenService() {
        this.iss = {
        // login: 'http://localhost:8000/api/auth/login',
        // signup: 'http://localhost:8000/api/auth/signup'
        // login: 'http://api.mainahighwayhotel.com/api/auth/login',
        // signup: 'http://api.mainahighwayhotel.com/api/auth/signup'
        };
    }
    TokenService.prototype.handle = function (token, username) {
        this.set(token);
        this.setUsername(username);
    };
    TokenService.prototype.handleRole = function (token, role, username) {
        this.set(token);
        this.setRole(role);
        this.setUsername(username);
    };
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('access_token', token);
    };
    TokenService.prototype.setRole = function (role) {
        localStorage.setItem('role', role);
        localStorage.setItem('role_name', role.name);
    };
    TokenService.prototype.setUsername = function (username) {
        localStorage.setItem('username', username);
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.getRole = function () {
        return localStorage.getItem('role_name');
    };
    TokenService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('role_name');
        localStorage.removeItem('username');
    };
    TokenService.prototype.isValid = function () {
        var token = this.get();
        if (token) {
            var payload = this.payload(token);
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    };
    TokenService.prototype.payload = function (token) {
        var payload = token.split('.')[1];
        return this.decode(payload);
    };
    TokenService.prototype.decode = function (payload) {
        return JSON.parse(atob(payload));
    };
    TokenService.prototype.loggedIn = function () {
        return this.isValid();
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/theme/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/theme/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/theme/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <section class=\"home-slider js-fullheight owl-carousel\">\n      <div class=\"slider-item js-fullheight\" style=\"background-image:url(/assets/islagrande/images/bg_3.jpg);\">\n      \t<div class=\"overlay\"></div>\n        <div class=\"container\">\n          <div class=\"row slider-text justify-content-center align-items-center\">\n\n            <div class=\"col-md-7 col-sm-12 text-center ftco-animate\">\n            \t<h1 class=\"mb-3 mt-2 bread\">About Me</h1>\n\t            <p class=\"breadcrumbs\"><span class=\"mr-2\"><a [routerLink]=\"['/home']\">Home</a></span> <span>About Me</span></p>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </section>\n\n\t\t<section class=\"ftco-section ftc-no-pb ftc-no-pt bg-light\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center\" style=\"background-image: url(/assets/islagrande/images/bg_2.jpg);\">\n\t\t\t\t\t\t<a href=\"https://vimeo.com/45830194\" class=\"icon popup-vimeo d-flex justify-content-center align-items-center\">\n\t\t\t\t\t\t\t<span class=\"icon-play\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-7 py-5 wrap-about pb-md-5 ftco-animate\">\n\t          <div class=\"heading-section pt-md-5 pl-md-5 mb-5\">\n\t          \t<div class=\"ml-md-0\">\n\t\t          \t<span class=\"subheading\">Welcome to islaGrande Hotel</span>\n\t\t            <h2 class=\"mb-4\">Watch Our Video</h2>\n\t            </div>\n\t          </div>\n\t          <div class=\"pb-md-5\">\n\t\t\t\t\t\t\t<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>\n\t\t\t\t\t\t\t<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>\n\t\t\t\t\t\t\t<ul class=\"ftco-social d-flex\">\n                <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-twitter\"></span></a></li>\n                <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-facebook\"></span></a></li>\n                <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-google-plus\"></span></a></li>\n                <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\n              </ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\n    <section class=\"ftco-section testimony-section\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center mb-5 pb-3\">\n          <div class=\"col-md-7 heading-section ftco-animate text-center\">\n          \t<span class=\"subheading\">Testimony</span>\n            <h2 class=\"mb-4\">Our satisfied customer says</h2>\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\n          </div>\n        </div>\n        <div class=\"row ftco-animate\">\n          <div class=\"col-md-12\">\n            <div class=\"carousel-testimony owl-carousel\">\n              <div class=\"item\">\n                <div class=\"testimony-wrap p-4 pb-5 text-center\">\n                  <div class=\"user-img mb-5\" style=\"background-image: url(/assets/islagrande/images/person_1.jpg)\">\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\n                      <i class=\"icon-quote-left\"></i>\n                    </span>\n                  </div>\n                  <div class=\"text\">\n                  \t<p class=\"rate\">\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star-half-full\"></span>\n\t\t        \t\t\t\t</p>\n                    <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                    <p class=\"name\">Garreth Smith</p>\n                    <span class=\"position\">Guest from London</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"testimony-wrap p-4 pb-5 text-center\">\n                  <div class=\"user-img mb-5\" style=\"background-image: url(/assets/islagrande/images/person_2.jpg)\">\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\n                      <i class=\"icon-quote-left\"></i>\n                    </span>\n                  </div>\n                  <div class=\"text\">\n                  \t<p class=\"rate\">\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star-half-full\"></span>\n\t\t        \t\t\t\t</p>\n                    <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                    <p class=\"name\">Garreth Smith</p>\n                    <span class=\"position\">Guests from USA</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"testimony-wrap p-4 pb-5 text-center\">\n                  <div class=\"user-img mb-5\" style=\"background-image: url(/assets/islagrande/images/person_3.jpg)\">\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\n                      <i class=\"icon-quote-left\"></i>\n                    </span>\n                  </div>\n                  <div class=\"text\">\n                  \t<p class=\"rate\">\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star-half-full\"></span>\n\t\t        \t\t\t\t</p>\n                    <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                    <p class=\"name\">Garreth Smith</p>\n                    <span class=\"position\">Guest from Hawaii</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"testimony-wrap p-4 pb-5 text-center\">\n                  <div class=\"user-img mb-5\" style=\"background-image: url(/assets/islagrande/images/person_1.jpg)\">\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\n                      <i class=\"icon-quote-left\"></i>\n                    </span>\n                  </div>\n                  <div class=\"text\">\n                  \t<p class=\"rate\">\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star-half-full\"></span>\n\t\t        \t\t\t\t</p>\n                    <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                    <p class=\"name\">Garreth Smith</p>\n                    <span class=\"position\">Guests from Norway</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"testimony-wrap p-4 pb-5 text-center\">\n                  <div class=\"user-img mb-5\" style=\"background-image: url(/assets/islagrande/images/person_1.jpg)\">\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\n                      <i class=\"icon-quote-left\"></i>\n                    </span>\n                  </div>\n                  <div class=\"text\">\n                  \t<p class=\"rate\">\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star\"></span>\n\t\t        \t\t\t\t\t<span class=\"icon-star-half-full\"></span>\n\t\t        \t\t\t\t</p>\n                    <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                    <p class=\"name\">Garreth Smith</p>\n                    <span class=\"position\">Guest from Italy</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>"

/***/ }),

/***/ "./src/app/theme/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/theme/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/library.service */ "./src/app/services/library.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var AboutComponent = /** @class */ (function () {
    function AboutComponent(svc, document) {
        this.svc = svc;
        this.document = document;
    }
    AboutComponent.prototype.ngOnInit = function () {
        // this.svc.lazyLoadLibrariesBack().subscribe(_ => {
        //   this.setupQuill();
        //   console.log('updared');
        // });
        console.log('about updared');
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        this.loadScript();
    };
    AboutComponent.prototype.loadScript = function () {
        (function ($) {
            "use strict";
            $(window).stellar({
                responsive: true,
                parallaxBackgrounds: true,
                parallaxElements: true,
                horizontalScrolling: false,
                hideDistantElements: false,
                scrollProperty: 'scroll',
                horizontalOffset: 0,
                verticalOffset: 0
            });
            var fullHeight = function () {
                $('.js-fullheight').css('height', $(window).height());
                $(window).resize(function () {
                    $('.js-fullheight').css('height', $(window).height());
                });
            };
            fullHeight();
            // loader
            var loader = function () {
                setTimeout(function () {
                    if ($('#ftco-loader').length > 0) {
                        $('#ftco-loader').removeClass('show');
                    }
                }, 1);
            };
            loader();
            // Scrollax
            $.Scrollax();
            var carousel = function () {
                $('.home-slider').owlCarousel({
                    loop: true,
                    autoplay: true,
                    margin: 0,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    nav: true,
                    autoplayHoverPause: false,
                    items: 1,
                    navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
                $('.carousel-testimony').owlCarousel({
                    center: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: true,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
                $('.carousel-rooms').owlCarousel({
                    center: true,
                    autoplay: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: false,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            };
            carousel();
            $('nav .dropdown').hover(function () {
                var $this = $(this);
                // 	 timer;
                // clearTimeout(timer);
                $this.addClass('show');
                $this.find('> a').attr('aria-expanded', true);
                // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').addClass('show');
            }, function () {
                var $this = $(this);
                // timer;
                // timer = setTimeout(function(){
                $this.removeClass('show');
                $this.find('> a').attr('aria-expanded', false);
                // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').removeClass('show');
                // }, 100);
            });
            $('#dropdown04').on('show.bs.dropdown', function () {
                console.log('show');
            });
            // scroll
            var scrollWindow = function () {
                $(window).scroll(function () {
                    var $w = $(this), st = $w.scrollTop(), navbar = $('.ftco_navbar'), sd = $('.js-scroll-wrap');
                    if (st > 150) {
                        if (!navbar.hasClass('scrolled')) {
                            navbar.addClass('scrolled');
                        }
                    }
                    if (st < 150) {
                        if (navbar.hasClass('scrolled')) {
                            navbar.removeClass('scrolled sleep');
                        }
                    }
                    if (st > 350) {
                        if (!navbar.hasClass('awake')) {
                            navbar.addClass('awake');
                        }
                        if (sd.length > 0) {
                            sd.addClass('sleep');
                        }
                    }
                    if (st < 350) {
                        if (navbar.hasClass('awake')) {
                            navbar.removeClass('awake');
                            navbar.addClass('sleep');
                        }
                        if (sd.length > 0) {
                            sd.removeClass('sleep');
                        }
                    }
                });
            };
            scrollWindow();
            var counter = function () {
                $('#section-counter').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                        $('.number').each(function () {
                            var $this = $(this), num = $this.data('number');
                            console.log(num);
                            $this.animateNumber({
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000);
                        });
                    }
                }, { offset: '95%' });
            };
            counter();
            var contentWayPoint = function () {
                var i = 0;
                $('.ftco-animate').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        i++;
                        $(this.element).addClass('item-animate');
                        setTimeout(function () {
                            $('body .ftco-animate.item-animate').each(function (k) {
                                var el = $(this);
                                setTimeout(function () {
                                    var effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn ftco-animated');
                                    }
                                    else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft ftco-animated');
                                    }
                                    else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight ftco-animated');
                                    }
                                    else {
                                        el.addClass('fadeInUp ftco-animated');
                                    }
                                    el.removeClass('item-animate');
                                }, k * 50, 'easeInOutExpo');
                            });
                        }, 100);
                    }
                }, { offset: '95%' });
            };
            contentWayPoint();
            // navigation
            var OnePageNav = function () {
                $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
                    e.preventDefault();
                    var hash = this.hash, navToggler = $('.navbar-toggler');
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 700, 'easeInOutExpo', function () {
                        window.location.hash = hash;
                    });
                    if (navToggler.is(':visible')) {
                        navToggler.click();
                    }
                });
                $('body').on('activate.bs.scrollspy', function () {
                    console.log('nice');
                });
            };
            OnePageNav();
            // magnific popup
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
            $('.checkin_date, .checkout_date').datepicker({
                'format': 'm/d/yyyy',
                'autoclose': true
            });
        })(jQuery);
    };
    AboutComponent.prototype.setupQuill = function () {
        // if (!Quill) {
        //   return;
        // }
        // set up External JS library
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/theme/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/theme/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"], Object])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/theme/component/component.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/component/component.module.ts ***!
  \*****************************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], ComponentModule);
    return ComponentModule;
}());



/***/ }),

/***/ "./src/app/theme/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/theme/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/theme/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home-slider js-fullheight owl-carousel\">\n  <div class=\"slider-item js-fullheight\" style=\"background-image:url(/assets/islagrande/images/bg_3.jpg);\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row slider-text justify-content-center align-items-center\">\n\n        <div class=\"col-md-7 col-sm-12 text-center ftco-animate\">\n          <h1 class=\"mb-3 mt-2 bread\">Contact</h1>\n          <p class=\"breadcrumbs\"><span class=\"mr-2\"><a [routerLink]=\"['/home']\">Home</a></span> <span>Contact</span></p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section contact-section\">\n  <div class=\"container\">\n    <div class=\"row d-flex mb-5 contact-info\">\n      <div class=\"col-md-12 mb-4\">\n        <h2 class=\"heading\">Contact Information</h2>\n      </div>\n      <div class=\"w-100\"></div>\n      <div class=\"col-md-3 d-flex\">\n        <div class=\"con align-self-stretch p-3\">\n          <p><span>Address:</span> Off Nairobi Meru Road, Opp G4s, Embu Kenya</p>\n        </div>\n      </div>\n      <div class=\"col-md-3 d-flex\">\n        <div class=\"con align-self-stretch p-3\">\n          <p><span>Phone:</span> <a href=\"tel://+254722827700\">+254 722 827 700</a></p>\n        </div>\n      </div>\n      <div class=\"col-md-3 d-flex\">\n        <div class=\"con align-self-stretch p-3\">\n          <p><span>Email:</span> <a href=\"mailto:info@yoursite.com\">info@yoursite.com</a></p>\n        </div>\n      </div>\n      <div class=\"col-md-3 d-flex\">\n        <div class=\"con align-self-stretch p-3\">\n          <p><span>Website</span> <a href=\"#\">yoursite.com</a></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row block-9\">\n      <div class=\"col-md-6 pr-md-5\">\n        <form action=\"#\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Your Name\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Your Email\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n          </div>\n          <div class=\"form-group\">\n            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"7\" class=\"form-control\" placeholder=\"Message\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"submit\" value=\"Send Message\" class=\"btn btn-primary py-3 px-5\">\n          </div>\n        </form>\n      \n      </div>\n\n      <div class=\"col-md-6 d-flex\">\n        <div id=\"map\"></div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/theme/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/theme/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/library.service */ "./src/app/services/library.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_script_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/script.service */ "./src/app/services/script.service.ts");





var ContactComponent = /** @class */ (function () {
    function ContactComponent(script, svc, document) {
        this.script = script;
        this.svc = svc;
        this.document = document;
    }
    ContactComponent.prototype.ngOnInit = function () {
        // this.svc.lazyLoadLibrariesBack().subscribe(_ => {
        // });
        /* this.script.load(
                'jquery',
                'migrate',
                'popper',
                'bootstrapjs',
                'easing',
                'waypoints',
                'stellar',
                'aos',
                'bdatepicker',
                'scrollax',
                'main'
          ).then(data => {
          console.log('Script loaded ', data);
        }).catch(error => console.log(error)); */
        console.log('contacts updared');
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        (function ($) {
            "use strict";
            $(window).stellar({
                responsive: true,
                parallaxBackgrounds: true,
                parallaxElements: true,
                horizontalScrolling: false,
                hideDistantElements: false,
                scrollProperty: 'scroll',
                horizontalOffset: 0,
                verticalOffset: 0
            });
            var fullHeight = function () {
                $('.js-fullheight').css('height', $(window).height());
                $(window).resize(function () {
                    $('.js-fullheight').css('height', $(window).height());
                });
            };
            fullHeight();
            // loader
            var loader = function () {
                setTimeout(function () {
                    if ($('#ftco-loader').length > 0) {
                        $('#ftco-loader').removeClass('show');
                    }
                }, 1);
            };
            loader();
            // Scrollax
            $.Scrollax();
            var carousel = function () {
                $('.home-slider').owlCarousel({
                    loop: true,
                    autoplay: true,
                    margin: 0,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    nav: true,
                    autoplayHoverPause: false,
                    items: 1,
                    navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
                $('.carousel-testimony').owlCarousel({
                    center: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: true,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
                $('.carousel-rooms').owlCarousel({
                    center: true,
                    autoplay: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: false,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            };
            carousel();
            $('nav .dropdown').hover(function () {
                var $this = $(this);
                // 	 timer;
                // clearTimeout(timer);
                $this.addClass('show');
                $this.find('> a').attr('aria-expanded', true);
                // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').addClass('show');
            }, function () {
                var $this = $(this);
                // timer;
                // timer = setTimeout(function(){
                $this.removeClass('show');
                $this.find('> a').attr('aria-expanded', false);
                // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').removeClass('show');
                // }, 100);
            });
            $('#dropdown04').on('show.bs.dropdown', function () {
                console.log('show');
            });
            // scroll
            var scrollWindow = function () {
                $(window).scroll(function () {
                    var $w = $(this), st = $w.scrollTop(), navbar = $('.ftco_navbar'), sd = $('.js-scroll-wrap');
                    if (st > 150) {
                        if (!navbar.hasClass('scrolled')) {
                            navbar.addClass('scrolled');
                        }
                    }
                    if (st < 150) {
                        if (navbar.hasClass('scrolled')) {
                            navbar.removeClass('scrolled sleep');
                        }
                    }
                    if (st > 350) {
                        if (!navbar.hasClass('awake')) {
                            navbar.addClass('awake');
                        }
                        if (sd.length > 0) {
                            sd.addClass('sleep');
                        }
                    }
                    if (st < 350) {
                        if (navbar.hasClass('awake')) {
                            navbar.removeClass('awake');
                            navbar.addClass('sleep');
                        }
                        if (sd.length > 0) {
                            sd.removeClass('sleep');
                        }
                    }
                });
            };
            scrollWindow();
            var counter = function () {
                $('#section-counter').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                        $('.number').each(function () {
                            var $this = $(this), num = $this.data('number');
                            console.log(num);
                            $this.animateNumber({
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000);
                        });
                    }
                }, { offset: '95%' });
            };
            counter();
            var contentWayPoint = function () {
                var i = 0;
                $('.ftco-animate').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        i++;
                        $(this.element).addClass('item-animate');
                        setTimeout(function () {
                            $('body .ftco-animate.item-animate').each(function (k) {
                                var el = $(this);
                                setTimeout(function () {
                                    var effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn ftco-animated');
                                    }
                                    else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft ftco-animated');
                                    }
                                    else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight ftco-animated');
                                    }
                                    else {
                                        el.addClass('fadeInUp ftco-animated');
                                    }
                                    el.removeClass('item-animate');
                                }, k * 50, 'easeInOutExpo');
                            });
                        }, 100);
                    }
                }, { offset: '95%' });
            };
            contentWayPoint();
            // navigation
            var OnePageNav = function () {
                $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
                    e.preventDefault();
                    var hash = this.hash, navToggler = $('.navbar-toggler');
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 700, 'easeInOutExpo', function () {
                        window.location.hash = hash;
                    });
                    if (navToggler.is(':visible')) {
                        navToggler.click();
                    }
                });
                $('body').on('activate.bs.scrollspy', function () {
                    console.log('nice');
                });
            };
            OnePageNav();
            // magnific popup
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
            $('.checkin_date, .checkout_date').datepicker({
                'format': 'm/d/yyyy',
                'autoclose': true
            });
        })(jQuery);
        // this.svc.lazyJqueryLibraries().subscribe(_ => {
        // if (!Quill) {
        //   // Quill = this.document.defaultView.Quill;
        // }
        this.setupQuill();
        console.log('updared');
        // });
    };
    ContactComponent.prototype.setupQuill = function () {
        // if (!Quill) {
        //   return;
        // }
        // set up External JS library
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/theme/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/theme/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_script_service__WEBPACK_IMPORTED_MODULE_4__["ScriptService"],
            src_app_services_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"], Object])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/theme/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/theme/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/theme/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- <section class=\"hero-wrap d-flex js-fullheight\">\n  <div class=\"forth js-fullheight d-flex align-items-center\">\n    <div class=\"text\">\n      <h2>Welcome to IslaGrande Hotel</h2>\n      <h1 class=\"mb-5\">A Perfect Place To Stay</h1>\n      <p><a href=\"#\" class=\"btn-custom py-3 pr-2\">Make A Booking</a></p>\n    </div>\n  </div>\n  <div class=\"third js-fullheight\">\n      <owl-carousel [options]=\"mySlideOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'sliding']\" >\n        <div class=\"item slider-item js-fullheight\" *ngFor=\"let image of mySlideImages;let i = index\">\n          <div class=\"overlay\">\n            <img src={{image}}/>\n          </div>\n        </div>\n      </owl-carousel>\n    <section class=\"home-slider owl-carousel js-fullheight\">\n    </section>\n\n  </div>\n</section> -->\n\n<section class=\"hero-wrap d-flex js-fullheight\">\n  <div class=\"forth js-fullheight d-flex align-items-center\">\n    <div class=\"text\">\n      <h2>Welcome to Maina Highway Hotel</h2>\n      <h1 class=\"mb-5\">A Perfect Place To Stay</h1>\n      <p><a href=\"#\" class=\"btn-custom py-3 pr-2\">Make A Booking</a></p>\n    </div>\n  </div>\n  <div class=\"third js-fullheight\">\n    <section class=\"home-slider owl-carousel js-fullheight\">\n      <div class=\"slider-item js-fullheight\" style=\"background-image: url(assets/islagrande/images/bg_1.jpg);\">\n        <div class=\"overlay\"></div>\n      </div>\n\n      <div class=\"slider-item js-fullheight\" style=\"background-image: url(assets/islagrande/images/bg_2.jpg);\">\n        <div class=\"overlay\"></div>\n      </div>\n\n      <div class=\"slider-item js-fullheight\" style=\"background-image: url(assets/islagrande/images/bg_3.jpg);\">\n        <div class=\"overlay\"></div>\n      </div>\n\n      <div class=\"slider-item js-fullheight\" style=\"background-image: url(assets/islagrande/images/bg_4.jpg);\">\n        <div class=\"overlay\"></div>\n      </div>\n    </section>\n\n  </div>\n</section>\n\n<section class=\"ftco-booking\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg text-lg-right\">\n        <h3 class=\"mb-4 mb-lg-0\">Reserve A Perfect Room</h3>\n      </div>\n      <div class=\"col-lg-10\">\n          <!-- <form [formGroup]=\"Form\" (ngSubmit)=\"onSubmit(Form)\">\n              <input formControlName=\"name\" placeholder=\"Your name\">\n              <input formControlName=\"email\" placeholder=\"Your email\">\n              <input formControlName=\"message\" placeholder=\"Your message\">\n            \n              <button type=\"submit\">Send</button>\n          </form> -->\n         <form class=\"booking-form\" [formGroup]=\"reserveForm\" (ngSubmit)=\"onSubmit(reserveForm)\" accept-charset=\"UTF-8\">\n          <div class=\"d-lg-flex align-items-md-end\">\n            <div class=\"form-group mb-3 mb-lg-0 mr-4\">\n              <label for=\"#\">Check-in Date</label>\n              <input formControlName=\"checkin_date\" [owlDateTimeTrigger]=\"dt1\" [owlDateTime]=\"dt1\" class=\"form-control\" placeholder=\"Check-in date\" required>\n              <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n              <!-- <input type=\"datetime\" name=\"email\" formControlName=\"name\" class=\"form-control checkin_date\" placeholder=\"Check-in date\" required> -->\n            </div>\n            <div class=\"form-group mb-3 mb-lg-0 mr-4\">\n              <label for=\"#\">Check-out Date</label>\n              <input class=\"form-control\" formControlName=\"checkout_date\" [owlDateTimeTrigger]=\"dt2\" [owlDateTime]=\"dt2\" placeholder=\"Check-out date\" required>\n              <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\n              <!-- <input type=\"datetime\" name=\"password\" formControlName=\"email\" class=\"form-control checkout_date\" placeholder=\"Check-out date\" required> -->\n            </div>\n            <div class=\"form-group mb-3 mb-lg-0 mr-4\">\n              <label for=\"#\">Room Types</label>\n              <div class=\"form-field\">\n                <div class=\"select-wrap\">\n                  <div class=\"icon\"><span class=\"ion-ios-arrow-down\"></span></div>\n                    <!-- <select id=\"\" class=\"form-control\"> -->\n                    <select formControlName=\"room_type\" id=\"\" class=\"form-control\">\n                    <option value=\"suite\">Suite</option>\n                    <option value=\"\">Family Room</option>\n                    <option value=\"\">Deluxe Room</option>\n                    <option value=\"\">Classic Room</option>\n                    <option value=\"\">Superior Room</option>\n                    <option value=\"\">Luxury Room</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group mb-3 mb-lg-0 mr-4\">\n              <label for=\"#\">Adults</label>\n              <div class=\"form-field\">\n                <div class=\"select-wrap\">\n                  <div class=\"icon\"><span class=\"ion-ios-arrow-down\"></span></div>\n                  <select formControlName=\"adults\" id=\"\" class=\"form-control\">\n                    <!-- <select id=\"\" class=\"form-control\"> -->\n                    <option value=\"1\" selected>1</option>\n                    <option value=\"\">2</option>\n                    <option value=\"\">3</option>\n                    <option value=\"\">4</option>\n                    <option value=\"\">5</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group mb-3 mb-lg-0 mr-4\">\n              <label for=\"#\">Children</label>\n              <div class=\"form-field\">\n                <div class=\"select-wrap\">\n                  <div class=\"icon\"><span class=\"ion-ios-arrow-down\"></span></div>\n                    <select formControlName=\"kids\" id=\"\" class=\"form-control\">\n                    <!-- <select id=\"\" class=\"form-control\"> -->\n                    <option value=\"0\" selected>0</option>\n                    <option value=\"\">1</option>\n                    <option value=\"\">2</option>\n                    <option value=\"\">3</option>\n                    <option value=\"\">4</option>\n                    <option value=\"\">5</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <!-- <input type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary py-3 px-4\"> -->\n              <button class=\"btn btn-primary py-3 px-4\" type=\"submit\">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section ftco-services\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate\">\n        <div class=\"media block-6 services\">\n          <div class=\"icon d-flex justify-content-center align-items-center mb-4\">\n            <span class=\"flaticon-reception-bell\"></span>\n          </div>\n          <div class=\"media-body\">\n            <h3 class=\"heading\">25/7 Front Desk</h3>\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>\n            <p><a href=\"#\" class=\"btn-customize\">Read More</a></p>\n          </div>\n        </div>      \n      </div>\n      <div class=\"col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate\">\n        <div class=\"media block-6 services\">\n          <div class=\"icon d-flex justify-content-center align-items-center mb-4\">\n            <span class=\"flaticon-serving-dish\"></span>\n          </div>\n          <div class=\"media-body\">\n            <h3 class=\"heading\">Restaurant Bar</h3>\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>\n            <p><a href=\"#\" class=\"btn-customize\">Read More</a></p>\n          </div>\n        </div>    \n      </div>\n      <div class=\"col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate\">\n        <div class=\"media block-6 services\">\n          <div class=\"icon d-flex justify-content-center align-items-center mb-4\">\n            <span class=\"flaticon-car\"></span>\n          </div>\n          <div class=\"media-body\">\n            <h3 class=\"heading\">Transfer Services</h3>\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>\n            <p><a href=\"#\" class=\"btn-customize\">Read More</a></p>\n          </div>\n        </div>      \n      </div>\n      <div class=\"col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate\">\n        <div class=\"media block-6 services\">\n          <div class=\"icon d-flex justify-content-center align-items-center mb-4\">\n            <span class=\"flaticon-spa\"></span>\n          </div>\n          <div class=\"media-body\">\n            <h3 class=\"heading\">Spa Suites</h3>\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>\n            <p><a href=\"#\" class=\"btn-customize\">Read More</a></p>\n          </div>\n        </div>      \n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section ftco-room bg-light\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center mb-5 pb-3\">\n      <div class=\"col-md-7 heading-section ftco-animate text-center\">\n        <span class=\"subheading\">Rooms</span>\n        <h2 class=\"mb-4\">Book A Room</h2>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\n      </div>\n    </div>\n    <div class=\"carousel-rooms owl-carousel ftco-animate\">\n      <div class=\"item\">\n        <div class=\"room-wrap\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(/assets/islagrande/images/room-1.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Suite Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 3500<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <div class=\"room-wrap\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(assets/islagrande/images/room-2.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Family Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 5500<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <div class=\"room-wrap\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(assets/islagrande/images/room-3.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Deluxe Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 2000<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <div class=\"room-wrap\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(assets/islagrande/images/room-4.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Classic Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 1500<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <div class=\"room-wrap\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(assets/islagrande/images/room-5.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Superior Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 3500<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <div class=\"room-wrap\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(assets/islagrande/images/room-6.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Luxe Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 5000<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section ftco-menu\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center mb-5\">\n      <div class=\"col-md-7 heading-section text-center ftco-animate\">\n        <span class=\"subheading\">Discover</span>\n        <h2 class=\"mb-4\">Our Restaurants</h2>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n      </div>\n    </div>\n    <div class=\"row d-md-flex\">\n      <div class=\"col-lg-12 ftco-animate p-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-12 nav-link-wrap mb-5\">\n            <div class=\"nav ftco-animate nav-pills justify-content-center\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n              <a class=\"nav-link active\" id=\"v-pills-1-tab\" data-toggle=\"pill\" href=\"#v-pills-1\" role=\"tab\" aria-controls=\"v-pills-1\" aria-selected=\"true\">Main Dish</a>\n\n              <a class=\"nav-link\" id=\"v-pills-2-tab\" data-toggle=\"pill\" href=\"#v-pills-2\" role=\"tab\" aria-controls=\"v-pills-2\" aria-selected=\"false\">Drinks</a>\n\n              <a class=\"nav-link\" id=\"v-pills-3-tab\" data-toggle=\"pill\" href=\"#v-pills-3\" role=\"tab\" aria-controls=\"v-pills-3\" aria-selected=\"false\">Desserts</a>\n            </div>\n          </div>\n          <div class=\"col-md-12 d-flex align-items-center\">\n            \n            <div class=\"tab-content ftco-animate\" id=\"v-pills-tabContent\">\n\n              <div class=\"tab-pane fade show active\" id=\"v-pills-1\" role=\"tabpanel\" aria-labelledby=\"v-pills-1-tab\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(assets/islagrande/images/dish-1.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Grilled Beef</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 900</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(assets/islagrande/images/dish-2.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Grilled Beef</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 900</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(assets/islagrande/images/dish-3.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Grilled Beef</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 900</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"tab-pane fade\" id=\"v-pills-2\" role=\"tabpanel\" aria-labelledby=\"v-pills-2-tab\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(assets/islagrande/images/drink-1.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Lemonade Juice</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 180</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(assets/islagrande/images/drink-2.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Pineapple Juice</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 200</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(assets/islagrande/images/drink-3.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Soda Drinks</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 60</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"tab-pane fade\" id=\"v-pills-3\" role=\"tabpanel\" aria-labelledby=\"v-pills-3-tab\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(assets/islagrande/images/dessert-1.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Hot Cake Honey</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 300</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(assets/islagrande/images/dessert-2.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Hot Cake Honey</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 300</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(assets/islagrande/images/dessert-3.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Hot Cake Honey</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 300</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section ftco-counter img\" id=\"section-counter\" style=\"background-image: url(assets/islagrande/images/bg_3.jpg);\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"container\">\n    <div class=\"row d-md-flex justify-content-center align-items-center\">\n      <div class=\"col-lg-8\">\n        <div class=\"row d-md-flex align-items-center\">\n          <div class=\"col-md d-flex justify-content-center counter-wrap ftco-animate\">\n            <div class=\"block-18 text-center\">\n              <div class=\"text\">\n                <strong class=\"number\" data-number=\"50\">0</strong>\n                <span>Hotel Branches</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md d-flex justify-content-center counter-wrap ftco-animate\">\n            <div class=\"block-18 text-center\">\n              <div class=\"text\">\n                <strong class=\"number\" data-number=\"20000\">0</strong>\n                <span>Happy Guests</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md d-flex justify-content-center counter-wrap ftco-animate\">\n            <div class=\"block-18 text-center\">\n              <div class=\"text\">\n                <strong class=\"number\" data-number=\"100\">0</strong>\n                <span>Rooms</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md d-flex justify-content-center counter-wrap ftco-animate\">\n            <div class=\"block-18 text-center\">\n              <div class=\"text\">\n                <strong class=\"number\" data-number=\"100\">0</strong>\n                <span>Destinations</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section ftc-no-pb ftc-no-pt bg-light\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center\" style=\"background-image: url(assets/islagrande/images/bg_2.jpg);\">\n        <a href=\"https://vimeo.com/45830194\" class=\"icon popup-vimeo d-flex justify-content-center align-items-center\">\n          <span class=\"icon-play\"></span>\n        </a>\n      </div>\n      <div class=\"col-md-7 py-5 wrap-about pb-md-5 ftco-animate\">\n        <div class=\"heading-section pt-md-5 pl-md-5 mb-5\">\n          <div class=\"ml-md-0\">\n            <span class=\"subheading\">Welcome to islaGrande Hotel</span>\n            <h2 class=\"mb-4\">Watch Our Video</h2>\n          </div>\n        </div>\n        <div class=\"pb-md-5\">\n          <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>\n          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>\n          <ul class=\"ftco-social d-flex\">\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-twitter\"></span></a></li>\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-facebook\"></span></a></li>\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-google-plus\"></span></a></li>\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section testimony-section\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center mb-5 pb-3\">\n      <div class=\"col-md-7 heading-section ftco-animate text-center\">\n        <span class=\"subheading\">Testimony</span>\n        <h2 class=\"mb-4\">Our satisfied customer says</h2>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\n      </div>\n    </div>\n    <div class=\"row ftco-animate\">\n      <div class=\"col-md-12\">\n        <div class=\"carousel-testimony owl-carousel\">\n          <div class=\"item\">\n            <div class=\"testimony-wrap p-4 pb-5 text-center\">\n              <div class=\"user-img mb-5\" style=\"background-image: url(assets/islagrande/images/person_1.jpg)\">\n                <span class=\"quote d-flex align-items-center justify-content-center\">\n                  <i class=\"icon-quote-left\"></i>\n                </span>\n              </div>\n              <div class=\"text\">\n                <p class=\"rate\">\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star-half-full\"></span>\n                </p>\n                <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                <p class=\"name\">Garreth Smith</p>\n                <span class=\"position\">Guest from London</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"testimony-wrap p-4 pb-5 text-center\">\n              <div class=\"user-img mb-5\" style=\"background-image: url(assets/islagrande/images/person_2.jpg)\">\n                <span class=\"quote d-flex align-items-center justify-content-center\">\n                  <i class=\"icon-quote-left\"></i>\n                </span>\n              </div>\n              <div class=\"text\">\n                <p class=\"rate\">\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star-half-full\"></span>\n                </p>\n                <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                <p class=\"name\">Garreth Smith</p>\n                <span class=\"position\">Guests from USA</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"testimony-wrap p-4 pb-5 text-center\">\n              <div class=\"user-img mb-5\" style=\"background-image: url(assets/islagrande/images/person_3.jpg)\">\n                <span class=\"quote d-flex align-items-center justify-content-center\">\n                  <i class=\"icon-quote-left\"></i>\n                </span>\n              </div>\n              <div class=\"text\">\n                <p class=\"rate\">\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star-half-full\"></span>\n                </p>\n                <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                <p class=\"name\">Garreth Smith</p>\n                <span class=\"position\">Guest from Hawaii</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"testimony-wrap p-4 pb-5 text-center\">\n              <div class=\"user-img mb-5\" style=\"background-image: url(assets/islagrande/images/person_1.jpg)\">\n                <span class=\"quote d-flex align-items-center justify-content-center\">\n                  <i class=\"icon-quote-left\"></i>\n                </span>\n              </div>\n              <div class=\"text\">\n                <p class=\"rate\">\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star-half-full\"></span>\n                </p>\n                <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                <p class=\"name\">Garreth Smith</p>\n                <span class=\"position\">Guests from Norway</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"testimony-wrap p-4 pb-5 text-center\">\n              <div class=\"user-img mb-5\" style=\"background-image: url(assets/islagrande/images/person_1.jpg)\">\n                <span class=\"quote d-flex align-items-center justify-content-center\">\n                  <i class=\"icon-quote-left\"></i>\n                </span>\n              </div>\n              <div class=\"text\">\n                <p class=\"rate\">\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star\"></span>\n                  <span class=\"icon-star-half-full\"></span>\n                </p>\n                <p class=\"mb-5 pl-4 line\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n                <p class=\"name\">Garreth Smith</p>\n                <span class=\"position\">Guest from Italy</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"ftco-section bg-light\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center mb-5 pb-3\">\n      <div class=\"col-md-7 heading-section ftco-animate text-center\">\n        <span class=\"subheading\">Blog</span>\n        <h2 class=\"mb-4\">Our Latest Blog</h2>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\n      </div>\n    </div>\t\n    <div class=\"row\">\n      <div class=\"col-md-4 ftco-animate\">\n        <div class=\"blog-entry\">\n          <a href=\"blog-single.html\" class=\"block-20\" style=\"background-image: url('assets/islagrande/images/image_1.jpg');\">\n          </a>\n          <div class=\"text py-4\">\n            <div class=\"meta mb-3\">\n              <div><a href=\"#\">Oct. 12, 2018</a></div>\n              <div><a href=\"#\">Admin</a></div>\n              <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n            </div>\n            <div class=\"desc\">\n              <h3 class=\"heading\"><a href=\"#\">Even the all-powerful Pointing has no control about the blind texts</a></h3>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 ftco-animate\">\n        <div class=\"blog-entry\" data-aos-delay=\"100\">\n          <a href=\"blog-single.html\" class=\"block-20\" style=\"background-image: url('assets/islagrande/images/image_2.jpg');\">\n          </a>\n          <div class=\"text py-4\">\n            <div class=\"meta mb-3\">\n              <div><a href=\"#\">Oct. 12, 2018</a></div>\n              <div><a href=\"#\">Admin</a></div>\n              <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n            </div>\n            <div class=\"desc\">\n              <h3 class=\"heading\"><a href=\"#\">Even the all-powerful Pointing has no control about the blind texts</a></h3>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 ftco-animate\">\n        <div class=\"blog-entry\" data-aos-delay=\"200\">\n          <a href=\"blog-single.html\" class=\"block-20\" style=\"background-image: url('assets/islagrande/images/image_3.jpg');\">\n          </a>\n          <div class=\"text py-4\">\n            <div class=\"meta mb-3\">\n              <div><a href=\"#\">Oct. 12, 2018</a></div>\n              <div><a href=\"#\">Admin</a></div>\n              <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n            </div>\n            <div class=\"desc\">\n              <h3 class=\"heading\"><a href=\"#\">Even the all-powerful Pointing has no control about the blind texts</a></h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/theme/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/theme/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/library.service */ "./src/app/services/library.service.ts");
/* harmony import */ var src_app_services_jarwis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









var HomeComponent = /** @class */ (function () {
    function HomeComponent(svc, Jarwis, Token, router, iziToast, fb
    // @Inject(DOCUMENT) private readonly document: any
    ) {
        this.svc = svc;
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.iziToast = iziToast;
        this.fb = fb;
        // Min moment: February 12 2018, 10:30
        this.min = new Date(2018, 1, 12, 10, 30);
        // Max moment: April 21 2018, 20:30
        this.max = new Date(2018, 3, 21, 20, 30);
        this.error = [];
        this.loginform = {
            email: null,
            password: null
        };
        this.mySlideImages = ['../assets/islagrande/images/bg_1.jpg', '../assets/islagrande/images/bg_3.jpg'];
        this.myCarouselImages = ['../assets/islagrande/images/bg_1.jpg', '../assets/images/image2.jpeg', '../assets/islagrande/images/bg_3.jpg'];
        this.mySlideOptions = { items: 1, dots: true, nav: true };
        this.myCarouselOptions = { items: 3, dots: true, nav: true };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.reserveForm = this.fb.group({
            checkin_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            checkout_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            room_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            adults: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            kids: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        /* this.myForm = new FormGroup({
          checkin: new FormControl(''),
          checkout: new FormControl(''),
          room_type: new FormControl(''),
          adults: new FormControl(''),
          kids: new FormControl('')
        });
    
        this.form = this.fb.group({
          "checkin_date": this.firstName,
          "checkout_date": this.firstName,
          "room_type": this.firstName,
          "adults": this.firstName,
          "kids": this.firstName
        }); */
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.loadScript();
        /* this.myForm = new FormGroup({
          checkin: new FormControl(''),
          checkout: new FormControl(''),
          room_type: new FormControl(''),
          adults: new FormControl(''),
          kids: new FormControl('')
        }); */
    };
    HomeComponent.prototype.onLogin = function () {
        var _this = this;
        this.Jarwis.login(this.loginform).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    HomeComponent.prototype.onSubmitR = function (form) {
        if (form.valid) {
            console.log(form.value);
            // ...our form is valid, we can submit the data
        }
    };
    HomeComponent.prototype.onSubmit = function (nform) {
        var _this = this;
        console.log('Valid?', nform.valid); // true or false
        console.log('checkin_date', nform.value.checkin_date);
        console.log('Email', nform.value.checkout_date);
        var url = 'find_rooms';
        // console.log('Form successful submit.');
        // console.log(productForm.value);
        this.Jarwis.postURI(url, nform.value).subscribe(function (res) {
            console.log(res);
            if (res['status'] === 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire(res['response'].time_from, "is available !", "success");
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire("Failed!", "Something went wrong", "success");
            }
            _this.reserveForm.reset();
        }, function (err) {
            console.log('Error occured');
        });
    };
    HomeComponent.prototype.handleResponse = function (data) {
        this.Token.set(data.token);
        // console.log(data);
        $('#auth-modal').modal('hide');
        this.router.navigateByUrl('/portal');
    };
    HomeComponent.prototype.handleError = function (error) {
        // console.log(error.error);
        this.iziToast.show({ title: error.error.error });
        this.error = error.error.error;
    };
    HomeComponent.prototype.loadScript = function () {
        (function ($) {
            "use strict";
            $(window).stellar({
                responsive: true,
                parallaxBackgrounds: true,
                parallaxElements: true,
                horizontalScrolling: false,
                hideDistantElements: false,
                scrollProperty: 'scroll',
                horizontalOffset: 0,
                verticalOffset: 0
            });
            var fullHeight = function () {
                $('.js-fullheight').css('height', $(window).height());
                $(window).resize(function () {
                    $('.js-fullheight').css('height', $(window).height());
                });
            };
            fullHeight();
            // loader
            var loader = function () {
                setTimeout(function () {
                    if ($('#ftco-loader').length > 0) {
                        $('#ftco-loader').removeClass('show');
                    }
                }, 1);
            };
            loader();
            // Scrollax
            $.Scrollax();
            var carousel = function () {
                $('.home-slider').owlCarousel({
                    loop: true,
                    autoplay: true,
                    margin: 0,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    nav: true,
                    autoplayHoverPause: false,
                    items: 1,
                    navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
                $('.carousel-testimony').owlCarousel({
                    center: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: true,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
                $('.carousel-rooms').owlCarousel({
                    center: true,
                    autoplay: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: false,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            };
            carousel();
            $('nav .dropdown').hover(function () {
                var $this = $(this);
                // 	 timer;
                // clearTimeout(timer);
                $this.addClass('show');
                $this.find('> a').attr('aria-expanded', true);
                // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').addClass('show');
            }, function () {
                var $this = $(this);
                // timer;
                // timer = setTimeout(function(){
                $this.removeClass('show');
                $this.find('> a').attr('aria-expanded', false);
                // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').removeClass('show');
                // }, 100);
            });
            $('#dropdown04').on('show.bs.dropdown', function () {
                console.log('show');
            });
            // scroll
            var scrollWindow = function () {
                $(window).scroll(function () {
                    var $w = $(this), st = $w.scrollTop(), navbar = $('.ftco_navbar'), sd = $('.js-scroll-wrap');
                    if (st > 150) {
                        if (!navbar.hasClass('scrolled')) {
                            navbar.addClass('scrolled');
                        }
                    }
                    if (st < 150) {
                        if (navbar.hasClass('scrolled')) {
                            navbar.removeClass('scrolled sleep');
                        }
                    }
                    if (st > 350) {
                        if (!navbar.hasClass('awake')) {
                            navbar.addClass('awake');
                        }
                        if (sd.length > 0) {
                            sd.addClass('sleep');
                        }
                    }
                    if (st < 350) {
                        if (navbar.hasClass('awake')) {
                            navbar.removeClass('awake');
                            navbar.addClass('sleep');
                        }
                        if (sd.length > 0) {
                            sd.removeClass('sleep');
                        }
                    }
                });
            };
            scrollWindow();
            var counter = function () {
                $('#section-counter').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                        $('.number').each(function () {
                            var $this = $(this), num = $this.data('number');
                            console.log(num);
                            $this.animateNumber({
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000);
                        });
                    }
                }, { offset: '95%' });
            };
            counter();
            var contentWayPoint = function () {
                var i = 0;
                $('.ftco-animate').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        i++;
                        $(this.element).addClass('item-animate');
                        setTimeout(function () {
                            $('body .ftco-animate.item-animate').each(function (k) {
                                var el = $(this);
                                setTimeout(function () {
                                    var effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn ftco-animated');
                                    }
                                    else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft ftco-animated');
                                    }
                                    else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight ftco-animated');
                                    }
                                    else {
                                        el.addClass('fadeInUp ftco-animated');
                                    }
                                    el.removeClass('item-animate');
                                }, k * 50, 'easeInOutExpo');
                            });
                        }, 100);
                    }
                }, { offset: '95%' });
            };
            contentWayPoint();
            // navigation
            var OnePageNav = function () {
                $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
                    e.preventDefault();
                    var hash = this.hash, navToggler = $('.navbar-toggler');
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 700, 'easeInOutExpo', function () {
                        window.location.hash = hash;
                    });
                    if (navToggler.is(':visible')) {
                        navToggler.click();
                    }
                });
                $('body').on('activate.bs.scrollspy', function () {
                    console.log('nice');
                });
            };
            OnePageNav();
            // magnific popup
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
            $('.checkin_date, .checkout_date').datepicker({
                //   'format': 'm/d/yyyy',
                'format': 'yyyy-mm-dd',
                'autoclose': true
            });
            /* $('.checkout_date').datetimepicker({
              format: "yyyy-yy-DD HH:mm"
            });*/
        })(jQuery);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/theme/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/theme/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"],
            src_app_services_jarwis_service__WEBPACK_IMPORTED_MODULE_3__["JarwisService"],
            src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__["Ng2IzitoastService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
            // @Inject(DOCUMENT) private readonly document: any
        ])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/theme/restaurant/restaurant.component.css":
/*!***********************************************************!*\
  !*** ./src/app/theme/restaurant/restaurant.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/restaurant/restaurant.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/restaurant/restaurant.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home-slider js-fullheight owl-carousel\">\n  <div class=\"slider-item js-fullheight\" style=\"background-image:url(/assets/islagrande/images/bg_3.jpg);\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row slider-text justify-content-center align-items-center\">\n\n        <div class=\"col-md-7 col-sm-12 text-center ftco-animate\">\n          <h1 class=\"mb-3 mt-2 bread\">Restaurants</h1>\n          <p class=\"breadcrumbs\"><span class=\"mr-2\"><a [routerLink]=\"['/home']\">Home</a></span> <span>Restaurants</span></p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section ftco-menu\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center mb-5\">\n      <div class=\"col-md-7 heading-section text-center ftco-animate\">\n        <span class=\"subheading\">Discover</span>\n        <h2 class=\"mb-4\">Our Restaurants</h2>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n      </div>\n    </div>\n    <div class=\"row d-md-flex\">\n      <div class=\"col-lg-12 ftco-animate p-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-12 nav-link-wrap mb-5\">\n            <div class=\"nav ftco-animate nav-pills justify-content-center\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n              <a class=\"nav-link active\" id=\"v-pills-1-tab\" data-toggle=\"pill\" href=\"#v-pills-1\" role=\"tab\" aria-controls=\"v-pills-1\" aria-selected=\"true\">Main Dish</a>\n\n              <a class=\"nav-link\" id=\"v-pills-2-tab\" data-toggle=\"pill\" href=\"#v-pills-2\" role=\"tab\" aria-controls=\"v-pills-2\" aria-selected=\"false\">Drinks</a>\n\n              <a class=\"nav-link\" id=\"v-pills-3-tab\" data-toggle=\"pill\" href=\"#v-pills-3\" role=\"tab\" aria-controls=\"v-pills-3\" aria-selected=\"false\">Desserts</a>\n            </div>\n          </div>\n          <div class=\"col-md-12 d-flex align-items-center\">\n            \n            <div class=\"tab-content ftco-animate\" id=\"v-pills-tabContent\">\n\n              <div class=\"tab-pane fade show active\" id=\"v-pills-1\" role=\"tabpanel\" aria-labelledby=\"v-pills-1-tab\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dish-1.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Grilled Beef</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dish-2.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Grilled Beef</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dish-3.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Grilled Beef</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dish-4.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Grilled Beef</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dish-5.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Grilled Beef</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dish-6.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Grilled Beef</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"tab-pane fade\" id=\"v-pills-2\" role=\"tabpanel\" aria-labelledby=\"v-pills-2-tab\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/drink-1.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Lemonade Juice</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/drink-2.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Pineapple Juice</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/drink-3.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Soda Drinks</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/drink-4.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Lemonade Juice</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/drink-5.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Pineapple Juice</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/drink-6.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Soda Drinks</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"tab-pane fade\" id=\"v-pills-3\" role=\"tabpanel\" aria-labelledby=\"v-pills-3-tab\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dessert-1.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Hot Cake Honey</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dessert-2.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Hot Cake Honey</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dessert-3.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Hot Cake Honey</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dessert-4.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Hot Cake Honey</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dessert-5.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Hot Cake Honey</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <div class=\"menu-wrap\">\n                      <a href=\"#\" class=\"menu-img img mb-4\" style=\"background-image: url(/assets/islagrande/images/dessert-6.jpg);\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"#\">Hot Cake Honey</a></h3>\n                        <p class=\"rate\">\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star\"></span>\n                          <span class=\"icon-star-half-full\"></span>\n                        </p>\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <p class=\"price\"><span>Ksh 2.90</span></p>\n                        <p><a href=\"#\" class=\"btn-customize\">Add to cart</a></p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/theme/restaurant/restaurant.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/restaurant/restaurant.component.ts ***!
  \**********************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent() {
    }
    RestaurantComponent.prototype.ngAfterViewInit = function () {
        this.loadScript();
    };
    RestaurantComponent.prototype.loadScript = function () {
        (function ($) {
            "use strict";
            $(window).stellar({
                responsive: true,
                parallaxBackgrounds: true,
                parallaxElements: true,
                horizontalScrolling: false,
                hideDistantElements: false,
                scrollProperty: 'scroll',
                horizontalOffset: 0,
                verticalOffset: 0
            });
            var fullHeight = function () {
                $('.js-fullheight').css('height', $(window).height());
                $(window).resize(function () {
                    $('.js-fullheight').css('height', $(window).height());
                });
            };
            fullHeight();
            // loader
            var loader = function () {
                setTimeout(function () {
                    if ($('#ftco-loader').length > 0) {
                        $('#ftco-loader').removeClass('show');
                    }
                }, 1);
            };
            loader();
            // Scrollax
            $.Scrollax();
            var carousel = function () {
                $('.home-slider').owlCarousel({
                    loop: true,
                    autoplay: true,
                    margin: 0,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    nav: true,
                    autoplayHoverPause: false,
                    items: 1,
                    navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
                $('.carousel-testimony').owlCarousel({
                    center: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: true,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
                $('.carousel-rooms').owlCarousel({
                    center: true,
                    autoplay: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: false,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            };
            carousel();
            $('nav .dropdown').hover(function () {
                var $this = $(this);
                // 	 timer;
                // clearTimeout(timer);
                $this.addClass('show');
                $this.find('> a').attr('aria-expanded', true);
                // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').addClass('show');
            }, function () {
                var $this = $(this);
                // timer;
                // timer = setTimeout(function(){
                $this.removeClass('show');
                $this.find('> a').attr('aria-expanded', false);
                // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').removeClass('show');
                // }, 100);
            });
            $('#dropdown04').on('show.bs.dropdown', function () {
                console.log('show');
            });
            // scroll
            var scrollWindow = function () {
                $(window).scroll(function () {
                    var $w = $(this), st = $w.scrollTop(), navbar = $('.ftco_navbar'), sd = $('.js-scroll-wrap');
                    if (st > 150) {
                        if (!navbar.hasClass('scrolled')) {
                            navbar.addClass('scrolled');
                        }
                    }
                    if (st < 150) {
                        if (navbar.hasClass('scrolled')) {
                            navbar.removeClass('scrolled sleep');
                        }
                    }
                    if (st > 350) {
                        if (!navbar.hasClass('awake')) {
                            navbar.addClass('awake');
                        }
                        if (sd.length > 0) {
                            sd.addClass('sleep');
                        }
                    }
                    if (st < 350) {
                        if (navbar.hasClass('awake')) {
                            navbar.removeClass('awake');
                            navbar.addClass('sleep');
                        }
                        if (sd.length > 0) {
                            sd.removeClass('sleep');
                        }
                    }
                });
            };
            scrollWindow();
            var counter = function () {
                $('#section-counter').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                        $('.number').each(function () {
                            var $this = $(this), num = $this.data('number');
                            console.log(num);
                            $this.animateNumber({
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000);
                        });
                    }
                }, { offset: '95%' });
            };
            counter();
            var contentWayPoint = function () {
                var i = 0;
                $('.ftco-animate').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        i++;
                        $(this.element).addClass('item-animate');
                        setTimeout(function () {
                            $('body .ftco-animate.item-animate').each(function (k) {
                                var el = $(this);
                                setTimeout(function () {
                                    var effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn ftco-animated');
                                    }
                                    else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft ftco-animated');
                                    }
                                    else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight ftco-animated');
                                    }
                                    else {
                                        el.addClass('fadeInUp ftco-animated');
                                    }
                                    el.removeClass('item-animate');
                                }, k * 50, 'easeInOutExpo');
                            });
                        }, 100);
                    }
                }, { offset: '95%' });
            };
            contentWayPoint();
            // navigation
            var OnePageNav = function () {
                $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
                    e.preventDefault();
                    var hash = this.hash, navToggler = $('.navbar-toggler');
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 700, 'easeInOutExpo', function () {
                        window.location.hash = hash;
                    });
                    if (navToggler.is(':visible')) {
                        navToggler.click();
                    }
                });
                $('body').on('activate.bs.scrollspy', function () {
                    console.log('nice');
                });
            };
            OnePageNav();
            // magnific popup
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
            $('.checkin_date, .checkout_date').datepicker({
                'format': 'm/d/yyyy',
                'autoclose': true
            });
        })(jQuery);
    };
    RestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant',
            template: __webpack_require__(/*! ./restaurant.component.html */ "./src/app/theme/restaurant/restaurant.component.html"),
            styles: [__webpack_require__(/*! ./restaurant.component.css */ "./src/app/theme/restaurant/restaurant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "./src/app/theme/rooms/rooms.component.css":
/*!*************************************************!*\
  !*** ./src/app/theme/rooms/rooms.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Jvb21zL3Jvb21zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/rooms/rooms.component.html":
/*!**************************************************!*\
  !*** ./src/app/theme/rooms/rooms.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home-slider js-fullheight owl-carousel\">\n  <div class=\"slider-item js-fullheight\" style=\"background-image:url(/assets/islagrande/images/bg_3.jpg);\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row slider-text justify-content-center align-items-center\">\n\n        <div class=\"col-md-7 col-sm-12 text-center ftco-animate\">\n          <h1 class=\"mb-3 mt-2 bread\">Rooms</h1>\n          <p class=\"breadcrumbs\"><span class=\"mr-2\"><a [routerLink]=\"['/home']\">Home</a></span> <span>Rooms</span></p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section ftco-room\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"room-wrap ftco-animate\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(/assets/islagrande/images/room-1.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Suite Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 3500<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"room-wrap ftco-animate\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(/assets/islagrande/images/room-2.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Family Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 5500<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"room-wrap ftco-animate\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(/assets/islagrande/images/room-3.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Deluxe Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 2000<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"room-wrap ftco-animate\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(/assets/islagrande/images/room-4.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Classic Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 1500<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"room-wrap ftco-animate\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(/assets/islagrande/images/room-5.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Superior Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 3500<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"room-wrap ftco-animate\">\n          <a href=\"room.html\" class=\"img\" style=\"background-image: url(/assets/islagrande/images/room-6.jpg);\"></a>\n          <div class=\"text pt-4 pl-lg-5\">\n            <h2><a href=\"room.html\">Luxe Room</a></h2>\n            <p class=\"rate\">\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star\"></span>\n              <span class=\"icon-star-half-full\"></span>\n            </p>\n            <p class=\"d-flex price-details align-items-center pt-3\">\n              <span>Starting From</span>\n              <span class=\"price\">Ksh 5000<small>/ night</small></span>\n            </p>\n            <p><a href=\"#\" class=\"btn-customize\">Reserve A Room</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/theme/rooms/rooms.component.ts":
/*!************************************************!*\
  !*** ./src/app/theme/rooms/rooms.component.ts ***!
  \************************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoomsComponent = /** @class */ (function () {
    function RoomsComponent() {
    }
    RoomsComponent.prototype.ngAfterViewInit = function () {
        this.loadScript();
    };
    RoomsComponent.prototype.loadScript = function () {
        (function ($) {
            "use strict";
            $(window).stellar({
                responsive: true,
                parallaxBackgrounds: true,
                parallaxElements: true,
                horizontalScrolling: false,
                hideDistantElements: false,
                scrollProperty: 'scroll',
                horizontalOffset: 0,
                verticalOffset: 0
            });
            var fullHeight = function () {
                $('.js-fullheight').css('height', $(window).height());
                $(window).resize(function () {
                    $('.js-fullheight').css('height', $(window).height());
                });
            };
            fullHeight();
            // loader
            var loader = function () {
                setTimeout(function () {
                    if ($('#ftco-loader').length > 0) {
                        $('#ftco-loader').removeClass('show');
                    }
                }, 1);
            };
            loader();
            // Scrollax
            $.Scrollax();
            var carousel = function () {
                $('.home-slider').owlCarousel({
                    loop: true,
                    autoplay: true,
                    margin: 0,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    nav: true,
                    autoplayHoverPause: false,
                    items: 1,
                    navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
                $('.carousel-testimony').owlCarousel({
                    center: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: true,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
                $('.carousel-rooms').owlCarousel({
                    center: true,
                    autoplay: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: false,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            };
            carousel();
            $('nav .dropdown').hover(function () {
                var $this = $(this);
                // 	 timer;
                // clearTimeout(timer);
                $this.addClass('show');
                $this.find('> a').attr('aria-expanded', true);
                // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').addClass('show');
            }, function () {
                var $this = $(this);
                // timer;
                // timer = setTimeout(function(){
                $this.removeClass('show');
                $this.find('> a').attr('aria-expanded', false);
                // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').removeClass('show');
                // }, 100);
            });
            $('#dropdown04').on('show.bs.dropdown', function () {
                console.log('show');
            });
            // scroll
            var scrollWindow = function () {
                $(window).scroll(function () {
                    var $w = $(this), st = $w.scrollTop(), navbar = $('.ftco_navbar'), sd = $('.js-scroll-wrap');
                    if (st > 150) {
                        if (!navbar.hasClass('scrolled')) {
                            navbar.addClass('scrolled');
                        }
                    }
                    if (st < 150) {
                        if (navbar.hasClass('scrolled')) {
                            navbar.removeClass('scrolled sleep');
                        }
                    }
                    if (st > 350) {
                        if (!navbar.hasClass('awake')) {
                            navbar.addClass('awake');
                        }
                        if (sd.length > 0) {
                            sd.addClass('sleep');
                        }
                    }
                    if (st < 350) {
                        if (navbar.hasClass('awake')) {
                            navbar.removeClass('awake');
                            navbar.addClass('sleep');
                        }
                        if (sd.length > 0) {
                            sd.removeClass('sleep');
                        }
                    }
                });
            };
            scrollWindow();
            var counter = function () {
                $('#section-counter').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                        $('.number').each(function () {
                            var $this = $(this), num = $this.data('number');
                            console.log(num);
                            $this.animateNumber({
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000);
                        });
                    }
                }, { offset: '95%' });
            };
            counter();
            var contentWayPoint = function () {
                var i = 0;
                $('.ftco-animate').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        i++;
                        $(this.element).addClass('item-animate');
                        setTimeout(function () {
                            $('body .ftco-animate.item-animate').each(function (k) {
                                var el = $(this);
                                setTimeout(function () {
                                    var effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn ftco-animated');
                                    }
                                    else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft ftco-animated');
                                    }
                                    else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight ftco-animated');
                                    }
                                    else {
                                        el.addClass('fadeInUp ftco-animated');
                                    }
                                    el.removeClass('item-animate');
                                }, k * 50, 'easeInOutExpo');
                            });
                        }, 100);
                    }
                }, { offset: '95%' });
            };
            contentWayPoint();
            // navigation
            var OnePageNav = function () {
                $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
                    e.preventDefault();
                    var hash = this.hash, navToggler = $('.navbar-toggler');
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 700, 'easeInOutExpo', function () {
                        window.location.hash = hash;
                    });
                    if (navToggler.is(':visible')) {
                        navToggler.click();
                    }
                });
                $('body').on('activate.bs.scrollspy', function () {
                    console.log('nice');
                });
            };
            OnePageNav();
            // magnific popup
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
            $('.checkin_date, .checkout_date').datepicker({
                'format': 'm/d/yyyy',
                'autoclose': true
            });
        })(jQuery);
    };
    RoomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rooms',
            template: __webpack_require__(/*! ./rooms.component.html */ "./src/app/theme/rooms/rooms.component.html"),
            styles: [__webpack_require__(/*! ./rooms.component.css */ "./src/app/theme/rooms/rooms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/app/theme/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/theme/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/theme/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home-slider js-fullheight owl-carousel\">\n  <div class=\"slider-item js-fullheight\" style=\"background-image:url(/assets/islagrande/images/bg_3.jpg);\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row slider-text justify-content-center align-items-center\">\n\n        <div class=\"col-md-7 col-sm-12 text-center ftco-animate\">\n          <h1 class=\"mb-3 mt-2 bread\">Amenities</h1>\n          <p class=\"breadcrumbs\"><span class=\"mr-2\"><a [routerLink]=\"['/home']\">Home</a></span> <span>Services</span></p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"ftco-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 amenities d-md-flex\">\n        <div class=\"img\" style=\"background-image: url(/assets/islagrande/images/amenities-1.jpg);\"></div>\n        <div class=\"text p-5\">\n          <p class=\"price\">Free</p>\n          <!-- <h2>Airport Shuttle &amp; Parking Lot</h2> -->\n          <h2> Parking Lot</h2>\n          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>\n        </div>\n      </div>\n      <div class=\"col-md-12 amenities d-md-flex\">\n        <div class=\"img order-last\" style=\"background-image: url(/assets/islagrande/images/room-2.jpg);\"></div>\n        <div class=\"text p-5\">\n          <p class=\"price\">Free</p>\n          <h2>Room Service</h2>\n          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>\n        </div>\n      </div>\n      <div class=\"col-md-12 amenities d-md-flex\">\n        <div class=\"img\" style=\"background-image: url(/assets/islagrande/images/amenities-2.jpg);\"></div>\n        <div class=\"text p-5\">\n          <p class=\"price\">Free</p>\n          <h2>High Speed Wifi</h2>\n          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>\n        </div>\n      </div>\n      <div class=\"col-md-12 amenities d-md-flex\">\n        <div class=\"img order-last\" style=\"background-image: url(/assets/islagrande/images/amenities-3.jpg);\"></div>\n        <div class=\"text p-5\">\n          <p class=\"price\">Ksh 8300 <small>/ hall</small></p>\n          <h2>Conference Hall for Business Events</h2>\n          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/theme/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/theme/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngAfterViewInit = function () {
        this.loadScript();
    };
    ServicesComponent.prototype.loadScript = function () {
        (function ($) {
            "use strict";
            $(window).stellar({
                responsive: true,
                parallaxBackgrounds: true,
                parallaxElements: true,
                horizontalScrolling: false,
                hideDistantElements: false,
                scrollProperty: 'scroll',
                horizontalOffset: 0,
                verticalOffset: 0
            });
            var fullHeight = function () {
                $('.js-fullheight').css('height', $(window).height());
                $(window).resize(function () {
                    $('.js-fullheight').css('height', $(window).height());
                });
            };
            fullHeight();
            // loader
            var loader = function () {
                setTimeout(function () {
                    if ($('#ftco-loader').length > 0) {
                        $('#ftco-loader').removeClass('show');
                    }
                }, 1);
            };
            loader();
            // Scrollax
            $.Scrollax();
            var carousel = function () {
                $('.home-slider').owlCarousel({
                    loop: true,
                    autoplay: true,
                    margin: 0,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    nav: true,
                    autoplayHoverPause: false,
                    items: 1,
                    navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
                $('.carousel-testimony').owlCarousel({
                    center: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: true,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
                $('.carousel-rooms').owlCarousel({
                    center: true,
                    autoplay: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: false,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            };
            carousel();
            $('nav .dropdown').hover(function () {
                var $this = $(this);
                // 	 timer;
                // clearTimeout(timer);
                $this.addClass('show');
                $this.find('> a').attr('aria-expanded', true);
                // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').addClass('show');
            }, function () {
                var $this = $(this);
                // timer;
                // timer = setTimeout(function(){
                $this.removeClass('show');
                $this.find('> a').attr('aria-expanded', false);
                // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
                $this.find('.dropdown-menu').removeClass('show');
                // }, 100);
            });
            $('#dropdown04').on('show.bs.dropdown', function () {
                console.log('show');
            });
            // scroll
            var scrollWindow = function () {
                $(window).scroll(function () {
                    var $w = $(this), st = $w.scrollTop(), navbar = $('.ftco_navbar'), sd = $('.js-scroll-wrap');
                    if (st > 150) {
                        if (!navbar.hasClass('scrolled')) {
                            navbar.addClass('scrolled');
                        }
                    }
                    if (st < 150) {
                        if (navbar.hasClass('scrolled')) {
                            navbar.removeClass('scrolled sleep');
                        }
                    }
                    if (st > 350) {
                        if (!navbar.hasClass('awake')) {
                            navbar.addClass('awake');
                        }
                        if (sd.length > 0) {
                            sd.addClass('sleep');
                        }
                    }
                    if (st < 350) {
                        if (navbar.hasClass('awake')) {
                            navbar.removeClass('awake');
                            navbar.addClass('sleep');
                        }
                        if (sd.length > 0) {
                            sd.removeClass('sleep');
                        }
                    }
                });
            };
            scrollWindow();
            var counter = function () {
                $('#section-counter').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                        $('.number').each(function () {
                            var $this = $(this), num = $this.data('number');
                            console.log(num);
                            $this.animateNumber({
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000);
                        });
                    }
                }, { offset: '95%' });
            };
            counter();
            var contentWayPoint = function () {
                var i = 0;
                $('.ftco-animate').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        i++;
                        $(this.element).addClass('item-animate');
                        setTimeout(function () {
                            $('body .ftco-animate.item-animate').each(function (k) {
                                var el = $(this);
                                setTimeout(function () {
                                    var effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn ftco-animated');
                                    }
                                    else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft ftco-animated');
                                    }
                                    else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight ftco-animated');
                                    }
                                    else {
                                        el.addClass('fadeInUp ftco-animated');
                                    }
                                    el.removeClass('item-animate');
                                }, k * 50, 'easeInOutExpo');
                            });
                        }, 100);
                    }
                }, { offset: '95%' });
            };
            contentWayPoint();
            // navigation
            var OnePageNav = function () {
                $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
                    e.preventDefault();
                    var hash = this.hash, navToggler = $('.navbar-toggler');
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 700, 'easeInOutExpo', function () {
                        window.location.hash = hash;
                    });
                    if (navToggler.is(':visible')) {
                        navToggler.click();
                    }
                });
                $('body').on('activate.bs.scrollspy', function () {
                    console.log('nice');
                });
            };
            OnePageNav();
            // magnific popup
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
            $('.checkin_date, .checkout_date').datepicker({
                'format': 'm/d/yyyy',
                'autoclose': true
            });
        })(jQuery);
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/theme/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/theme/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/theme-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ThemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function() { return ThemeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/theme/home/home.component.ts");
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/theme/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/theme/contact/contact.component.ts");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/theme/restaurant/restaurant.component.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/theme/rooms/rooms.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "./src/app/theme/services/services.component.ts");










var routes = [{
        path: '',
        component: _theme_component__WEBPACK_IMPORTED_MODULE_4__["ThemeComponent"],
        children: [
            // routes here
            // { path: '', redirectTo: 'index', pathMatch: 'prefix' },
            { path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            },
            { path: 'about',
                component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
            },
            { path: 'contact',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
            },
            { path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            },
            {
                path: 'restaurant',
                component: _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantComponent"]
            },
            {
                path: 'rooms',
                component: _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_8__["RoomsComponent"]
            },
            {
                path: 'services',
                component: _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"]
            }
        ]
    }];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.css":
/*!*******************************************!*\
  !*** ./src/app/theme/theme.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RoZW1lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/theme.component.html":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <router-outlet (activate)=\"onActivate($event)\">\n  </router-outlet>\n<app-footer></app-footer>\n<!-- loader -->\n<div id=\"ftco-loader\" class=\"show fullscreen\"><svg class=\"circular\" width=\"48px\" height=\"48px\"><circle class=\"path-bg\" cx=\"24\" cy=\"24\" r=\"22\" fill=\"none\" stroke-width=\"4\" stroke=\"#eeeeee\"/><circle class=\"path\" cx=\"24\" cy=\"24\" r=\"22\" fill=\"none\" stroke-width=\"4\" stroke-miterlimit=\"10\" stroke=\"#F96D00\"/></svg></div>\n"

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/script.service */ "./src/app/services/script.service.ts");
/* harmony import */ var _services_library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/library.service */ "./src/app/services/library.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(script, router, svc, document) {
        this.script = script;
        this.router = router;
        this.svc = svc;
        this.document = document;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    ThemeComponent.prototype.ngOnInit = function () {
        // this.svc.lazyJqueryLibraries().subscribe(_ => {
        // });
        /* this.script.load(
                'jquery',
                'migrate',
                'popper',
                'bootstrapjs',
                'easing',
                'waypoints',
                'stellar',
                'aos',
                'bdatepicker',
                'scrollax',
                'main'
          ).then(data => {
          console.log('Script loaded ', data);
        }).catch(error => console.log(error)); */
        console.log('theme rendered');
    };
    ThemeComponent.prototype.ngAfterViewInit = function () {
    };
    ThemeComponent.prototype.onActivate = function (event) {
        // tslint:disable-next-line:prefer-const
        var scrollToTop = window.setInterval(function () {
            // tslint:disable-next-line:prefer-const
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // How far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    ThemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme',
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/theme.component.html"),
            styles: [__webpack_require__(/*! ./theme.component.css */ "./src/app/theme/theme.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_library_service__WEBPACK_IMPORTED_MODULE_3__["LibraryService"], Object])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme.module.ts":
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-routing.module */ "./src/app/theme/theme-routing.module.ts");
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/theme/home/home.component.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/theme/ui/ui.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/theme/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/theme/contact/contact.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/theme/rooms/rooms.component.ts");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/theme/restaurant/restaurant.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/services.component */ "./src/app/theme/services/services.component.ts");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/component.module */ "./src/app/theme/component/component.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");

















var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_theme_component__WEBPACK_IMPORTED_MODULE_4__["ThemeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_11__["RoomsComponent"], _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_12__["RestaurantComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"],
                _component_component_module__WEBPACK_IMPORTED_MODULE_14__["ComponentModule"],
                ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__["Ng2IziToastModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10__["OwlModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__["OwlNativeDateTimeModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            exports: [
                _theme_component__WEBPACK_IMPORTED_MODULE_4__["ThemeComponent"]
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ }),

/***/ "./src/app/theme/ui/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/theme/ui/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/ui/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/theme/ui/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"ftco-footer ftco-bg-dark ftco-section\">\n  <div class=\"container\">\n    <div class=\"row mb-5 d-flex\">\n      <div class=\"col-md\">\n        <div class=\"ftco-footer-widget mb-4\">\n          <h2 class=\"ftco-heading-2\">About islaGrande</h2>\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n          <ul class=\"ftco-footer-social list-unstyled float-md-left float-lft mt-3\">\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-twitter\"></span></a></li>\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-facebook\"></span></a></li>\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md\">\n        <div class=\"ftco-footer-widget mb-4 ml-md-4\">\n          <h2 class=\"ftco-heading-2\">Company</h2>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#\">Home</a></li>\n            <li><a href=\"#\">About Us</a></li>\n            <li><a href=\"#\">Rooms</a></li>\n            <li><a href=\"#\">Amenities</a></li>\n            <li><a href=\"#\">Blog</a></li>\n            <li><a href=\"#\">Contact</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md\">\n         <div class=\"ftco-footer-widget mb-4\">\n          <h2 class=\"ftco-heading-2\">Services</h2>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#\">Spa</a></li>\n            <li><a href=\"#\">Rooms</a></li>\n            <li><a href=\"#\">Restaurants</a></li>\n            <li><a href=\"#\">Gym</a></li>\n            <li><a href=\"#\">Promotion</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md\">\n        <div class=\"ftco-footer-widget mb-4\">\n          <h2 class=\"ftco-heading-2\">Have a Questions?</h2>\n          <div class=\"block-23 mb-3\">\n            <ul>\n              <li><span class=\"icon icon-map-marker\"></span><span class=\"text\">Off Nairobi Meru Road, Opp G4s, Embu Kenya</span></li>\n              <li><a href=\"tel://+254722827700\"><span class=\"icon icon-phone\"></span><span class=\"text\">+254 722 827 700</span></a></li>\n              <li><a href=\"mailto:mainahighwayhotel@yahoo.com\"><span class=\"icon icon-envelope\"></span><span class=\"text\">mainahighwayhotel@yahoo.com</span></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\">\n\n        <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"icon-heart\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/theme/ui/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/ui/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/theme/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/theme/ui/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/theme/ui/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/ui/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/theme/ui/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Begin nav -->\n<nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light\" id=\"ftco-navbar\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"/\">M2H</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"oi oi-menu\"></span> Menu\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\"><a [routerLink]=\"['/home']\" routerLinkActive=\"active\" class=\"nav-link\">Home</a></li>\n        <li class=\"nav-item\"><a [routerLink]=\"['/about']\" routerLinkActive=\"active\" class=\"nav-link\">About</a></li>\n        <li class=\"nav-item\"><a [routerLink]=\"['/services']\" routerLinkActive=\"active\" class=\"nav-link\">Amenities</a></li>\n        <!-- <li class=\"nav-item\"><a href=\"blog.html\" class=\"nav-link\">Blog</a></li> -->\n        <li class=\"nav-item\"><a [routerLink]=\"['/rooms']\" routerLinkActive=\"active\" class=\"nav-link\">Rooms</a></li>\n        <li class=\"nav-item\"><a [routerLink]=\"['/restaurant']\" routerLinkActive=\"active\" class=\"nav-link\">Restaurant</a></li>\n        <li class=\"nav-item\"><a [routerLink]=\"['/contact']\" routerLinkActive=\"active\" class=\"nav-link\">Contact</a></li>\n        <li class=\"nav-item\"><a href=\"javascript: void(0)\" data-target=\"#auth-modal\" data-toggle=\"modal\" *ngIf=\"!loggedIn\" class=\"nav-link\">Login</a></li>\n        <li class=\"nav-item\"><a (click)=\"logout($event)\" *ngIf=\"loggedIn\" class=\"nav-link\">Logout</a></li>\n        <!-- <a class=\"dropdown-item\" href=\"javascript: void(0)\" [routerLink]=\"['/portal']\" routerLinkActive=\"router-link-active\" *ngIf=\"loggedIn\">Admin Portal</a> -->\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- END nav -->\n  <!-- Modal -->\n  <div class=\"modal fade custom-modal\" id=\"auth-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"auth-modal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md\" role=\"document\" style=\"background-color: #c56f24\">\n      <div class=\"modal-content\" style=\"background-color: #c56f24\">\n        <div class=\"modal-header\">\n          <!-- <h5 class=\"modal-title\" id=\"exampleModalLabel2\">{{title}}</h5> -->\n          <h5 class=\"modal-title\" id=\"exampleModalLabel2\"></h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"d-flex justify-content-center h-100 m-0\">\n            <div class=\"card my-3 py-3\" style=\"width: 100%;\">\n              <div class=\"card-header\">\n                <h3>Sign In</h3>\n                <div class=\"d-flex justify-content-end social_icon\">\n                  <span><i class=\"fa fa-facebook-square\"></i></span>\n                  <span><i class=\"fa fa-google-plus-square\"></i></span>\n                  <span><i class=\"fa fa-twitter-square\"></i></span>\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <form role=\"form\" #loginForm=ngForm (ngSubmit)=\"onLogin()\">\n                  <div class=\"input-group form-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\"  name=\"email\" placeholder=\"username\" [(ngModel)]=\"loginform.email\" required>\n\n                  </div>\n                  <div class=\"input-group form-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>\n                    </div>\n                    <input type=\"password\" class=\"form-control\"  name=\"password\" placeholder=\"password\" [(ngModel)]=\"loginform.password\" required>\n                  </div>\n                  <div class=\"row align-items-center remember\">\n                    <input type=\"checkbox\">Remember Me\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"submit\" value=\"Login\" class=\"btn float-right login_btn\">\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"d-flex justify-content-center links\">\n                  Don't have an account?<a href=\"#\">Sign Up</a>\n                </div>\n                <div class=\"d-flex justify-content-center\">\n                  <a href=\"#\">Forgot your password?</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/theme/ui/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/ui/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(Jarwis, Token, router, Auth, iziToast) {
        var _this = this;
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.Auth = Auth;
        this.iziToast = iziToast;
        this.error = [];
        this.loginform = {
            email: null,
            password: null
        };
        this.signupform = {
            email: null,
            name: null,
            password: null,
            password_confirmation: null
        };
        this.Auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
    };
    HeaderComponent.prototype.onLogin = function () {
        var _this = this;
        this.Jarwis.login(this.loginform).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    HeaderComponent.prototype.onSignup = function () {
        var _this = this;
        this.Jarwis.login(this.signupform).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    HeaderComponent.prototype.handleResponse = function (data) {
        this.Token.set(data.token);
        // console.log(data);
        this.Auth.changeAuthStatus(true);
        $('#auth-modal').modal('hide');
        this.router.navigateByUrl('/portal');
    };
    HeaderComponent.prototype.handleError = function (error) {
        // console.log(error.error);
        this.iziToast.show({ title: error.error.error });
        this.error = error.error.error;
    };
    HeaderComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.Token.remove();
        this.Auth.changeAuthStatus(false);
        this.router.navigateByUrl('/');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/theme/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/theme/ui/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__["Ng2IzitoastService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui/ui.module.ts":
/*!***************************************!*\
  !*** ./src/app/theme/ui/ui.module.ts ***!
  \***************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/theme/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/theme/ui/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ]
        })
    ], UiModule);
    return UiModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/root/extra/Projects/hotel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map