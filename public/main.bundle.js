/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("const NavBarToggler = (function () {\r\n    const overlay = document.getElementById(\"overlay\");\r\n    const hamburgerIcon = document.getElementById(\"hamburger-icon\");\r\n    const closeIcon = document.getElementById(\"close-icon\");\r\n    const navbarLinksContainer = document.getElementById(\"navbar-links-container\");\r\n\r\n    function showClasses() {\r\n        document.body.style.overflow = \"hidden\";\r\n        overlay.classList.add(\"show\");\r\n        hamburgerIcon.classList.add(\"hide\");\r\n        closeIcon.classList.add(\"show\");\r\n        navbarLinksContainer.classList.add(\"show\");\r\n    }\r\n\r\n    function hideClasses() {\r\n        document.body.style.overflowX = \"hidden\";\r\n        document.body.style.overflowY = \"auto\";\r\n        overlay.classList.remove(\"show\");\r\n        hamburgerIcon.classList.remove(\"hide\");\r\n        closeIcon.classList.remove(\"show\");\r\n        navbarLinksContainer.classList.remove(\"show\");\r\n    }\r\n\r\n    function show() {\r\n        hamburgerIcon.addEventListener(\"click\", showClasses);\r\n    }\r\n\r\n    function hide() {\r\n        closeIcon.addEventListener(\"click\", hideClasses);\r\n    }\r\n\r\n    function overlayHandler() {\r\n        overlay.addEventListener(\"click\", hideClasses);\r\n    }\r\n\r\n    return {\r\n        open: show,\r\n        close: hide,\r\n        overlayClose: overlayHandler\r\n    };\r\n})();\r\n\r\nNavBarToggler.open();\r\nNavBarToggler.close();\r\nNavBarToggler.overlayClose();\n\n//# sourceURL=webpack://manage-landing-page/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;