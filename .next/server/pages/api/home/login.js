"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/home/login";
exports.ids = ["pages/api/home/login"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/home/login.js":
/*!*********************************!*\
  !*** ./pages/api/home/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var _utility_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utility/connection */ \"(api)/./utility/connection.js\");\n\nasync function Login(req, res) {\n    const body = JSON.parse(req.body);\n    const mail = body.mail;\n    const password = body.password;\n    await _utility_connection__WEBPACK_IMPORTED_MODULE_0__[\"default\"].connect();\n    const db = _utility_connection__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db(\"test\");\n    const collection = db.collection(\"mailusers\");\n    const result = await collection.findOne({\n        email_id: mail,\n        password: password\n    });\n    if (result) {\n        return res.status(200).json({\n            user: \"ok\",\n            token: result._id.toString(),\n            name: result.name\n        });\n    }\n    return res.status(200).json({\n        \"user\": \"no\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaG9tZS9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnRDtBQUVqQyxlQUFlQyxNQUFNQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUN4QyxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNKLElBQUlFLElBQUk7SUFDaEMsTUFBTUcsT0FBT0gsS0FBS0csSUFBSTtJQUN0QixNQUFNQyxXQUFXSixLQUFLSSxRQUFRO0lBQzlCLE1BQU1SLG1FQUFjO0lBQ3BCLE1BQU1VLEtBQUtWLDhEQUFTLENBQUM7SUFDckIsTUFBTVcsYUFBYUQsR0FBR0MsVUFBVSxDQUFDO0lBQ2pDLE1BQU1DLFNBQVMsTUFBTUQsV0FBV0UsT0FBTyxDQUFDO1FBQUNDLFVBQVNQO1FBQUtDLFVBQVNBO0lBQVE7SUFDeEUsSUFBR0ksUUFBTztRQUNOLE9BQU9ULElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsTUFBSztZQUFLQyxPQUFNTixPQUFPTyxHQUFHLENBQUNDLFFBQVE7WUFBR0MsTUFBS1QsT0FBT1MsSUFBSTtRQUFBO0lBQ3ZGLENBQUM7SUFDRCxPQUFPbEIsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDLFFBQU87SUFBSTtBQUM1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbGluZy8uL3BhZ2VzL2FwaS9ob21lL2xvZ2luLmpzP2E2N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi8uLi91dGlsaXR5L2Nvbm5lY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIExvZ2luKHJlcSxyZXMpe1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgICBjb25zdCBtYWlsID0gYm9keS5tYWlsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gYm9keS5wYXNzd29yZDtcbiAgICBhd2FpdCBDbGllbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IGRiID0gQ2xpZW50LmRiKCd0ZXN0Jyk7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21haWx1c2VycycpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZE9uZSh7ZW1haWxfaWQ6bWFpbCxwYXNzd29yZDpwYXNzd29yZH0pXG4gICAgaWYocmVzdWx0KXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt1c2VyOidvaycsdG9rZW46cmVzdWx0Ll9pZC50b1N0cmluZygpLG5hbWU6cmVzdWx0Lm5hbWV9KVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyd1c2VyJzonbm8nfSlcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwiTG9naW4iLCJyZXEiLCJyZXMiLCJib2R5IiwiSlNPTiIsInBhcnNlIiwibWFpbCIsInBhc3N3b3JkIiwiY29ubmVjdCIsImRiIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImZpbmRPbmUiLCJlbWFpbF9pZCIsInN0YXR1cyIsImpzb24iLCJ1c2VyIiwidG9rZW4iLCJfaWQiLCJ0b1N0cmluZyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/home/login.js\n");

/***/ }),

/***/ "(api)/./utility/connection.js":
/*!*******************************!*\
  !*** ./utility/connection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = String(process.env.MONGO_DB_URI);\nconst Client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsaXR5L2Nvbm5lY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBQ3ZELE1BQU1FLE1BQU1DLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUUzQyxNQUFNQyxTQUFTLElBQUlQLGdEQUFXQSxDQUFDRSxLQUFLO0lBQ2hDTSxXQUFXO1FBQ1RDLFNBQVNSLHdEQUFtQjtRQUM1QlUsUUFBUSxJQUFJO1FBQ1pDLG1CQUFtQixJQUFJO0lBQ3pCO0FBQ0o7QUFFQSxpRUFBZUwsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21haWxpbmcvLi91dGlsaXR5L2Nvbm5lY3Rpb24uanM/MjhjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCxTZXJ2ZXJBcGlWZXJzaW9uIH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHVyaSA9IFN0cmluZyhwcm9jZXNzLmVudi5NT05HT19EQl9VUkkpO1xuXG5jb25zdCBDbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCB7XG4gICAgc2VydmVyQXBpOiB7XG4gICAgICB2ZXJzaW9uOiBTZXJ2ZXJBcGlWZXJzaW9uLnYxLFxuICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgZGVwcmVjYXRpb25FcnJvcnM6IHRydWUsXG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENsaWVudDsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJTZXJ2ZXJBcGlWZXJzaW9uIiwidXJpIiwiU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX0RCX1VSSSIsIkNsaWVudCIsInNlcnZlckFwaSIsInZlcnNpb24iLCJ2MSIsInN0cmljdCIsImRlcHJlY2F0aW9uRXJyb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utility/connection.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/home/login.js"));
module.exports = __webpack_exports__;

})();