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
exports.id = "pages/api/mail/receiveMail";
exports.ids = ["pages/api/mail/receiveMail"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/mail/receiveMail.js":
/*!***************************************!*\
  !*** ./pages/api/mail/receiveMail.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ReceiveMail)\n/* harmony export */ });\n/* harmony import */ var _utility_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utility/connection */ \"(api)/./utility/connection.js\");\n\nasync function ReceiveMail(req, res) {\n    const body = JSON.parse(req.body);\n    const receiver = body.receiver;\n    await _utility_connection__WEBPACK_IMPORTED_MODULE_0__[\"default\"].connect();\n    const db = _utility_connection__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db(\"test\");\n    const userCollection = db.collection(\"mailusers\");\n    const user = await userCollection.findOne({\n        email_id: receiver\n    });\n    if (user) {\n        const recCollection = db.collection(\"userMail\");\n        const mailCollection = recCollection.find({\n            receiver: receiver\n        }).sort({\n            timestamp: -1\n        }).limit(20);\n        const documents = await mailCollection.toArray();\n        res.status(200).json({\n            staus: \"ok\",\n            response: documents\n        });\n        return;\n    }\n    res.status(500).json({\n        status: \"no\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC9yZWNlaXZlTWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRDtBQUVsQyxlQUFlQyxZQUFZQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUM5QyxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNKLElBQUlFLElBQUk7SUFDaEMsTUFBTUcsV0FBV0gsS0FBS0csUUFBUTtJQUM5QixNQUFNUCxtRUFBYztJQUNwQixNQUFNUyxLQUFLVCw4REFBUyxDQUFDO0lBQ3JCLE1BQU1VLGlCQUFpQkQsR0FBR0UsVUFBVSxDQUFDO0lBQ3JDLE1BQU1DLE9BQU8sTUFBTUYsZUFBZUcsT0FBTyxDQUFDO1FBQUNDLFVBQVNQO0lBQVE7SUFDNUQsSUFBR0ssTUFBSztRQUNKLE1BQU1HLGdCQUFnQk4sR0FBR0UsVUFBVSxDQUFDO1FBQ3BDLE1BQU1LLGlCQUFpQkQsY0FBY0UsSUFBSSxDQUFDO1lBQUNWLFVBQVNBO1FBQVEsR0FBR1csSUFBSSxDQUFDO1lBQUNDLFdBQVUsQ0FBQztRQUFDLEdBQUdDLEtBQUssQ0FBQztRQUMxRixNQUFNQyxZQUFZLE1BQU1MLGVBQWVNLE9BQU87UUFDOUNuQixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxPQUFNO1lBQUtDLFVBQVNMO1FBQVM7UUFDbkQ7SUFDSixDQUFDO0lBQ0RsQixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDRCxRQUFPO0lBQUk7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21haWxpbmcvLi9wYWdlcy9hcGkvbWFpbC9yZWNlaXZlTWFpbC5qcz8yYjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSBcIi4uLy4uLy4uL3V0aWxpdHkvY29ubmVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBSZWNlaXZlTWFpbChyZXEscmVzKXtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gICAgY29uc3QgcmVjZWl2ZXIgPSBib2R5LnJlY2VpdmVyO1xuICAgIGF3YWl0IENsaWVudC5jb25uZWN0KCk7XG4gICAgY29uc3QgZGIgPSBDbGllbnQuZGIoJ3Rlc3QnKTtcbiAgICBjb25zdCB1c2VyQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21haWx1c2VycycpO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyQ29sbGVjdGlvbi5maW5kT25lKHtlbWFpbF9pZDpyZWNlaXZlcn0pO1xuICAgIGlmKHVzZXIpe1xuICAgICAgICBjb25zdCByZWNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbigndXNlck1haWwnKTtcbiAgICAgICAgY29uc3QgbWFpbENvbGxlY3Rpb24gPSByZWNDb2xsZWN0aW9uLmZpbmQoe3JlY2VpdmVyOnJlY2VpdmVyfSkuc29ydCh7dGltZXN0YW1wOi0xfSkubGltaXQoMjApO1xuICAgICAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBtYWlsQ29sbGVjdGlvbi50b0FycmF5KCk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdGF1czonb2snLHJlc3BvbnNlOmRvY3VtZW50c30pXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe3N0YXR1czonbm8nfSlcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwiUmVjZWl2ZU1haWwiLCJyZXEiLCJyZXMiLCJib2R5IiwiSlNPTiIsInBhcnNlIiwicmVjZWl2ZXIiLCJjb25uZWN0IiwiZGIiLCJ1c2VyQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsX2lkIiwicmVjQ29sbGVjdGlvbiIsIm1haWxDb2xsZWN0aW9uIiwiZmluZCIsInNvcnQiLCJ0aW1lc3RhbXAiLCJsaW1pdCIsImRvY3VtZW50cyIsInRvQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwic3RhdXMiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail/receiveMail.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mail/receiveMail.js"));
module.exports = __webpack_exports__;

})();