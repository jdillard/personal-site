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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 349);
/******/ })
/************************************************************************/
/******/ ({

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* header animation */\nfunction LogoBaffleOut() {\n    var b = baffle('#logo').start().set({\n        characters: '░█▓ ▓▒░<>/',\n        speed: 60\n    }).text(function (currentText) {\n        return \"Jared Dillard\";\n    });\n\n    setTimeout(function () {\n        b.reveal(500);\n    }, 500);\n}\n\nfunction LogoBaffleIn() {\n    var names = ['farmer of bits', 'web developer'];\n    var b = baffle('#logo').start().set({\n        characters: '░█▓ ▓▒░<>/',\n        speed: 60\n    }).text(function (currentText) {\n        return names[Math.floor(Math.random() * names.length)];\n    });\n\n    setTimeout(function () {\n        b.reveal(500);\n    }, 500);\n}\n\nwindow.onload = function () {\n    LogoBaffleOut();\n};\n\ndocument.getElementById('logo').onmouseover = function () {\n    LogoBaffleIn();\n};\ndocument.getElementById('logo').onmouseleave = function () {\n    LogoBaffleOut();\n};\n\n/* mobile menu */\nvar openNavButton = document.getElementById(\"openNav\");\nvar closeNavButton = document.getElementById(\"closeNav\");\nvar smNav = document.getElementById(\"sm-nav-container\");\n\nopenNavButton.addEventListener(\"click\", function () {\n    smNav.style.display = \"block\";\n    smNav.classList.toggle(\"onscreen\");\n});\n\ncloseNavButton.addEventListener(\"click\", function () {\n    smNav.style.display = \"none\";\n    smNav.classList.toggle(\"onscreen\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tbW9ucy5qcz9hMWRjIl0sIm5hbWVzIjpbIkxvZ29CYWZmbGVPdXQiLCJiIiwiYmFmZmxlIiwic3RhcnQiLCJzZXQiLCJjaGFyYWN0ZXJzIiwic3BlZWQiLCJ0ZXh0Iiwic2V0VGltZW91dCIsInJldmVhbCIsIkxvZ29CYWZmbGVJbiIsIm5hbWVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9ubW91c2VvdmVyIiwib25tb3VzZWxlYXZlIiwib3Blbk5hdkJ1dHRvbiIsImNsb3NlTmF2QnV0dG9uIiwic21OYXYiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsU0FBU0EsYUFBVCxHQUF5QjtBQUNyQixRQUFJQyxJQUFJQyxPQUFPLE9BQVAsRUFBZ0JDLEtBQWhCLEdBQXdCQyxHQUF4QixDQUE0QjtBQUNoQ0Msb0JBQVksWUFEb0I7QUFFaENDLGVBQU87QUFGeUIsS0FBNUIsRUFHTEMsSUFISyxDQUdBO0FBQUEsZUFBZSxlQUFmO0FBQUEsS0FIQSxDQUFSOztBQUtBQyxlQUFXLFlBQVk7QUFDbkJQLFVBQUVRLE1BQUYsQ0FBUyxHQUFUO0FBQ0gsS0FGRCxFQUVHLEdBRkg7QUFHQzs7QUFFRCxTQUFTQyxZQUFULEdBQXdCO0FBQ3hCLFFBQUlDLFFBQVEsQ0FBQyxnQkFBRCxFQUFtQixlQUFuQixDQUFaO0FBQ0EsUUFBSVYsSUFBSUMsT0FBTyxPQUFQLEVBQWdCQyxLQUFoQixHQUF3QkMsR0FBeEIsQ0FBNEI7QUFDaENDLG9CQUFZLFlBRG9CO0FBRWhDQyxlQUFPO0FBRnlCLEtBQTVCLEVBR0xDLElBSEssQ0FHQTtBQUFBLGVBQWVJLE1BQU1DLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFjSCxNQUFNSSxNQUEvQixDQUFOLENBQWY7QUFBQSxLQUhBLENBQVI7O0FBS0FQLGVBQVcsWUFBWTtBQUNuQlAsVUFBRVEsTUFBRixDQUFTLEdBQVQ7QUFDSCxLQUZELEVBRUcsR0FGSDtBQUdIOztBQUVETyxPQUFPQyxNQUFQLEdBQWMsWUFBVTtBQUFDakI7QUFBaUIsQ0FBMUM7O0FBRUFrQixTQUFTQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxXQUFoQyxHQUE0QyxZQUFVO0FBQUNWO0FBQWdCLENBQXZFO0FBQ0FRLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NFLFlBQWhDLEdBQTZDLFlBQVU7QUFBQ3JCO0FBQWlCLENBQXpFOztBQUVBO0FBQ0EsSUFBSXNCLGdCQUFnQkosU0FBU0MsY0FBVCxDQUF3QixTQUF4QixDQUFwQjtBQUNBLElBQUlJLGlCQUFpQkwsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFyQjtBQUNBLElBQUlLLFFBQVFOLFNBQVNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQVo7O0FBRUFHLGNBQWNHLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQVU7QUFDOUNELFVBQU1FLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixPQUF0QjtBQUNBSCxVQUFNSSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixVQUF2QjtBQUNILENBSEQ7O0FBS0FOLGVBQWVFLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQVU7QUFDL0NELFVBQU1FLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixNQUF0QjtBQUNBSCxVQUFNSSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixVQUF2QjtBQUNILENBSEQiLCJmaWxlIjoiMzQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGVhZGVyIGFuaW1hdGlvbiAqL1xuZnVuY3Rpb24gTG9nb0JhZmZsZU91dCgpIHtcbiAgICB2YXIgYiA9IGJhZmZsZSgnI2xvZ28nKS5zdGFydCgpLnNldCh7XG4gICAgICAgIGNoYXJhY3RlcnM6ICfilpHilojilpMg4paT4paS4paRPD4vJyxcbiAgICAgICAgc3BlZWQ6IDYwXG4gICAgfSkudGV4dChjdXJyZW50VGV4dCA9PiBcIkphcmVkIERpbGxhcmRcIik7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYi5yZXZlYWwoNTAwKTtcbiAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIExvZ29CYWZmbGVJbigpIHtcbiAgICB2YXIgbmFtZXMgPSBbJ2Zhcm1lciBvZiBiaXRzJywgJ3dlYiBkZXZlbG9wZXInXTtcbiAgICB2YXIgYiA9IGJhZmZsZSgnI2xvZ28nKS5zdGFydCgpLnNldCh7XG4gICAgICAgIGNoYXJhY3RlcnM6ICfilpHilojilpMg4paT4paS4paRPD4vJyxcbiAgICAgICAgc3BlZWQ6IDYwXG4gICAgfSkudGV4dChjdXJyZW50VGV4dCA9PiBuYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbmFtZXMubGVuZ3RoKV0pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGIucmV2ZWFsKDUwMCk7XG4gICAgfSwgNTAwKTtcbn1cblxud2luZG93Lm9ubG9hZD1mdW5jdGlvbigpe0xvZ29CYWZmbGVPdXQoKTt9O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpLm9ubW91c2VvdmVyPWZ1bmN0aW9uKCl7TG9nb0JhZmZsZUluKCk7fTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJykub25tb3VzZWxlYXZlPWZ1bmN0aW9uKCl7TG9nb0JhZmZsZU91dCgpO307XG5cbi8qIG1vYmlsZSBtZW51ICovXG52YXIgb3Blbk5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk5hdlwiKTtcbnZhciBjbG9zZU5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VOYXZcIik7XG52YXIgc21OYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNtLW5hdi1jb250YWluZXJcIik7XG5cbm9wZW5OYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgc21OYXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBzbU5hdi5jbGFzc0xpc3QudG9nZ2xlKFwib25zY3JlZW5cIik7XG59KTtcblxuY2xvc2VOYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgc21OYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHNtTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJvbnNjcmVlblwiKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb21tb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///349\n");

/***/ })

/******/ });