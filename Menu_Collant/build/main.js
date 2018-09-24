/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    var scrollY = function () {\r\n        var supportPageOffset = window.pageXOffset !== undefined;\r\n        var isCSS1Compat = ((document.compatMode || \"\") === \"CSS1Compat\");\r\n        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\r\n    }\r\n    var elements = Array.from(document.querySelectorAll('[data-sticky]'));\r\n\r\n    window.makeSticky = function (element) {\r\n        // Variables\r\n        var rect = element.getBoundingClientRect();\r\n        var offset = parseInt(element.getAttribute('data-offset') || 0, 10);\r\n        console.log(element.getAttribute('data-constraint'))\r\n        if (element.getAttribute('data-constraint')) {\r\n            var constraint = document.querySelector(element.getAttribute('data-constraint'))\r\n        } else {\r\n            var constraint = document.body;\r\n        }\r\n        var constraintRect = constraint.getBoundingClientRect();\r\n        var constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height;\r\n\r\n        var toP = rect.top + scrollY();\r\n        var fake = document.createElement('div');\r\n        fake.style.width = rect.width + 'px';\r\n        fake.style.height = rect.height + 'px';\r\n\r\n        // Fonctions\r\n        var onScroll = function () {\r\n            var hasScrollClass = element.classList.contains('fixed');\r\n            if (scrollY() > constraintBottom && element.style.position != 'absolute') {\r\n                element.classList.remove('fixed');\r\n                element.style.position = 'absolute';\r\n                element.style.bottom = '0';\r\n                element.style.top = 'auto';\r\n            } else if (scrollY() > toP - offset && scrollY() < constraintBottom && element.style.position != 'fixed') {\r\n                console.log('add');\r\n                element.classList.add('fixed');\r\n                element.style.position = 'fixed'\r\n                element.style.top = `${offset}px`;\r\n                element.style.bottom = 'auto';\r\n                element.style.width = `${rect.width}px`;\r\n                element.parentNode.insertBefore(fake, element);\r\n            } else if (scrollY() < toP - offset && element.style.position != 'static') {\r\n                console.log('remove');\r\n                element.classList.remove('fixed');\r\n                element.style.position = 'static';\r\n                if (element.parentNode.contains(fake)) {\r\n                    element.parentNode.removeChild(fake);\r\n                }\r\n\r\n            }\r\n        }\r\n        var onResize = function () {\r\n            element.style.width = 'auto';\r\n            element.classList.remove('fixed');\r\n            element.style.position = 'static';\r\n            fake.style.display = 'none';\r\n            rect = element.getBoundingClientRect();\r\n            constraintRect = constraint.getBoundingClientRect();\r\n            constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height;\r\n            toP = rect.top + scrollY();\r\n            fake.style.width = rect.width + 'px';\r\n            fake.style.height = rect.height + 'px';\r\n            fake.style.display = 'block';\r\n            onScroll()\r\n        }\r\n\r\n        // Listener\r\n        window.addEventListener('scroll', onScroll);\r\n        window.addEventListener('resize', onResize)\r\n    }\r\n    elements.map((element) => {\r\n        makeSticky(element);\r\n\r\n    })\r\n\r\n})()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2Nyb2xsWSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICB2YXIgaXNDU1MxQ29tcGF0ID0gKChkb2N1bWVudC5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIik7XHJcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgfVxyXG4gICAgdmFyIGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zdGlja3ldJykpO1xyXG5cclxuICAgIHdpbmRvdy5tYWtlU3RpY2t5ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAvLyBWYXJpYWJsZXNcclxuICAgICAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9mZnNldCcpIHx8IDAsIDEwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb25zdHJhaW50JykpXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnN0cmFpbnQnKSkge1xyXG4gICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29uc3RyYWludCcpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnN0cmFpbnRSZWN0ID0gY29uc3RyYWludC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgY29uc3RyYWludEJvdHRvbSA9IGNvbnN0cmFpbnRSZWN0LnRvcCArIHNjcm9sbFkoKSArIGNvbnN0cmFpbnRSZWN0LmhlaWdodCAtIG9mZnNldCAtIHJlY3QuaGVpZ2h0O1xyXG5cclxuICAgICAgICB2YXIgdG9QID0gcmVjdC50b3AgKyBzY3JvbGxZKCk7XHJcbiAgICAgICAgdmFyIGZha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmYWtlLnN0eWxlLndpZHRoID0gcmVjdC53aWR0aCArICdweCc7XHJcbiAgICAgICAgZmFrZS5zdHlsZS5oZWlnaHQgPSByZWN0LmhlaWdodCArICdweCc7XHJcblxyXG4gICAgICAgIC8vIEZvbmN0aW9uc1xyXG4gICAgICAgIHZhciBvblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGhhc1Njcm9sbENsYXNzID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxZKCkgPiBjb25zdHJhaW50Qm90dG9tICYmIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gIT0gJ2Fic29sdXRlJykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9ICcwJztcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFkoKSA+IHRvUCAtIG9mZnNldCAmJiBzY3JvbGxZKCkgPCBjb25zdHJhaW50Qm90dG9tICYmIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gIT0gJ2ZpeGVkJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7b2Zmc2V0fXB4YDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3JlY3Qud2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmYWtlLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxZKCkgPCB0b1AgLSBvZmZzZXQgJiYgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiAhPSAnc3RhdGljJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZS5jb250YWlucyhmYWtlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmYWtlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9uUmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgICAgICAgICAgZmFrZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3RyYWludFJlY3QgPSBjb25zdHJhaW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdHJhaW50Qm90dG9tID0gY29uc3RyYWludFJlY3QudG9wICsgc2Nyb2xsWSgpICsgY29uc3RyYWludFJlY3QuaGVpZ2h0IC0gb2Zmc2V0IC0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRvUCA9IHJlY3QudG9wICsgc2Nyb2xsWSgpO1xyXG4gICAgICAgICAgICBmYWtlLnN0eWxlLndpZHRoID0gcmVjdC53aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIGZha2Uuc3R5bGUuaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICBmYWtlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBvblNjcm9sbCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaXN0ZW5lclxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKVxyXG4gICAgfVxyXG4gICAgZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgbWFrZVN0aWNreShlbGVtZW50KTtcclxuXHJcbiAgICB9KVxyXG5cclxufSkoKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });