function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar  color=\"primary\"  class=\"fixed-header app-toolbar\" style=\"display: flex;flex-direction: row;justify-content: space-between;flex-wrap: wrap;\">\n    <mat-toolbar-row style=\"width: 70%;\" class=\"tags\">\n      <!-- <img src=\"assets/logo2.png\" alt=\"not found\" height=\"40px\" width=\"40px\"> -->\n    <span> <a  mat-button  routerLink=\"/home\"><i class=\"material-icons md-18\">home</i></a></span>\n    <!-- <span> <a  mat-button  routerLink=\"/home\"> <img src=\"assets/logo2.png\" alt=\"not found\" height=\"40px\" width=\"40px\"></a></span> -->\n    <a  mat-button  *ngFor=\"let topic of topics | slice:0:limit;\" [routerLink]=\"['/blog/tag',topic.title]\">{{topic.title | uppercase}}</a>\n    <button mat-button [matMenuTriggerFor]=\"menu\">MORE</button>\n    <mat-menu #menu=\"matMenu\" class=\"customize\">\n            <div class=\"menu-item-custom\">\n                <a  mat-menu-item  class=\"morea\" *ngFor=\"let topic of topics | slice:limit:topic_length;\" [routerLink]=\"['/blog/tag',topic.title]\">{{topic.title | uppercase}}</a>\n            </div>\n    </mat-menu>\n    </mat-toolbar-row>\n      <mat-toolbar-row style=\"width:30%;display: flex;flex-direction: row;justify-content: flex-end;\">\n        <div id=\"search-div\" style=\"display: flex;flex-direction: row;justify-content: flex-start;align-items: center;\">\n          <input id=\"search\" class=\"form-control form-control-sm ml-3 w-75\" [(ngModel)]=\"text\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        \n           <a id=\"search-icon\" class=\"search-icon\" [routerLink]=\"['/blog/search',text]\">&nbsp;<i class=\"fa fa-search\"></i></a>\n        </div>\n\n        <!-- <div *ngIf=\"!isloggedin\">\n        <a  mat-button  routerLink=\"/login\">Login</a>\n        <a  mat-button  routerLink=\"/signup\">Signup</a>\n       </div> -->\n       <div *ngIf=\"tokenService.isloggedin\">\n        <a  mat-button  routerLink=\"/create\"><i class=\"material-icons md-18\">edit</i></a>\n        <a  mat-button  routerLink=\"/blog-list\"><i class=\"material-icons md-18\">build</i></a>\n        <mat-select [value]=\"tokenService.getPayload().username\">\n          <mat-option [value]=\"tokenService.getPayload().username\">{{tokenService.getPayload().username}}</mat-option>\n          <mat-option value=\"logout\" (click)=\"logout()\">Logout</mat-option>\n        </mat-select>\n    </div>\n  \n      </mat-toolbar-row>\n    </mat-toolbar>\n<main>\n    <router-outlet  style=\"margin-top: 80px;\"></router-outlet>\n    <app-footer></app-footer>\n</main>\n\n<!-- <app-home></app-home> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n    <div class=\"img\">\n    <img src=\"assets/me.jpg\" alt=\"\">\n</div>\n<div class=\"content\">\n\n    <p>Hey first of all thank you , you come to this section and shows interest in me.</p>\n    \n   <b> My name is satyendra kannaujiya and I'm currently working as a full time software engineer for a MNC in India.</b>\n    <br>\n\n    <p>I have completed my Graduation from Banaras hindu university and masters from National <br>\n       institute of technology Allahabad.\n    </p>\n\n    <p>\n\n        I mostly work with web technology like HTML,CSS,Javascript,PHP,AngularJS,NodeJS,MEAN Stack,etc.\n    </p>\n    <p>\n        On this page I share my learning and thought ,although  I am not expert but I believe every developer should have \n        their own blog because everyone have their unique angle and perspective on something that worth sharing. \n\n    </p>\n\n</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog-list/blog-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog-list/blog-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBlogListBlogListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4>Blogs</h4>\n<hr>\n<mat-card *ngFor=\"let post of posts\">\n    <mat-card-title color=\"primary\">{{post?.title | titlecase}}\n     <div>\n        <a  mat-button  [routerLink]=\"['/edit',post._id]\"><i class=\"material-icons md-18\">edit</i></a>\n        <a  mat-button  (click)=\"deleteBlog(post._id)\"><i class=\"material-icons md-18\">delete</i></a>\n     </div>\n    </mat-card-title>\n    <mat-card-subtitle color=\"secondary\">posted by {{post?.posted_by | lowercase}} , {{post?.createdAt | timeAgo}}</mat-card-subtitle>\n    <mat-card-subtitle class=\"description\" color=\"primary\">{{post?.description}}</mat-card-subtitle>\n   \n    <mat-card-content [innerHTML]=\"post?.blog\">\n    </mat-card-content>\n    <mat-card-actions layout=\"row\" layout-align=\"end center\">\n       &nbsp; <a [routerLink]=\"['/blog',post._id]\" style=\"cursor: pointer;\">Read more</a>\n      </mat-card-actions>\n     \n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n<h3 style=\"display: flex;flex-direction: row;justify-content: space-around;\">Contact Me</h3>\n<form [formGroup]=\"contactForm\" (ngSubmit)=\"submit()\">\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Full name\" required>\n    <br>\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"email\">\n    <br>\n    <!-- <mat-form-field class=\"example-full-width\"> -->\n        <!-- <mat-label>Message</mat-label> -->\n        <textarea formControlName=\"message\" class=\"form-control\" placeholder=\"Message ...\"></textarea>\n    <!-- </mat-form-field> -->\n    <br>\n<button class=\"btn btn-primary\" style=\"float: right;margin: 5px;margin-bottom: 10px;\" id=\"publish_btn\">Submit</button>\n</form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit/edit.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit/edit.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container1\">\n    <div id=\"quill\">\n        <h3 style=\"display: flex;flex-direction: row;justify-content: space-around;\">Write Article</h3>\n        <form [formGroup]=\"editorForm\" (ngSubmit)=\"onPublish()\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Title\" required>\n            <br>\n            <input type=\"text\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\">\n           \n            <mat-form-field>\n                <mat-label>Topics</mat-label>\n                <mat-select formControlName=\"topics\" multiple>\n                  <mat-option *ngFor=\"let topic of topics\" [value]=\"topic.title\">{{topic.title}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <br>\n        <quill-editor [styles]=\"editorStyle\" formControlName=\"editor\" placeholder=\"Enter Text\" [modules]=\"config\"\n            required>\n        </quill-editor>\n       <br><br>\n        <button class=\"btn btn-primary\" style=\"float: right;margin: 5px;margin-bottom: 10px;\" id=\"publish_btn\">Update</button>\n    </form>\n\n    </div>\n    \n    <div class=\"output\">\n        <p style=\"display: flex;flex-direction: row;justify-content: space-around;\">Your article</p>\n        <hr>\n        <p [innerHTML]=\"editorContent\"></p>\n    </div>\n    </div>\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\n<footer class=\"page-footer font-small blue pt-4\">\n\n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center text-md-left\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n        <hr class=\"clearfix w-100 d-md-none pb-3\">\n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n            <!-- Links -->\n            <ul class=\"list-unstyled\">\n              <li>\n                <a class=\"link\" routerLink=\"/contact\">Contact Me</a>\n              </li>\n              <li>\n                <a class=\"link\" routerLink=\"/about\">About Me</a>\n              </li>\n              <li>\n                <a class=\"link\" href=\"#\" routerLink=\"/create\">Write</a>\n              </li>\n            </ul>\n\n          </div>\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <div class=\"col-md-3 mb-md-0 mb-3\" style=\"display:flex;flex-direction:column;align-items:center;\">\n\n            <!-- Links -->\n            <p class=\"text-uppercase\">Follow Me</p>\n            <div class=\"social-media\">\n              <a target=\"blank\" href=\"{{fb}}\" title=\"facebook\" class=\"fa fa-facebook\"></a>\n              <a target=\"blank\" href=\"{{twitter}}\" title=\"twitter\" class=\"fa fa-twitter\"></a>\n              <a target=\"blank\" href=\"{{insta}}\" title=\"instagram\" class=\"fa fa-instagram\"></a>\n              <a target=\"blank\" href=\"{{github}}\" title=\"github\" class=\"fa fa-github\"></a>\n              <a target=\"blank\" href=\"{{linkedin}}\" title=\"linkedin\" class=\"fa fa-linkedin\"></a>\n              <a target=\"blank\" href=\"{{medium}}\" title=\"medium\" class=\"fa fa-medium\"></a>\n            </div>\n           \n\n          </div>\n          <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n    </div>\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3 copy-right\">© {{year}} Copyright:\n      <a href=\"#\"> {{domain}}</a>\n    </div>\n    <!-- Copyright -->\n\n  </footer>\n  <!-- Footer -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/full-article/full-article.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/full-article/full-article.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFullArticleFullArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container1\">\n\n<mat-card>\n    <mat-card-title color=\"primary\">{{post?.title | titlecase}}</mat-card-title>\n    <mat-card-subtitle color=\"secondary\">posted by {{post?.posted_by | lowercase}} , {{post?.createdAt | timeAgo}}</mat-card-subtitle>\n    <mat-card-subtitle color=\"primary\">{{post?.description}}</mat-card-subtitle>\n            <mat-card-content [innerHTML]=\"post?.blog\">\n            </mat-card-content>\n</mat-card>\n\n<div class=\"more-articles\">\n        <ul>\n                <p>More articles</p>\n                <a mat-raised-button *ngFor=\"let item of posts\" (click)=\"showArticle(item._id)\">\n                    \n                        {{item?.title | titlecase}}\n                </a>\n        </ul>\n</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p [innerHTML]=\"test_blog\"></p> -->\n<h4>Blogs</h4>\n<hr>\n<div class=\"blog-list\" *ngIf=\"posts?.length > 0;else other_content\">\n<mat-card *ngFor=\"let post of posts\">\n    <mat-card-title color=\"primary\">{{post?.title | titlecase }}</mat-card-title>\n    <mat-card-subtitle color=\"secondary\">posted by {{post?.posted_by | lowercase}} , {{post?.createdAt | timeAgo}}</mat-card-subtitle>\n    <mat-card-subtitle class=\"description\" color=\"primary\">{{post?.description}}</mat-card-subtitle>\n   \n    <mat-card-content [innerHTML]=\"post?.blog\">\n    </mat-card-content>\n    <mat-card-actions layout=\"row\" layout-align=\"end center\">\n       &nbsp; <a [routerLink]=\"['/blog',post._id]\" class=\"btn btn-primary\" style=\"cursor: pointer;\">View</a>\n      </mat-card-actions>\n     \n</mat-card>\n</div>\n<ng-template #other_content>No article found</ng-template>\n    \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-card>\n<mat-card-title color=\"primary\">Admin</mat-card-title>\n<i>This is not for readers</i>\n<mat-card-content >\n  <div *ngIf=\"isError\" class=\"alert alert-danger\" role=\"alert\">{{error_message}}</div>\n    <mat-form-field>\n        <mat-label>Email</mat-label>\n        <input matInput placeholder=\"Enter email id\" [formControl]=\"email\" required>\n        <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <br>\n      <br>\n      <br>\n      <mat-form-field >\n        <mat-label>Password</mat-label>\n        <input matInput type='password' placeholder=\"Enter your password\" [formControl]=\"password\" required>\n        <mat-error *ngIf=\"password.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n      </mat-form-field>\n\n</mat-card-content>\n<mat-card-footer>\n    <button mat-raised-button color=\"primary\" [disabled]=\"getIsEnable()\" (click)=\"login()\">Login</button>\n    <!-- <a href=\"#\">Forgot password ?</a> -->\n</mat-card-footer>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>page-not-found works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-blog/search-blog.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-blog/search-blog.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchBlogSearchBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"con\">\n    <h4>Result for \"{{text}}\"</h4>\n    <hr>\n    <div class=\"blog-list\" *ngIf=\"posts?.length > 0;else other_content\">\n    <mat-card *ngFor=\"let post of posts\">\n        <mat-card-title color=\"primary\">{{post?.title | titlecase }}</mat-card-title>\n        <mat-card-subtitle color=\"secondary\">posted by {{post?.posted_by | lowercase}} , {{post?.createdAt | timeAgo}}</mat-card-subtitle>\n        <mat-card-subtitle class=\"description\" color=\"primary\">{{post?.description}}</mat-card-subtitle>\n       \n        <mat-card-content [innerHTML]=\"post?.blog\">\n        </mat-card-content>\n        <mat-card-actions layout=\"row\" layout-align=\"end center\">\n           &nbsp; <a [routerLink]=\"['/blog',post._id]\" class=\"btn btn-primary\" style=\"cursor: pointer;\">View</a>\n          </mat-card-actions>\n         \n    </mat-card>\n    </div>\n    <ng-template #other_content>\n       <p class=\"temp\"> No article found</p>\n    </ng-template>\n    \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<mat-card>\n \n    <mat-card-title color=\"primary\">Signup</mat-card-title>\n    <mat-card-content >\n      <div *ngIf=\"isError\" class=\"alert alert-danger\" role=\"alert\">Email already exist</div>\n        <mat-form-field>\n            <mat-label>Username</mat-label>\n            <input matInput placeholder=\"Enter username\" [formControl]=\"username\" required>\n            <mat-error *ngIf=\"username.invalid\">{{getErrorMessageUsername()}}</mat-error>\n          </mat-form-field>\n          <br><br><br>\n          <mat-form-field>\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"Enter email id\" [formControl]=\"email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n          </mat-form-field>\n       \n          <br>\n          <br>\n          <br>\n          <mat-form-field >\n            <mat-label>Password</mat-label>\n            <input matInput type='password' placeholder=\"Enter your password\" [formControl]=\"password\" required>\n            <mat-error *ngIf=\"password.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n          </mat-form-field>\n    \n    </mat-card-content>\n    <mat-card-footer>\n        <button mat-raised-button color=\"primary\" [disabled]=\"getIsEnable()\" (click)=\"signUp()\">Signup</button>\n    </mat-card-footer>\n    </mat-card>\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tag-article/tag-article.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tag-article/tag-article.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTagArticleTagArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"con\">\n<h4>Result for \"{{tag}}\"</h4>\n<hr>\n<div class=\"blog-list\" *ngIf=\"posts?.length > 0;else other_content\">\n<mat-card *ngFor=\"let post of posts\">\n    <mat-card-title color=\"primary\">{{post?.title | titlecase }}</mat-card-title>\n    <mat-card-subtitle color=\"secondary\">posted by {{post?.posted_by | lowercase}} , {{post?.createdAt | timeAgo}}</mat-card-subtitle>\n    <mat-card-subtitle class=\"description\" color=\"primary\">{{post?.description}}</mat-card-subtitle>\n   \n    <mat-card-content [innerHTML]=\"post?.blog\">\n    </mat-card-content>\n    <mat-card-actions layout=\"row\" layout-align=\"end center\">\n       &nbsp; <a [routerLink]=\"['/blog',post._id]\" class=\"btn btn-primary\" style=\"cursor: pointer;\">View</a>\n      </mat-card-actions>\n     \n</mat-card>\n</div>\n<ng-template #other_content>\n   <p class=\"temp\"> No article found</p>\n</ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/write-article/write-article.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/write-article/write-article.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWriteArticleWriteArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container1\">\n<div id=\"quill\">\n    <h3 style=\"display: flex;flex-direction: row;justify-content: space-around;\">Write Article</h3>\n    <form [formGroup]=\"editorForm\" (ngSubmit)=\"onPublish()\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Title\" required>\n        <br>\n        <input type=\"text\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\">\n       \n        <mat-form-field>\n            <mat-label>Topics</mat-label>\n            <mat-select formControlName=\"topics\" multiple>\n              <mat-option *ngFor=\"let topic of topics\" [value]=\"topic.title\">{{topic.title}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n    <quill-editor [styles]=\"editorStyle\" formControlName=\"editor\" placeholder=\"Enter Text\" [modules]=\"config\"\n        required>\n    </quill-editor>\n   <br><br>\n    <button class=\"btn btn-primary\" style=\"float: right;margin: 5px;margin-bottom: 10px;\" id=\"publish_btn\">Publish</button>\n</form>\n<!-- <button class=\"btn btn-success\" style=\"float: right;margin: 5px;margin-bottom: 10px;\" id=\"publish_btn\" (click)=\"onSubmit()\">Save</button> -->\n</div>\n\n<div class=\"output\">\n    <p style=\"display: flex;flex-direction: row;justify-content: space-around;\">Your article</p>\n    <hr>\n    <p [innerHTML]=\"editorContent\"></p>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _components_write_article_write_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/write-article/write-article.component */
    "./src/app/components/write-article/write-article.component.ts");
    /* harmony import */


    var _components_full_article_full_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/full-article/full-article.component */
    "./src/app/components/full-article/full-article.component.ts");
    /* harmony import */


    var _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/blog-list/blog-list.component */
    "./src/app/components/blog-list/blog-list.component.ts");
    /* harmony import */


    var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/edit/edit.component */
    "./src/app/components/edit/edit.component.ts");
    /* harmony import */


    var _components_tag_article_tag_article_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/tag-article/tag-article.component */
    "./src/app/components/tag-article/tag-article.component.ts");
    /* harmony import */


    var _components_search_blog_search_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/search-blog/search-blog.component */
    "./src/app/components/search-blog/search-blog.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");

    var routes = [{
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'signup',
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    }, {
      path: 'create',
      component: _components_write_article_write_article_component__WEBPACK_IMPORTED_MODULE_8__["WriteArticleComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'blog/:id',
      component: _components_full_article_full_article_component__WEBPACK_IMPORTED_MODULE_9__["FullArticleComponent"]
    }, {
      path: 'blog/tag/:tag',
      component: _components_tag_article_tag_article_component__WEBPACK_IMPORTED_MODULE_12__["TagArticleComponent"]
    }, {
      path: 'blog/search/:text',
      component: _components_search_blog_search_blog_component__WEBPACK_IMPORTED_MODULE_13__["SearchBlogComponent"]
    }, {
      path: 'blog-list',
      component: _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_10__["BlogListComponent"]
    }, {
      path: 'edit/:id',
      component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"]
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"]
    }, {
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: '**',
      component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  mat-toolbar{\n      margin-bottom: 50px;\n  }\n  a:hover{\n        color: white;\n        text-decoration: none;\n  }\n  mat-select{\n      font-size: 15px !important;\n      font-weight: bold !important;\n      min-width: 100px;  \n}\n  .menu-item-custom{\n    max-height: 200px !important;\n    overflow-y: auto;\n}\n  .search-icon{\n     color: white;\n     margin-left: 5px;;\n}\n  .app-toolbar{\n    position:fixed;\n    top: 0;\n    z-index: 1000;\n}\n  main{\n    /* background-color: red; */\n    display: flex;\n    flex-direction: column;\n    /* justify-content: space-between; */\n    min-height: 100%;\n    /* border: 10px solid black; */\n}\n  app-footer{\n    /* border: 2px solid black !important; */\n    /* width: 50%; */\n    margin-top: auto;\n    /* bottom: 0; */\n    /* width: 100%; */\n}\n  .morea:hover{\n    color: black;\n}\n  #search-div{\n    /* border: 2px solid red; */\n\n    width: 100%;\n}\n  @media only screen and (max-width: 600px) {\n    mat-toolbar-row{\n        min-width: 100%;\n        /* border: 2px solid black; */\n    }\n    #search-div{\n         /* border: 2px solid red; */\n         width: 100%;\n    }\n    mat-toolbar{\n        margin-bottom: 200px !important;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7TUFDSSxtQkFBbUI7RUFDdkI7RUFDQTtRQUNNLFlBQVk7UUFDWixxQkFBcUI7RUFDM0I7RUFDQTtNQUNJLDBCQUEwQjtNQUMxQiw0QkFBNEI7TUFDNUIsZ0JBQWdCO0FBQ3RCO0VBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCO0VBQ0E7S0FDSyxZQUFZO0tBQ1osZ0JBQWdCO0FBQ3JCO0VBQ0E7SUFDSSxjQUFjO0lBQ2QsTUFBTTtJQUNOLGFBQWE7QUFDakI7RUFDQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDO0VBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxZQUFZO0FBQ2hCO0VBQ0E7SUFDSSwyQkFBMkI7O0lBRTNCLFdBQVc7QUFDZjtFQUNBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsNkJBQTZCO0lBQ2pDO0lBQ0E7U0FDSywyQkFBMkI7U0FDM0IsV0FBVztJQUNoQjtJQUNBO1FBQ0ksK0JBQStCO0lBQ25DO0VBQ0YiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIG1hdC10b29sYmFye1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICBhOmhvdmVye1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBtYXQtc2VsZWN0e1xuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgICAgbWluLXdpZHRoOiAxMDBweDsgIFxufVxuXG4ubWVudS1pdGVtLWN1c3RvbXtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4uc2VhcmNoLWljb257XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgbWFyZ2luLWxlZnQ6IDVweDs7XG59XG4uYXBwLXRvb2xiYXJ7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5tYWlue1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgLyogYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrOyAqL1xufVxuYXBwLWZvb3RlcntcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50OyAqL1xuICAgIC8qIHdpZHRoOiA1MCU7ICovXG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAvKiBib3R0b206IDA7ICovXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG59XG4ubW9yZWE6aG92ZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuI3NlYXJjaC1kaXZ7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xuXG4gICAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWF0LXRvb2xiYXItcm93e1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIH1cbiAgICAjc2VhcmNoLWRpdntcbiAgICAgICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBtYXQtdG9vbGJhcntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(blogService, router, tokenService, cdRef) {
        _classCallCheck(this, AppComponent);

        this.blogService = blogService;
        this.router = router;
        this.tokenService = tokenService;
        this.cdRef = cdRef;
        this.title = 'blog-front-end';
        this.isloggedin = false;
        this.topics = [];
        this.topic_length = 0;
        this.limit = 10;
        this.getScreenSize();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.production = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production;
          this.blogService.getTopics().subscribe(function (data) {
            _this.topics = data['topic_list'];
            _this.topic_length = _this.topics.length;
          }, function (err) {
            console.log("Some error occured while fetching topics list ");
          });
          this.triggerSearch();
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var isloggedin = this.tokenService.isloggedin;

          if (isloggedin != this.isloggedin) {
            this.isloggedin = isloggedin;
            this.cdRef.detectChanges();
          }
        }
      }, {
        key: "getScreenSize",
        value: function getScreenSize(event) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;

          if (this.screenWidth <= 600) {
            this.limit = 2;
          } else if (this.screenWidth > 600 && this.screenWidth <= 1100) {
            this.limit = 5;
          } // console.log("sceerrn with "+this.screenWidth);
          // console.log(this.screenHeight, this.screenWidth);

        }
      }, {
        key: "showArticle",
        value: function showArticle(tag) {
          this.blogService.getPostByTag(tag).subscribe(function (data) {
            console.log("Reponse " + JSON.stringify(data));
          }, function (err) {
            console.log("Error occures " + JSON.stringify(err));
          });
        }
      }, {
        key: "triggerSearch",
        value: function triggerSearch() {
          var input = document.getElementById("search");
          input.addEventListener("keyup", function (event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
              // Cancel the default action, if needed
              event.preventDefault(); // Trigger the button element with a click

              document.getElementById("search-icon").click();
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenService.deleteToken();
          this.router.navigate(['home']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], AppComponent.prototype, "getScreenSize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material */
    "./src/app/material.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
    /* harmony import */


    var time_ago_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! time-ago-pipe */
    "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_write_article_write_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/write-article/write-article.component */
    "./src/app/components/write-article/write-article.component.ts");
    /* harmony import */


    var _services_users_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/token-interceptor */
    "./src/app/services/token-interceptor.ts");
    /* harmony import */


    var _components_full_article_full_article_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/full-article/full-article.component */
    "./src/app/components/full-article/full-article.component.ts");
    /* harmony import */


    var _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/blog-list/blog-list.component */
    "./src/app/components/blog-list/blog-list.component.ts");
    /* harmony import */


    var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/edit/edit.component */
    "./src/app/components/edit/edit.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_tag_article_tag_article_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/tag-article/tag-article.component */
    "./src/app/components/tag-article/tag-article.component.ts");
    /* harmony import */


    var _components_search_blog_search_blog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/search-blog/search-blog.component */
    "./src/app/components/search-blog/search-blog.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts"); // components
    // services


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"], _components_write_article_write_article_component__WEBPACK_IMPORTED_MODULE_15__["WriteArticleComponent"], _components_full_article_full_article_component__WEBPACK_IMPORTED_MODULE_22__["FullArticleComponent"], time_ago_pipe__WEBPACK_IMPORTED_MODULE_10__["TimeAgoPipe"], _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_23__["BlogListComponent"], _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_24__["EditComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"], _components_tag_article_tag_article_component__WEBPACK_IMPORTED_MODULE_26__["TagArticleComponent"], _components_search_blog_search_blog_component__WEBPACK_IMPORTED_MODULE_27__["SearchBlogComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_28__["ContactComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_29__["AboutComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material__WEBPACK_IMPORTED_MODULE_6__["BlogMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModule"].forRoot()],
      providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_16__["UsersService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _services_token_service__WEBPACK_IMPORTED_MODULE_18__["TokenService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__["CookieService"], _services_blog_service__WEBPACK_IMPORTED_MODULE_19__["BlogService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_21__["TokenInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img{\n    height: 250px;\n    width: 250px;\n}\n\n.container{\n    display:flex;\n   \n}\n\n.content{\n    margin: 50px;\n    /* border: 2px solid black; */\n    word-wrap: break-word;\n}\n\n@media only screen and (max-width: 600px) {\n\n    .container{\n        display:flex;\n        flex-direction: column;\n        margin-top: 20px;\n       \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7O0FBRWhCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBQ0E7O0lBRUk7UUFDSSxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGdCQUFnQjs7SUFFcEI7QUFDSiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgIFxufVxuLmNvbnRlbnR7XG4gICAgbWFyZ2luOiA1MHB4O1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICBcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/blog-list/blog-list.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/blog-list/blog-list.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBlogListBlogListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\n    border: 2px solid black !important;\n    /* background-color: red; */\n}\nmat-card-content{\n    /* border: 2px solid black; */\n    height: 60px;\n    display: -webkit-box;\n   -webkit-line-clamp: 3;\n   -webkit-box-orient: vertical;\n   overflow: hidden;\n   text-overflow: ellipsis;\n}\nmat-card{\n    margin: 10px;\n}\nh4{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;  \n    margin-top: 20px;\n}\nmat-card-title{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Jsb2ctbGlzdC9ibG9nLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQywyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osb0JBQW9CO0dBQ3JCLHFCQUFxQjtHQUNyQiw0QkFBNEI7R0FDNUIsZ0JBQWdCO0dBQ2hCLHVCQUF1QjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCO0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ibG9nLWxpc3QvYmxvZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xufVxubWF0LWNhcmQtY29udGVudHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxubWF0LWNhcmR7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuaDR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAgXG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG5tYXQtY2FyZC10aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/blog-list/blog-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/blog-list/blog-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: BlogListComponent */

  /***/
  function srcAppComponentsBlogListBlogListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogListComponent", function () {
      return BlogListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BlogListComponent = /*#__PURE__*/function () {
      function BlogListComponent(tokenService, blogService, router) {
        _classCallCheck(this, BlogListComponent);

        this.tokenService = tokenService;
        this.blogService = blogService;
        this.router = router;
        this.isLogin = true;
        this.posts = [];
      }

      _createClass(BlogListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.token = this.tokenService.getToken();
          this.allPosts();
        }
      }, {
        key: "allPosts",
        value: function allPosts() {
          var _this2 = this;

          this.blogService.getPosts().subscribe(function (data) {
            // console.log("post data "+JSON.stringify(data['posts']));
            _this2.posts = data['posts'];
          }, function (err) {
            console.log("Error all posts " + JSON.stringify(err));

            if (err.error.token === null) {
              _this2.tokenService.deleteToken();

              _this2.router.navigate(['']);
            }
          });
        }
      }, {
        key: "deleteBlog",
        value: function deleteBlog(id) {
          var _this3 = this;

          if (confirm("Are you sure to delete the docs ")) {
            this.blogService.deleteBlog(id).subscribe(function (data) {
              console.log("Post has been deleted successfully " + JSON.stringify(data));

              _this3.allPosts();
            }, function (err) {
              console.log("Some error occure while deleting post " + JSON.stringify(err));
            });
          } else {
            console.log("Cancel is clicked !!");
          }
        }
      }]);

      return BlogListComponent;
    }();

    BlogListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
      }, {
        type: _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    BlogListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog-list/blog-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-list.component.css */
      "./src/app/components/blog-list/blog-list.component.css"))["default"]]
    })], BlogListComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/contact/contact.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n    width: 50%;\n}\n\n\n@media only screen and (max-width: 600px) {\n    .container{\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHdpZHRoOiA1MCU7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(blogService, router) {
        _classCallCheck(this, ContactComponent);

        this.blogService = blogService;
        this.router = router;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'message': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          this.details = {
            name: this.contactForm.get('name').value,
            email: this.contactForm.get('email').value,
            message: this.contactForm.get('message').value
          };
          this.blogService.sendContact(this.details).subscribe(function (data) {
            console.log("Contact is saved " + JSON.stringify(data));
          }, function (err) {
            console.log("Some error occured " + JSON.stringify(err));
          });
          this.router.navigate(['home']);
          console.log(this.details);
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/components/contact/contact.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/edit/edit.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/edit/edit.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEditEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container1{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n    /* border:2px solid black; */\n    /* margin-top: 60px; */\n}\n#quill{\n   \n    margin: 10px;\n    height: 85vh;\n    overflow-y: auto;\n    width: 50%;\n   \n}\n.output{\n       width: 45%;\n       /* border: 0.5px solid black; */\n       overflow-y: auto;\n       height: 600px;\n       margin: 10px;\n}\n.ql-syntax{\n    background-color: black;\n    color: white;\n}\nmat-form-field{\n    /* border: 2px solid black; */\n    width: 100%;\n    margin-top: 5px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVOztBQUVkO0FBRUE7T0FDTyxVQUFVO09BQ1YsK0JBQStCO09BQy9CLGdCQUFnQjtPQUNoQixhQUFhO09BQ2IsWUFBWTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIxe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYm9yZGVyOjJweCBzb2xpZCBibGFjazsgKi9cbiAgICAvKiBtYXJnaW4tdG9wOiA2MHB4OyAqL1xufVxuI3F1aWxse1xuICAgXG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGhlaWdodDogODV2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICBcbn1cblxuLm91dHB1dHtcbiAgICAgICB3aWR0aDogNDUlO1xuICAgICAgIC8qIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7ICovXG4gICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgIG1hcmdpbjogMTBweDtcbn1cbi5xbC1zeW50YXh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/edit/edit.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/edit/edit.component.ts ***!
    \***************************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppComponentsEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditComponent = /*#__PURE__*/function () {
      function EditComponent(activatedRoute, router, blogService, tokenService) {
        _classCallCheck(this, EditComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.blogService = blogService;
        this.tokenService = tokenService;
        this.topics = [];
        this.blogObj = {};
        this.editorStyle = {
          height: '400px'
        };
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.activatedRoute.params.subscribe(function (params) {
            _this4.id = params['id'];

            _this4.getBlogById(_this4.id);
          });
          this.editorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'editor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'topics': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
          });
          this.blogService.getTopics().subscribe(function (data) {
            _this4.topics = data['topic_list'];
          }, function (err) {
            console.log("Some error occured while fetching topics list ");
          });
          this.editorForm.valueChanges.subscribe(function (data) {
            // console.log("Date suss "+JSON.stringify(data));
            _this4.editorContent = _this4.editorForm.get('editor').value;
          });
        }
      }, {
        key: "getBlogById",
        value: function getBlogById(id) {
          var _this5 = this;

          this.blogService.getPostById(id).subscribe(function (data) {
            _this5.post = data['post'];
            console.log(JSON.stringify(_this5.post));

            _this5.editorForm.get('title').setValue(_this5.post.title);

            _this5.editorForm.get('description').setValue(_this5.post.description);

            _this5.editorForm.get('topics').setValue(_this5.post.topics);

            _this5.editorForm.get('editor').setValue(_this5.post.blog);
          });
        }
      }, {
        key: "onPublish",
        value: function onPublish() {
          var _this6 = this;

          if (confirm("Are you sure publish article!")) {
            this.blogObj = {
              title: this.editorForm.get('title').value,
              description: this.editorForm.get('description').value,
              topics: this.editorForm.get('topics').value,
              blog: this.editorForm.get('editor').value,
              posted_by: this.tokenService.getPayload().username
            };

            if (this.blogObj['title'] && this.blogObj['description'] && this.blogObj['topics'] && this.blogObj['blog'] && this.blogObj['posted_by']) {
              this.blogService.updatePost(this.id, this.blogObj).subscribe(function (data) {
                console.log("reponse from backend " + JSON.stringify(data));

                _this6.router.navigate(['home']);
              }, function (err) {
                console.log("Some error occured " + JSON.stringify(err));
              });
            } else {
              alert("Please enter all mandatory fileld ");
            }
          } else {
            console.log("Cancel is clicked !! ");
          }
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
      }, {
        type: _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
      }];
    };

    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit/edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit.component.css */
      "./src/app/components/edit/edit.component.css"))["default"]]
    })], EditComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".copy-right{\n    background-color: blueviolet;\n    color: lightblue;\n\n}\n.copy-right a{\n    color: white;\n}\nfooter{\n    /* margin-top: 50px; */\n    background-color: lightblue;\n}\n/* icons css\n */\n.social-media{\n     /* border:2px solid black; */\n     display: flex;\n     margin-bottom: 10px;\n     }\n.fa {\n    padding: 20px;\n    font-size: 20px;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    border-radius: 50%;\n    margin: 5px;\n  }\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n\n  }\n/* Set a specific color for each brand */\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n  }\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n  }\n.fa-instagram {\n    background: #125688;\n    color: white;\n  }\n.fa-github {\n    background: #021b2c9a;\n    color: white;\n  }\n.fa-linkedin {\n    background: #55ACEE;\n    color: white;\n  }\n.fa-medium {\n    background: white;\n    color: black;\n  }\n.link:hover{\n    color: blue;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9CO0FBRUE7RUFDRTtBQUNEO0tBQ0ksNEJBQTRCO0tBQzVCLGFBQWE7S0FDYixtQkFBbUI7S0FDbkI7QUFFSjtJQUNHLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtBQUVBLG1DQUFtQztBQUNuQztJQUNFLFlBQVk7O0VBRWQ7QUFFQSx3Q0FBd0M7QUFFeEMsYUFBYTtBQUNiO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtBQUVBLFlBQVk7QUFDWjtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7QUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29weS1yaWdodHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xuICAgIGNvbG9yOiBsaWdodGJsdWU7XG5cbn1cbi5jb3B5LXJpZ2h0IGF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuZm9vdGVye1xuICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG4vKiBpY29ucyBjc3NcbiAqL1xuIC5zb2NpYWwtbWVkaWF7XG4gICAgIC8qIGJvcmRlcjoycHggc29saWQgYmxhY2s7ICovXG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgIH1cblxuIC5mYSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICBcbiAgLyogQWRkIGEgaG92ZXIgZWZmZWN0IGlmIHlvdSB3YW50ICovXG4gIC5mYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuXG4gIH1cbiAgXG4gIC8qIFNldCBhIHNwZWNpZmljIGNvbG9yIGZvciBlYWNoIGJyYW5kICovXG4gIFxuICAvKiBGYWNlYm9vayAqL1xuICAuZmEtZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAvKiBUd2l0dGVyICovXG4gIC5mYS10d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuZmEtaW5zdGFncmFtIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTI1Njg4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuZmEtZ2l0aHViIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDIxYjJjOWE7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5mYS1saW5rZWRpbiB7XG4gICAgYmFja2dyb3VuZDogIzU1QUNFRTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuZmEtbWVkaXVtIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAubGluazpob3ZlcntcbiAgICBjb2xvcjogYmx1ZTtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var d = new Date();
          this.year = d.getFullYear();
          this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].domainName;
          this.fb = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].fb;
          this.insta = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].insta;
          this.twitter = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].twitter;
          this.github = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].github;
          this.linkedin = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].linkedin;
          this.medium = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].medium;
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/full-article/full-article.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/full-article/full-article.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFullArticleFullArticleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card{\n    margin: 50px;\n    margin-right: 0px;\n    padding: 20px;\n    width: 70%;\n    border: 0.1px solid black;\n}\n.container1{\n    /* border: 2px solid black; */\n    margin-left: 0px !important;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    /* align-items: center; */\n}\n.more-articles{\n    margin: 20px;\n    position: relative;\n    top: 200px;\n    /* border: 2px solid black; */\n    height: 100%;\n    width: 30%;\n}\nul{\n    list-style: none;\n}\na{\n    /* border: 2px solid black; */\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\na:hover{\n    color: black;\n}\n@media only screen and (max-width: 600px) {\n    .container1{\n        /* border: 2px solid green ; */\n        margin-left: 0px !important;\n        display: flex;\n        flex-direction: column;\n        /* background-color: red; */\n       \n    }\n    .more-articles{\n       \n        display: none;\n    }\n    mat-card{\n        width: 100%;\n        margin: 0px;\n        margin-top: 50px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Z1bGwtYXJ0aWNsZS9mdWxsLWFydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSTtRQUNJLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QiwyQkFBMkI7O0lBRS9CO0lBQ0E7O1FBRUksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9mdWxsLWFydGljbGUvZnVsbC1hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJvcmRlcjogMC4xcHggc29saWQgYmxhY2s7XG59XG4uY29udGFpbmVyMXtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xufVxuLm1vcmUtYXJ0aWNsZXN7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIwMHB4O1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzAlO1xufVxudWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmF7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuYTpob3ZlcntcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGFpbmVyMXtcbiAgICAgICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW4gOyAqL1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbiAgICAgICBcbiAgICB9XG4gICAgLm1vcmUtYXJ0aWNsZXN7XG4gICAgICAgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIG1hdC1jYXJke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/full-article/full-article.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/full-article/full-article.component.ts ***!
    \*******************************************************************/

  /*! exports provided: FullArticleComponent */

  /***/
  function srcAppComponentsFullArticleFullArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullArticleComponent", function () {
      return FullArticleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/token.service */
    "./src/app/services/token.service.ts");

    var FullArticleComponent = /*#__PURE__*/function () {
      function FullArticleComponent(router, route, blogService, tokenService) {
        _classCallCheck(this, FullArticleComponent);

        this.router = router;
        this.route = route;
        this.blogService = blogService;
        this.tokenService = tokenService;
        this.posts = [];
      }

      _createClass(FullArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.params.subscribe(function (params) {
            _this7.id = params['id'];

            _this7.getBlogById(_this7.id);
          });
          this.allPosts(this.id, 0);
        }
      }, {
        key: "getBlogById",
        value: function getBlogById(id) {
          var _this8 = this;

          this.blogService.getPostById(id).subscribe(function (data) {
            _this8.post = data['post'];
          });
        }
      }, {
        key: "allPosts",
        value: function allPosts(id, type) {
          var _this9 = this;

          this.blogService.getPosts().subscribe(function (data) {
            // console.log("post data "+JSON.stringify(data['posts']));
            _this9.posts = data['posts'];

            _this9.posts.forEach(function (item, index) {
              // console.log("Matched "+JSON.stringify(item));
              if (item._id == id) {
                _this9.posts.splice(index, 1);
              }
            });

            if (type == 1) {
              _this9.router.navigateByUrl("/blog/".concat(id));
            }
          }, function (err) {
            console.log("Error all posts " + JSON.stringify(err));

            if (err.error.token === null) {
              _this9.tokenService.deleteToken();

              _this9.router.navigate(['']);
            }
          });
        }
      }, {
        key: "showArticle",
        value: function showArticle(id) {
          console.log("Show clicked " + id);
          this.allPosts(id, 1); // this.router.navigate([`/blog/${id}`]);
        }
      }]);

      return FullArticleComponent;
    }();

    FullArticleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
      }, {
        type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
      }];
    };

    FullArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-full-article',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./full-article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/full-article/full-article.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./full-article.component.css */
      "./src/app/components/full-article/full-article.component.css"))["default"]]
    })], FullArticleComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\n    border: 2px solid black !important;\n    /* background-color: red; */\n}\nmat-card-content{\n    /* border: 2px solid black; */\n    height: 60px;\n    display: -webkit-box;\n   -webkit-line-clamp: 3;\n   -webkit-box-orient: vertical;\n   overflow: hidden;\n   text-overflow: ellipsis;\n}\nmat-card{\n    margin: 10px;\n    width: 400px;\n    max-width: 100%;\n    height: 300px !important;\n    border: 0.1px solid blueviolet;\n}\nh4{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;  \n}\na:hover{\n    color: blue !important;\n}\n.blog-list{\n    /* border:  2px solid blue; */\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n.description{\n    /* border: 2px solid black; */\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n@media only screen and (max-width: 600px) {\n    mat-card{\n        width: 300px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixvQkFBb0I7R0FDckIscUJBQXFCO0dBQ3JCLDRCQUE0QjtHQUM1QixnQkFBZ0I7R0FDaEIsdUJBQXVCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUdBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xufVxubWF0LWNhcmQtY29udGVudHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxubWF0LWNhcmR7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC4xcHggc29saWQgYmx1ZXZpb2xldDtcbn1cbmg0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgIFxufVxuYTpob3ZlcntcbiAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xufVxuLmJsb2ctbGlzdHtcbiAgICAvKiBib3JkZXI6ICAycHggc29saWQgYmx1ZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmRlc2NyaXB0aW9ue1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1hdC1jYXJke1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(tokenService, blogService, router) {
        _classCallCheck(this, HomeComponent);

        this.tokenService = tokenService;
        this.blogService = blogService;
        this.router = router;
        this.isLogin = true;
        this.posts = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.token = this.tokenService.getToken(); // console.log("token "+this.token);

          this.allPosts();
          this.blogService.searchPost('php').subscribe(function (data) {//  console.log("search result "+JSON.stringify(data));
          }, function (err) {
            console.log("Errror " + JSON.stringify(err));
          });
        }
      }, {
        key: "allPosts",
        value: function allPosts() {
          var _this10 = this;

          this.blogService.getPosts().subscribe(function (data) {
            // console.log("post data "+JSON.stringify(data['posts']));
            _this10.posts = data['posts'];
          }, function (err) {
            console.log("Error all posts " + JSON.stringify(err));

            if (err.error.token === null) {
              _this10.tokenService.deleteToken();

              _this10.router.navigate(['']);
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
      }, {
        type: _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field{\n    width: 100%;;\n}\n\nmat-card{\n    max-width: 600px;\n   margin: auto;\n   margin-top: 100px !important;\n    display: flex;\n    flex-direction: column;\n    \n}\n\nmat-card-footer{\n   display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n}\n\nbutton{\n    margin: 5px;\n}\n\na{\n    /* border: 2px solid black; */\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.alert{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7R0FDakIsWUFBWTtHQUNaLDRCQUE0QjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFDQTtHQUNHLGFBQWE7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTAwJTs7XG59XG5cbm1hdC1jYXJke1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICBtYXJnaW46IGF1dG87XG4gICBtYXJnaW4tdG9wOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbn1cbm1hdC1jYXJkLWZvb3RlcntcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuYnV0dG9ue1xuICAgIG1hcmdpbjogNXB4O1xufVxuYXtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFsZXJ0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/token.service */
    "./src/app/services/token.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router, tokenService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isEnable = false;
        this.isError = false;
        this.error_message = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this11 = this;

          var userObject = {
            "email": this.email.value,
            "password": this.password.value
          };
          this.authService.login(userObject).subscribe(function (data) {
            console.log("Data token " + data.token);

            _this11.tokenService.setToken(data.token);

            _this11.router.navigate(['home']);
          }, function (err) {
            console.log("Error occured in login " + JSON.stringify(err));
            _this11.isError = true;
            _this11.error_message = err.error.message;
          });
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage() {
          if (this.email.hasError('required')) {
            return 'Please enter a value';
          }

          return this.email.hasError('email') ? 'Not a valid email' : '';
        }
      }, {
        key: "getPasswordErrorMessage",
        value: function getPasswordErrorMessage() {
          if (this.password.hasError('required')) {
            return 'Password is required';
          }

          return '';
        }
      }, {
        key: "getIsEnable",
        value: function getIsEnable() {
          if (this.password.invalid == false && this.email.invalid == false) {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/components/page-not-found/page-not-found.component.css"))["default"]]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/components/search-blog/search-blog.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/search-blog/search-blog.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchBlogSearchBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\n    /* border: 2px solid black !important; */\n    /* background-color: red; */\n}\nmat-card-content{\n    /* border: 2px solid black; */\n    height: 60px;\n    display: -webkit-box;\n   -webkit-line-clamp: 3;\n   -webkit-box-orient: vertical;\n   overflow: hidden;\n   text-overflow: ellipsis;\n}\nmat-card{\n    margin: 10px;\n    width: 400px;\n    max-width: 100%;\n    /* max-width: 400px; */\n    height: 300px !important;\n    border: 0.1px solid blueviolet;\n}\nh4{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;  \n}\na:hover{\n    color: blue !important;\n}\n.blog-list{\n    /* border:  2px solid blue; */\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n.temp{\n    /* border: 2px solid black !important; */\n    text-align: center;\n    font-weight: bold;\n}\n.description{\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n@media only screen and (max-width: 600px) {\n    mat-card{\n        width: 300px;\n    }\n    .con{\n            margin-top: 50px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NlYXJjaC1ibG9nL3NlYXJjaC1ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG9CQUFvQjtHQUNyQixxQkFBcUI7R0FDckIsNEJBQTRCO0dBQzVCLGdCQUFnQjtHQUNoQix1QkFBdUI7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUlBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7WUFDUSxnQkFBZ0I7SUFDeEI7QUFDSiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZWFyY2gtYmxvZy9zZWFyY2gtYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50OyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbn1cbm1hdC1jYXJkLWNvbnRlbnR7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbm1hdC1jYXJke1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIC8qIG1heC13aWR0aDogNDAwcHg7ICovXG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC4xcHggc29saWQgYmx1ZXZpb2xldDtcbn1cbmg0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgIFxufVxuYTpob3ZlcntcbiAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xufVxuLmJsb2ctbGlzdHtcbiAgICAvKiBib3JkZXI6ICAycHggc29saWQgYmx1ZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRlbXB7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYXQtY2FyZHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgICAuY29ue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/search-blog/search-blog.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/search-blog/search-blog.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SearchBlogComponent */

  /***/
  function srcAppComponentsSearchBlogSearchBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchBlogComponent", function () {
      return SearchBlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/token.service */
    "./src/app/services/token.service.ts");

    var SearchBlogComponent = /*#__PURE__*/function () {
      function SearchBlogComponent(router, route, blogService, tokenService) {
        _classCallCheck(this, SearchBlogComponent);

        this.router = router;
        this.route = route;
        this.blogService = blogService;
        this.tokenService = tokenService;
        this.posts = [];
      }

      _createClass(SearchBlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.route.params.subscribe(function (params) {
            _this12.text = params['text'];

            _this12.getBlogById(_this12.text);
          });
        }
      }, {
        key: "getBlogById",
        value: function getBlogById(text) {
          var _this13 = this;

          this.blogService.searchPost(text).subscribe(function (data) {
            // console.log("Data for search "+JSON.stringify(data) );
            _this13.posts = data['posts'];
          }, function (err) {
            console.log("Some error occured in search api " + JSON.stringify(err));
          });
        }
      }]);

      return SearchBlogComponent;
    }();

    SearchBlogComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
      }, {
        type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
      }];
    };

    SearchBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-blog/search-blog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-blog.component.css */
      "./src/app/components/search-blog/search-blog.component.css"))["default"]]
    })], SearchBlogComponent);
    /***/
  },

  /***/
  "./src/app/components/signup/signup.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/signup/signup.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field{\n    width: 100%;;\n}\n\nmat-card{\n    max-width: 600px;\n   margin: auto;\n   \n    display: flex;\n    flex-direction: column;\n    \n}\n\nmat-card-footer{\n   display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n}\n\nbutton{\n    margin: 10px;\n}\n\na{\n    /* border: 2px solid black; */\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.alert{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtHQUNqQixZQUFZOztJQUVYLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUNBO0dBQ0csYUFBYTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlOztcbn1cblxubWF0LWNhcmR7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgIG1hcmdpbjogYXV0bztcbiAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbn1cbm1hdC1jYXJkLWZvb3RlcntcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuYnV0dG9ue1xuICAgIG1hcmdpbjogMTBweDtcbn1cbmF7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWxlcnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/token.service */
    "./src/app/services/token.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(authService, router, tokenService) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]);
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isError = false;
        this.emailError = '';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signUp",
        value: function signUp() {
          var _this14 = this;

          var userDetails = {
            "username": this.username.value,
            "email": this.email.value,
            "password": this.password.value
          };
          this.authService.signUp(userDetails).subscribe(function (data) {
            console.log("date " + JSON.stringify(data));

            _this14.tokenService.setToken(data.token);

            _this14.router.navigate(['home']);
          }, function (err) {
            console.log("Error " + JSON.stringify(err));
            _this14.isError = true;
            _this14.emailError = err.error.message;
          });
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage() {
          if (this.email.hasError('required')) {
            return 'Please enter a value';
          }

          return this.email.hasError('email') ? 'Not a valid email' : '';
        }
      }, {
        key: "getPasswordErrorMessage",
        value: function getPasswordErrorMessage() {
          if (this.password.hasError('required')) {
            return 'Password is required';
          }

          var status = this.password.status;

          if (status == 'INVALID') {
            return 'Password should be of minimum 8 character';
          } else {
            return '';
          }
        }
      }, {
        key: "getErrorMessageUsername",
        value: function getErrorMessageUsername() {
          if (this.username.hasError('required')) {
            return 'Please enter a value';
          }

          return '';
        }
      }, {
        key: "getIsEnable",
        value: function getIsEnable() {
          if (this.password.invalid == false && this.email.invalid == false && this.username.invalid == false) {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/components/signup/signup.component.css"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/components/tag-article/tag-article.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/tag-article/tag-article.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTagArticleTagArticleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\n    /* border: 2px solid black !important; */\n    /* background-color: red; */\n}\nmat-card-content{\n    /* border: 2px solid black; */\n    height: 60px;\n    display: -webkit-box;\n   -webkit-line-clamp: 3;\n   -webkit-box-orient: vertical;\n   overflow: hidden;\n   text-overflow: ellipsis;\n}\nmat-card{\n    margin: 10px;\n    width: 400px;\n    max-width: 100%;\n    /* max-width: 400px; */\n    height: 300px !important;\n    border: 0.1px solid blueviolet;\n}\nh4{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;  \n}\na:hover{\n    color: blue !important;\n}\n.blog-list{\n    /* border:  2px solid blue; */\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n.description{\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.temp{\n    /* border: 2px solid black !important; */\n    text-align: center;\n    font-weight: bold;\n}\n@media only screen and (max-width: 600px) {\n    mat-card{\n        width: 300px;\n    }\n    .con{\n            margin-top: 50px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RhZy1hcnRpY2xlL3RhZy1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG9CQUFvQjtHQUNyQixxQkFBcUI7R0FDckIsNEJBQTRCO0dBQzVCLGdCQUFnQjtHQUNoQix1QkFBdUI7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUlBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7WUFDUSxnQkFBZ0I7SUFDeEI7QUFDSiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy90YWctYXJ0aWNsZS90YWctYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50OyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbn1cbm1hdC1jYXJkLWNvbnRlbnR7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbm1hdC1jYXJke1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIC8qIG1heC13aWR0aDogNDAwcHg7ICovXG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC4xcHggc29saWQgYmx1ZXZpb2xldDtcbn1cbmg0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgIFxufVxuYTpob3ZlcntcbiAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xufVxuLmJsb2ctbGlzdHtcbiAgICAvKiBib3JkZXI6ICAycHggc29saWQgYmx1ZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi50ZW1we1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1hdC1jYXJke1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuICAgIC5jb257XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/tag-article/tag-article.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/tag-article/tag-article.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TagArticleComponent */

  /***/
  function srcAppComponentsTagArticleTagArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagArticleComponent", function () {
      return TagArticleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/token.service */
    "./src/app/services/token.service.ts");

    var TagArticleComponent = /*#__PURE__*/function () {
      function TagArticleComponent(router, route, blogService, tokenService) {
        _classCallCheck(this, TagArticleComponent);

        this.router = router;
        this.route = route;
        this.blogService = blogService;
        this.tokenService = tokenService;
        this.posts = [];
      }

      _createClass(TagArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.route.params.subscribe(function (params) {
            _this15.tag = params['tag'];

            _this15.getBlogById(_this15.tag);
          });
        }
      }, {
        key: "getBlogById",
        value: function getBlogById(tag) {
          var _this16 = this;

          this.blogService.getPostByTag(tag).subscribe(function (data) {
            _this16.posts = data['posts'];
          }, function (err) {
            console.log("Some error occured in tag api " + JSON.stringify(err));
          });
        }
      }]);

      return TagArticleComponent;
    }();

    TagArticleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
      }, {
        type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
      }];
    };

    TagArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tag-article',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tag-article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tag-article/tag-article.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tag-article.component.css */
      "./src/app/components/tag-article/tag-article.component.css"))["default"]]
    })], TagArticleComponent);
    /***/
  },

  /***/
  "./src/app/components/write-article/write-article.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/write-article/write-article.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWriteArticleWriteArticleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container1{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n    /* border:2px solid black; */\n    /* margin-top: 60px; */\n}\n#quill{\n   \n    margin: 10px;\n    height: 85vh;\n    overflow-y: auto;\n    width: 50%;\n   \n}\n.output{\n       width: 45%;\n       /* border: 0.5px solid black; */\n       overflow-y: auto;\n       height: 600px;\n       margin: 10px;\n}\n.ql-syntax{\n    background-color: black;\n    color: white;\n}\nmat-form-field{\n    /* border: 2px solid black; */\n    width: 100%;\n    margin-top: 5px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3dyaXRlLWFydGljbGUvd3JpdGUtYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVOztBQUVkO0FBRUE7T0FDTyxVQUFVO09BQ1YsK0JBQStCO09BQy9CLGdCQUFnQjtPQUNoQixhQUFhO09BQ2IsWUFBWTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy93cml0ZS1hcnRpY2xlL3dyaXRlLWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIxe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYm9yZGVyOjJweCBzb2xpZCBibGFjazsgKi9cbiAgICAvKiBtYXJnaW4tdG9wOiA2MHB4OyAqL1xufVxuI3F1aWxse1xuICAgXG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGhlaWdodDogODV2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICBcbn1cblxuLm91dHB1dHtcbiAgICAgICB3aWR0aDogNDUlO1xuICAgICAgIC8qIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7ICovXG4gICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgIG1hcmdpbjogMTBweDtcbn1cbi5xbC1zeW50YXh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/write-article/write-article.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/write-article/write-article.component.ts ***!
    \*********************************************************************/

  /*! exports provided: WriteArticleComponent */

  /***/
  function srcAppComponentsWriteArticleWriteArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WriteArticleComponent", function () {
      return WriteArticleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var WriteArticleComponent = /*#__PURE__*/function () {
      function WriteArticleComponent(router, blogService, tokenService) {
        _classCallCheck(this, WriteArticleComponent);

        this.router = router;
        this.blogService = blogService;
        this.tokenService = tokenService;
        this.topics = [];
        this.blogObj = {};
        this.editorStyle = {
          height: '400px'
        };
      }

      _createClass(WriteArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.editorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'editor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'topics': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
          });
          this.blogService.getTopics().subscribe(function (data) {
            _this17.topics = data['topic_list'];
          }, function (err) {
            console.log("Some error occured while fetching topics list ");
          });
          this.editorForm.valueChanges.subscribe(function (data) {
            console.log("Date suss " + JSON.stringify(data));
            _this17.editorContent = _this17.editorForm.get('editor').value;
          });
        }
      }, {
        key: "onPublish",
        value: function onPublish() {
          var _this18 = this;

          if (confirm("Are you sure publish article!")) {
            this.blogObj = {
              title: this.editorForm.get('title').value,
              description: this.editorForm.get('description').value,
              topics: this.editorForm.get('topics').value,
              blog: this.editorForm.get('editor').value,
              posted_by: this.tokenService.getPayload().username
            };

            if (this.blogObj['title'] && this.blogObj['description'] && this.blogObj['topics'] && this.blogObj['blog'] && this.blogObj['posted_by']) {
              this.blogService.create(this.blogObj).subscribe(function (data) {
                console.log("reponse from backend " + JSON.stringify(data));

                _this18.router.navigate(['home']);
              }, function (err) {
                console.log("Some error occured " + JSON.stringify(err));
              });
            } else {
              alert("Please enter all mandatory fileld ");
            }
          } else {
            console.log("Cancel is clicked !! ");
          }
        }
      }]);

      return WriteArticleComponent;
    }();

    WriteArticleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
      }, {
        type: _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
      }];
    };

    WriteArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-write-article',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./write-article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/write-article/write-article.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./write-article.component.css */
      "./src/app/components/write-article/write-article.component.css"))["default"]]
    })], WriteArticleComponent);
    /***/
  },

  /***/
  "./src/app/material.ts":
  /*!*****************************!*\
    !*** ./src/app/material.ts ***!
    \*****************************/

  /*! exports provided: BlogMaterialModule */

  /***/
  function srcAppMaterialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogMaterialModule", function () {
      return BlogMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");

    var BlogMaterialModule = function BlogMaterialModule() {
      _classCallCheck(this, BlogMaterialModule);
    };

    BlogMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"]],
      exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"]]
    })], BlogMaterialModule);
    /***/
  },

  /***/
  "./src/app/services/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./token.service */
    "./src/app/services/token.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, tokenService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.tokenService = tokenService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var token = this.tokenService.getToken();

          if (token) {
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "signUp",
        value: function signUp(userObject) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/register', userObject);
        }
      }, {
        key: "login",
        value: function login(userObject) {
          console.log("User service object login " + userObject);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/login', userObject);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/blog.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/blog.service.ts ***!
    \******************************************/

  /*! exports provided: BlogService */

  /***/
  function srcAppServicesBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogService", function () {
      return BlogService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BlogService = /*#__PURE__*/function () {
      function BlogService(http) {
        _classCallCheck(this, BlogService);

        this.http = http;
      }

      _createClass(BlogService, [{
        key: "create",
        value: function create(blogObject) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/create', blogObject);
        }
      }, {
        key: "getTopics",
        value: function getTopics() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/create/topics');
        }
      }, {
        key: "getPosts",
        value: function getPosts() {
          console.log("Get post blog service ");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/posts');
        }
      }, {
        key: "getPostById",
        value: function getPostById(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/posts/' + id);
        }
      }, {
        key: "getPostByTag",
        value: function getPostByTag(tag) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/tags/' + tag);
        }
      }, {
        key: "searchPost",
        value: function searchPost(text) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/search/' + text);
        }
      }, {
        key: "deleteBlog",
        value: function deleteBlog(id) {
          return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/posts/' + id);
        }
      }, {
        key: "updatePost",
        value: function updatePost(id, blogObj) {
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/posts/' + id, blogObj);
        }
      }, {
        key: "sendContact",
        value: function sendContact(details) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/contact', details);
        }
      }]);

      return BlogService;
    }();

    BlogService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BlogService);
    /***/
  },

  /***/
  "./src/app/services/token-interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/token-interceptor.ts ***!
    \***********************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppServicesTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./token.service */
    "./src/app/services/token.service.ts");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(tokenService) {
        _classCallCheck(this, TokenInterceptor);

        this.tokenService = tokenService;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // return next.handle(req);
          // console.log("Header interceptor called ");
          var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          };
          var token = this.tokenService.getToken();

          if (token) {
            //    console.log(token+" set token is ");
            headersConfig['Authorization'] = "beader ".concat(token);
          }

          var _req = req.clone({
            setHeaders: headersConfig
          });

          return next.handle(_req);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
      }];
    };

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/services/token.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/token.service.ts ***!
    \*******************************************/

  /*! exports provided: TokenService */

  /***/
  function srcAppServicesTokenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenService", function () {
      return TokenService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");

    var TokenService = /*#__PURE__*/function () {
      function TokenService(cookieService) {
        _classCallCheck(this, TokenService);

        this.cookieService = cookieService;
        this.isloggedin = false;
      }

      _createClass(TokenService, [{
        key: "setToken",
        value: function setToken(token) {
          this.cookieService.set('blog_token', token);
          this.isloggedin = true;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          if (this.cookieService.get('blog_token')) {
            this.isloggedin = true;
          }

          return this.cookieService.get('blog_token');
        }
      }, {
        key: "deleteToken",
        value: function deleteToken() {
          this.cookieService["delete"]('blog_token');
          this.isloggedin = false;
        }
      }, {
        key: "getPayload",
        value: function getPayload() {
          var token = this.cookieService.get('blog_token');
          var payload;

          if (token) {
            payload = token.split('.')[1];
            payload = JSON.parse(window.atob(payload));
          }

          return payload.data;
        }
      }]);

      return TokenService;
    }();

    TokenService.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }];
    };

    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenService);
    /***/
  },

  /***/
  "./src/app/services/users.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/users.service.ts ***!
    \*******************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UsersService = function UsersService() {
      _classCallCheck(this, UsersService);
    };

    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsersService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      apiUrl: 'http://localhost:3000/api/blogapp',
      domainName: 'codewithsatyendra.com',
      fb: 'https://www.facebook.com/satyendra.kannaujiya.5',
      insta: 'https://www.instagram.com/satyendra.kannaujiya1/',
      github: 'https://github.com/satyendrakannaujiya',
      twitter: 'https://twitter.com/satyendra250896',
      medium: 'https://medium.com/@satyendra250896',
      linkedin: 'https://www.linkedin.com/in/satyendra-kannaujiya-b54991b4/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/satyendra/Documents/Development/blog/blog-front-end/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map