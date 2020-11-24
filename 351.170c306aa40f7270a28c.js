(self["webpackChunkqalc_react"] = self["webpackChunkqalc_react"] || []).push([[351],{

/***/ 351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n# I use hours far more often than the planck_constant\nplanck_constant = h\ndelete h\nh = hour \n\nAh = A h\n\nE = energy\n\ndelete °C\n°C = tempC\ndelete °F\n°F = tempF\n\nfibonacci = x => x >= 2 && fibonacci(x-1) + fibonacci(x-2) || x\n\nspheresurface = r => 4 pi r^2\n\n\n# people might try to write either `10 in to cm` (inches to cm) or `10 kg in pounds`, which would be syntactically different.\n# to avoid confusion, disallow both of these\ndelete(in)\n\n#\n# computing power\n#\n\nflo! # one floating point operation\n\nfloating_point_operation = flo\n\nflops = flo/s\n\n\n# cryptocurrency\n\nbitcoin!\nBTC = bitcoin\nsatoshi = (1/100million) bitcoin\n\n\n# logic\n\nok = 1\nerror = 0\ntrue = 1\nfalse = 0\n\n# buggy if a = 0\nif = bool => then => else => (bool && then || else)\n\n\n# screen ratio calculation, i.e. how wide is a 27\" screen with a ratio of 16:9\n#\n# (1) width^2 + height^2 = (diagonal^2)\n# (2) width = ratio height\n# \n# => w^2 + (w/ratio)^2 = d^2\n# => 1 w^2 + (1/ratio^2) w^2 = d^2\n# => (1 + 1/ratio^2) w^2 = d^2\n# => w = d / sqrt(1 + 1/ratio^2)\n# \n# Example:\n# screenwidth (27inch) (16|9) to cm ≅ 60 cm\n\nscreenwidth = diagonal => ratio => diagonal / sqrt (1 + 1 / ratio ^ 2)\nscreenheight = diagonal => ratio => screenwidth diagonal (1/ratio)\n\npixel!\ndpi = pixel/inch\nppi = dpi\nppcm = pixel/cm\n\nscreendensity = width => height => diagonal => (width pixel / screenwidth diagonal (width / height))\n");

/***/ })

}]);
//# sourceMappingURL=351.170c306aa40f7270a28c.js.map