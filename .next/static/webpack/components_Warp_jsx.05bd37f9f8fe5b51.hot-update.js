"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Warp_jsx",{

/***/ "./components/Warp.jsx":
/*!*****************************!*\
  !*** ./components/Warp.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Warp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/postprocessing/ShaderPass */ \"./node_modules/three/examples/jsm/postprocessing/ShaderPass.js\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Warp() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function onFirstMount() {\n        var onMouseMove = function onMouseMove(e) {\n            uMouse.x = e.clientX / window.innerWidth;\n            uMouse.y = 1 - e.clientY / window.innerHeight;\n        };\n        var onWindowResize = function onWindowResize() {\n            camera.aspect = window.innerWidth / window.innerHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(innerWidth, innerHeight);\n        };\n        var addText = function addText(context, canvas, size, str) {\n            var lines = str.split(\"\\n\");\n            console.log(lines);\n            for(var j = 0; j < lines.length; j++){\n                context.fillText(lines[j], canvas.width / 2, canvas.height / 4 + j * size);\n            }\n        };\n        var renderer, scene, camera, composer;\n        var perspective = 10;\n        var customPass, bloomPass;\n        var offsetFactorX = window.innerWidth / 2;\n        var offsetFactorY = window.innerHeight / 2;\n        var uMouse = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(0, 0);\n        var fov = 180 * (2 * Math.atan(window.innerHeight / 2 / perspective)) / Math.PI;\n        renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        document.getElementById(\"three\").appendChild(renderer.domElement);\n        camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1000);\n        camera.position.set(0, 0, perspective);\n        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0));\n        scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();\n        scene.background = new three__WEBPACK_IMPORTED_MODULE_3__.Color(0x111111);\n        var LABEL_TEXT = \"YOUR TEXT HERE \\n MOUSE OVER ME \";\n        var labelMeshSize = innerWidth > innerHeight ? innerHeight : innerWidth;\n        var labelGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneBufferGeometry(labelMeshSize, labelMeshSize);\n        // Canvas and corresponding context2d to be used for drawing the text\n        var labelTextureCanvas = document.createElement(\"canvas\");\n        var labelTextureCtx = labelTextureCanvas.getContext(\"2d\");\n        // Dynamic texture size based on the device capabilities\n        var textureSize = Math.min(renderer.capabilities.maxTextureSize, 2048);\n        var relativeFontSize = 20;\n        console.log(textureSize);\n        // Size our text canvas\n        labelTextureCanvas.width = textureSize;\n        labelTextureCanvas.height = textureSize;\n        labelTextureCtx.textAlign = \"center\";\n        labelTextureCtx.textBaseline = \"middle\";\n        // Dynamic font size based on the texture size (based on the device capabilities)\n        labelTextureCtx.font = \"\".concat(relativeFontSize, \"px Helvetica\");\n        var textWidth = labelTextureCtx.measureText(LABEL_TEXT).width;\n        var widthDelta = labelTextureCanvas.width / textWidth;\n        var fontSize = relativeFontSize * widthDelta;\n        labelTextureCtx.font = \"\".concat(fontSize, \"px Helvetica\");\n        labelTextureCtx.fillStyle = \"white\";\n        addText(labelTextureCtx, labelTextureCanvas, fontSize, LABEL_TEXT);\n        // labelTextureCtx.fillText(LABEL_TEXT, labelTextureCanvas.width / 2, labelTextureCanvas.height / 2)\n        var labelMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.MeshBasicMaterial({\n            map: new three__WEBPACK_IMPORTED_MODULE_3__.CanvasTexture(labelTextureCanvas),\n            transparent: true\n        });\n        // Create a plane mesh, add it to the scene\n        var labelMesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(labelGeometry, labelMaterial);\n        scene.add(labelMesh);\n        var postEffect = {\n            uniforms: {\n                tDiffuse: {\n                    value: null\n                },\n                uTime: {\n                    value: 0\n                },\n                uAmp: {\n                    value: 0.02\n                },\n                resolution: {\n                    value: new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(1, window.innerHeight / window.innerWidth)\n                },\n                uMouse: {\n                    value: new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(-10, -10)\n                },\n                uRadius: {\n                    value: 0.2\n                }\n            },\n            vertexShader: \"varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );}\",\n            fragmentShader: \"\\n    \\n    uniform sampler2D tDiffuse;\\n    uniform vec2 resolution;\\n    varying vec2 vUv;\\n    uniform vec2 uMouse;\\n    uniform float uTime;\\n    uniform float uAmp;\\n\\n    uniform float uRadius;\\n    \\n    float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {\\n      uv -= disc_center;\\n      uv*=resolution;\\n      float dist = sqrt(dot(uv, uv));\\n      return  smoothstep(disc_radius+border_size, disc_radius-border_size,  dist);\\n    }\\n\\n    float wave(vec2 uv){\\n        float dx = 1. - uv.x;   \\n        float dy = 1. -uv.y;\\n        float freq = sqrt(dx*dx + dy*dy);\\n        float angle = freq*10.+uTime;\\n        return sin(angle)*uAmp;\\n    }\\n   \\n\\n    void main()  {\\n        float c = circle(vUv, uMouse, uRadius, 0.1 );\\n        float wave = (1.-c) * wave(vUv);\\n        vec2 mod_uv = wave+(vUv);\\n        vec4 inputColor = texture2D(tDiffuse, mod_uv);\\n        vec4 color = vec4(inputColor);\\n        gl_FragColor = color;\\n    }\"\n        };\n        composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer);\n        var renderPass = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_5__.RenderPass(scene, camera);\n        composer.addPass(renderPass);\n        customPass = new three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_6__.ShaderPass(postEffect);\n        customPass.renderToScreen = true;\n        composer.addPass(customPass);\n        //GUI STUFF SO U CAN EDIT\n        var params = {\n            radius: 0.1,\n            textField: \"This is a placeholder \\n text\",\n            intensity: 0.02\n        };\n        var gui = new dat_gui__WEBPACK_IMPORTED_MODULE_2__.GUI();\n        var folder = gui.addFolder(\"Shader Values\");\n        folder.add(params, \"radius\", 0, 0.5).step(0.001).onChange(function(value) {\n            customPass.uniforms.uRadius.value = value;\n        });\n        folder.add(params, \"intensity\", 0, 0.1).step(0.001).onChange(function(value) {\n            customPass.uniforms.uAmp.value = value;\n        });\n        folder.add(params, \"textField\").onFinishChange(function(value) {\n            labelTextureCtx.clearRect(0, 0, labelTextureCanvas.width, labelTextureCanvas.height);\n            labelGeometry.width = labelMeshSize;\n            labelGeometry.height = labelMeshSize;\n            addText(labelTextureCtx, labelTextureCanvas, fontSize, value);\n            labelMaterial.map = new three__WEBPACK_IMPORTED_MODULE_3__.CanvasTexture(labelTextureCanvas);\n        });\n        document.addEventListener(\"mousemove\", onMouseMove);\n        window.addEventListener(\"resize\", onWindowResize);\n        function animate() {\n            requestAnimationFrame(animate);\n            composer.render();\n            if (customPass) {\n                customPass.uniforms.uTime.value += 0.01;\n                customPass.uniforms.uMouse.value = uMouse;\n            }\n        }\n        animate();\n        return function unMount() {\n            window.removeEventListener(\"resize\", onWindowResize);\n            document.removeEventListener(\"mousemove\", onMouseMove);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"three\"\n    }, void 0, false, {\n        fileName: \"/Users/peibarthwu/Desktop/graphics/components/Warp.jsx\",\n        lineNumber: 206,\n        columnNumber: 10\n    }, this);\n}\n_s(Warp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Warp;\nvar _c;\n$RefreshReg$(_c, \"Warp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDO1lBQ2xCLElBQUkvRSxVQUFVLEVBQUU7Z0JBQ2RBLFVBQVUsQ0FBQ29ELFFBQVEsQ0FBQ0csS0FBSyxDQUFDRCxLQUFLLElBQUksSUFBSSxDQUFDO2dCQUN4Q3RELFVBQVUsQ0FBQ29ELFFBQVEsQ0FBQ25GLE1BQU0sQ0FBQ3FGLEtBQUssR0FBR3JGLE1BQU0sQ0FBQztZQUM1QyxDQUFDO1FBQ0gsQ0FBQztRQUNENEcsT0FBTyxFQUFFLENBQUM7UUFjVixPQUFPLFNBQVNHLE9BQU8sR0FBRztZQUN4QjVHLE1BQU0sQ0FBQzZHLG1CQUFtQixDQUFDLFFBQVEsRUFBRXhHLGNBQWMsQ0FBQyxDQUFDO1lBQ3JEaUMsUUFBUSxDQUFDdUUsbUJBQW1CLENBQUMsV0FBVyxFQUFFbEgsV0FBVyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSCxxQkFBTyw4REFBQ21ILEtBQUc7UUFBQ0MsRUFBRSxFQUFDLE9BQU87Ozs7O1lBQU8sQ0FBQztBQUNoQyxDQUFDO0dBdk11QnRILElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dhcnAuanN4Pzg5NmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzXCI7XG5pbXBvcnQgeyBTaGFkZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9TaGFkZXJQYXNzXCI7XG5pbXBvcnQgKiBhcyBkYXQgZnJvbSBcImRhdC5ndWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FycCgpIHtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uIG9uRmlyc3RNb3VudCgpIHtcbiAgICBsZXQgcmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEsIGNvbXBvc2VyO1xuICAgIGxldCBwZXJzcGVjdGl2ZSA9IDEwO1xuICAgIGxldCBjdXN0b21QYXNzLCBibG9vbVBhc3M7XG5cbiAgICBjb25zdCBvZmZzZXRGYWN0b3JYID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xuICAgIGNvbnN0IG9mZnNldEZhY3RvclkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuXG4gICAgdmFyIHVNb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApO1xuXG4gICAgY29uc3QgZm92ID1cbiAgICAgICgxODAgKiAoMiAqIE1hdGguYXRhbih3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC8gcGVyc3BlY3RpdmUpKSkgLyBNYXRoLlBJO1xuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhyZWVcIikuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICBmb3YsXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIDEsXG4gICAgICAxMDAwXG4gICAgKTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIHBlcnNwZWN0aXZlKTtcbiAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweDExMTExMSk7XG5cbiAgICBsZXQgTEFCRUxfVEVYVCA9IFwiWU9VUiBURVhUIEhFUkUgXFxuIE1PVVNFIE9WRVIgTUUgXCI7XG4gICAgY29uc3QgbGFiZWxNZXNoU2l6ZSA9IGlubmVyV2lkdGggPiBpbm5lckhlaWdodCA/IGlubmVySGVpZ2h0IDogaW5uZXJXaWR0aDtcbiAgICBjb25zdCBsYWJlbEdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoXG4gICAgICBsYWJlbE1lc2hTaXplLFxuICAgICAgbGFiZWxNZXNoU2l6ZVxuICAgICk7XG5cbiAgICAvLyBDYW52YXMgYW5kIGNvcnJlc3BvbmRpbmcgY29udGV4dDJkIHRvIGJlIHVzZWQgZm9yIGRyYXdpbmcgdGhlIHRleHRcbiAgICBjb25zdCBsYWJlbFRleHR1cmVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGxhYmVsVGV4dHVyZUN0eCA9IGxhYmVsVGV4dHVyZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gRHluYW1pYyB0ZXh0dXJlIHNpemUgYmFzZWQgb24gdGhlIGRldmljZSBjYXBhYmlsaXRpZXNcbiAgICBjb25zdCB0ZXh0dXJlU2l6ZSA9IE1hdGgubWluKHJlbmRlcmVyLmNhcGFiaWxpdGllcy5tYXhUZXh0dXJlU2l6ZSwgMjA0OCk7XG4gICAgY29uc3QgcmVsYXRpdmVGb250U2l6ZSA9IDIwO1xuICAgIGNvbnNvbGUubG9nKHRleHR1cmVTaXplKTtcbiAgICAvLyBTaXplIG91ciB0ZXh0IGNhbnZhc1xuICAgIGxhYmVsVGV4dHVyZUNhbnZhcy53aWR0aCA9IHRleHR1cmVTaXplO1xuICAgIGxhYmVsVGV4dHVyZUNhbnZhcy5oZWlnaHQgPSB0ZXh0dXJlU2l6ZTtcbiAgICBsYWJlbFRleHR1cmVDdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBsYWJlbFRleHR1cmVDdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAvLyBEeW5hbWljIGZvbnQgc2l6ZSBiYXNlZCBvbiB0aGUgdGV4dHVyZSBzaXplIChiYXNlZCBvbiB0aGUgZGV2aWNlIGNhcGFiaWxpdGllcylcbiAgICBsYWJlbFRleHR1cmVDdHguZm9udCA9IGAke3JlbGF0aXZlRm9udFNpemV9cHggSGVsdmV0aWNhYDtcbiAgICBjb25zdCB0ZXh0V2lkdGggPSBsYWJlbFRleHR1cmVDdHgubWVhc3VyZVRleHQoTEFCRUxfVEVYVCkud2lkdGg7XG4gICAgY29uc3Qgd2lkdGhEZWx0YSA9IGxhYmVsVGV4dHVyZUNhbnZhcy53aWR0aCAvIHRleHRXaWR0aDtcbiAgICBjb25zdCBmb250U2l6ZSA9IHJlbGF0aXZlRm9udFNpemUgKiB3aWR0aERlbHRhO1xuICAgIGxhYmVsVGV4dHVyZUN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggSGVsdmV0aWNhYDtcbiAgICBsYWJlbFRleHR1cmVDdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGFkZFRleHQobGFiZWxUZXh0dXJlQ3R4LCBsYWJlbFRleHR1cmVDYW52YXMsIGZvbnRTaXplLCBMQUJFTF9URVhUKTtcbiAgICAvLyBsYWJlbFRleHR1cmVDdHguZmlsbFRleHQoTEFCRUxfVEVYVCwgbGFiZWxUZXh0dXJlQ2FudmFzLndpZHRoIC8gMiwgbGFiZWxUZXh0dXJlQ2FudmFzLmhlaWdodCAvIDIpXG5cbiAgICBjb25zdCBsYWJlbE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIG1hcDogbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUobGFiZWxUZXh0dXJlQ2FudmFzKSxcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgIH0pO1xuICAgIC8vIENyZWF0ZSBhIHBsYW5lIG1lc2gsIGFkZCBpdCB0byB0aGUgc2NlbmVcbiAgICBjb25zdCBsYWJlbE1lc2ggPSBuZXcgVEhSRUUuTWVzaChsYWJlbEdlb21ldHJ5LCBsYWJlbE1hdGVyaWFsKTtcbiAgICBzY2VuZS5hZGQobGFiZWxNZXNoKTtcblxuICAgIHZhciBwb3N0RWZmZWN0ID0ge1xuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdERpZmZ1c2U6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdUFtcDogeyB2YWx1ZTogMC4wMiB9LFxuICAgICAgICByZXNvbHV0aW9uOiB7XG4gICAgICAgICAgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKDEsIHdpbmRvdy5pbm5lckhlaWdodCAvIHdpbmRvdy5pbm5lcldpZHRoKSxcbiAgICAgICAgfSxcbiAgICAgICAgdU1vdXNlOiB7IHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigtMTAsIC0xMCkgfSxcbiAgICAgICAgdVJhZGl1czogeyB2YWx1ZTogMC4yIH0sXG4gICAgICB9LFxuICAgICAgdmVydGV4U2hhZGVyOiBgdmFyeWluZyB2ZWMyIHZVdjt2b2lkIG1haW4oKSB7dlV2ID0gdXY7Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wICk7fWAsXG4gICAgICBmcmFnbWVudFNoYWRlcjogYFxuICAgIFxuICAgIHVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xuICAgIHVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xuICAgIHZhcnlpbmcgdmVjMiB2VXY7XG4gICAgdW5pZm9ybSB2ZWMyIHVNb3VzZTtcbiAgICB1bmlmb3JtIGZsb2F0IHVUaW1lO1xuICAgIHVuaWZvcm0gZmxvYXQgdUFtcDtcblxuICAgIHVuaWZvcm0gZmxvYXQgdVJhZGl1cztcbiAgICBcbiAgICBmbG9hdCBjaXJjbGUodmVjMiB1diwgdmVjMiBkaXNjX2NlbnRlciwgZmxvYXQgZGlzY19yYWRpdXMsIGZsb2F0IGJvcmRlcl9zaXplKSB7XG4gICAgICB1diAtPSBkaXNjX2NlbnRlcjtcbiAgICAgIHV2Kj1yZXNvbHV0aW9uO1xuICAgICAgZmxvYXQgZGlzdCA9IHNxcnQoZG90KHV2LCB1dikpO1xuICAgICAgcmV0dXJuICBzbW9vdGhzdGVwKGRpc2NfcmFkaXVzK2JvcmRlcl9zaXplLCBkaXNjX3JhZGl1cy1ib3JkZXJfc2l6ZSwgIGRpc3QpO1xuICAgIH1cblxuICAgIGZsb2F0IHdhdmUodmVjMiB1dil7XG4gICAgICAgIGZsb2F0IGR4ID0gMS4gLSB1di54OyAgIFxuICAgICAgICBmbG9hdCBkeSA9IDEuIC11di55O1xuICAgICAgICBmbG9hdCBmcmVxID0gc3FydChkeCpkeCArIGR5KmR5KTtcbiAgICAgICAgZmxvYXQgYW5nbGUgPSBmcmVxKjEwLit1VGltZTtcbiAgICAgICAgcmV0dXJuIHNpbihhbmdsZSkqdUFtcDtcbiAgICB9XG4gICBcblxuICAgIHZvaWQgbWFpbigpICB7XG4gICAgICAgIGZsb2F0IGMgPSBjaXJjbGUodlV2LCB1TW91c2UsIHVSYWRpdXMsIDAuMSApO1xuICAgICAgICBmbG9hdCB3YXZlID0gKDEuLWMpICogd2F2ZSh2VXYpO1xuICAgICAgICB2ZWMyIG1vZF91diA9IHdhdmUrKHZVdik7XG4gICAgICAgIHZlYzQgaW5wdXRDb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgbW9kX3V2KTtcbiAgICAgICAgdmVjNCBjb2xvciA9IHZlYzQoaW5wdXRDb2xvcik7XG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xuICAgIH1gLFxuICAgIH07XG4gICAgY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIocmVuZGVyZXIpO1xuICAgIGNvbnN0IHJlbmRlclBhc3MgPSBuZXcgUmVuZGVyUGFzcyhzY2VuZSwgY2FtZXJhKTtcbiAgICBjb21wb3Nlci5hZGRQYXNzKHJlbmRlclBhc3MpO1xuICAgIGN1c3RvbVBhc3MgPSBuZXcgU2hhZGVyUGFzcyhwb3N0RWZmZWN0KTtcbiAgICBjdXN0b21QYXNzLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcbiAgICBjb21wb3Nlci5hZGRQYXNzKGN1c3RvbVBhc3MpO1xuXG4gICAgLy9HVUkgU1RVRkYgU08gVSBDQU4gRURJVFxuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICByYWRpdXM6IDAuMSxcbiAgICAgIHRleHRGaWVsZDogXCJUaGlzIGlzIGEgcGxhY2Vob2xkZXIgXFxuIHRleHRcIixcbiAgICAgIGludGVuc2l0eTogMC4wMixcbiAgICB9O1xuXG4gICAgdmFyIGd1aSA9IG5ldyBkYXQuR1VJKCk7XG5cbiAgICB2YXIgZm9sZGVyID0gZ3VpLmFkZEZvbGRlcihcIlNoYWRlciBWYWx1ZXNcIik7XG4gICAgZm9sZGVyXG4gICAgICAuYWRkKHBhcmFtcywgXCJyYWRpdXNcIiwgMCwgMC41KVxuICAgICAgLnN0ZXAoMC4wMDEpXG4gICAgICAub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGN1c3RvbVBhc3MudW5pZm9ybXMudVJhZGl1cy52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgZm9sZGVyXG4gICAgICAuYWRkKHBhcmFtcywgXCJpbnRlbnNpdHlcIiwgMCwgMC4xKVxuICAgICAgLnN0ZXAoMC4wMDEpXG4gICAgICAub25DaGFuZ2UoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGN1c3RvbVBhc3MudW5pZm9ybXMudUFtcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgZm9sZGVyLmFkZChwYXJhbXMsIFwidGV4dEZpZWxkXCIpLm9uRmluaXNoQ2hhbmdlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgbGFiZWxUZXh0dXJlQ3R4LmNsZWFyUmVjdChcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbGFiZWxUZXh0dXJlQ2FudmFzLndpZHRoLFxuICAgICAgICBsYWJlbFRleHR1cmVDYW52YXMuaGVpZ2h0XG4gICAgICApO1xuICAgICAgbGFiZWxHZW9tZXRyeS53aWR0aCA9IGxhYmVsTWVzaFNpemU7XG5cbiAgICAgIGxhYmVsR2VvbWV0cnkuaGVpZ2h0ID0gbGFiZWxNZXNoU2l6ZTtcbiAgICAgIGFkZFRleHQobGFiZWxUZXh0dXJlQ3R4LCBsYWJlbFRleHR1cmVDYW52YXMsIGZvbnRTaXplLCB2YWx1ZSk7XG5cbiAgICAgIGxhYmVsTWF0ZXJpYWwubWFwID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUobGFiZWxUZXh0dXJlQ2FudmFzKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgIHVNb3VzZS54ID0gZS5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB1TW91c2UueSA9IDEgLSBlLmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUpO1xuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICBjb21wb3Nlci5yZW5kZXIoKTtcbiAgICAgIGlmIChjdXN0b21QYXNzKSB7XG4gICAgICAgIGN1c3RvbVBhc3MudW5pZm9ybXMudVRpbWUudmFsdWUgKz0gMC4wMTtcbiAgICAgICAgY3VzdG9tUGFzcy51bmlmb3Jtcy51TW91c2UudmFsdWUgPSB1TW91c2U7XG4gICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGUoKTtcblxuICAgIGZ1bmN0aW9uIGFkZFRleHQoY29udGV4dCwgY2FudmFzLCBzaXplLCBzdHIpIHtcbiAgICAgIHZhciBsaW5lcyA9IHN0ci5zcGxpdChcIlxcblwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGxpbmVzKTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcbiAgICAgICAgICBsaW5lc1tqXSxcbiAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyA0ICsgaiAqIHNpemVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5Nb3VudCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gPGRpdiBpZD1cInRocmVlXCI+PC9kaXY+O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUSFJFRSIsIkVmZmVjdENvbXBvc2VyIiwiUmVuZGVyUGFzcyIsIlNoYWRlclBhc3MiLCJkYXQiLCJXYXJwIiwib25GaXJzdE1vdW50Iiwib25Nb3VzZU1vdmUiLCJlIiwidU1vdXNlIiwieCIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwieSIsImNsaWVudFkiLCJpbm5lckhlaWdodCIsIm9uV2luZG93UmVzaXplIiwiY2FtZXJhIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsInJlbmRlcmVyIiwic2V0U2l6ZSIsImFkZFRleHQiLCJjb250ZXh0IiwiY2FudmFzIiwic2l6ZSIsInN0ciIsImxpbmVzIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiaiIsImxlbmd0aCIsImZpbGxUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJzY2VuZSIsImNvbXBvc2VyIiwicGVyc3BlY3RpdmUiLCJjdXN0b21QYXNzIiwiYmxvb21QYXNzIiwib2Zmc2V0RmFjdG9yWCIsIm9mZnNldEZhY3RvclkiLCJWZWN0b3IyIiwiZm92IiwiTWF0aCIsImF0YW4iLCJQSSIsIldlYkdMUmVuZGVyZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInNldCIsImxvb2tBdCIsIlZlY3RvcjMiLCJTY2VuZSIsImJhY2tncm91bmQiLCJDb2xvciIsIkxBQkVMX1RFWFQiLCJsYWJlbE1lc2hTaXplIiwibGFiZWxHZW9tZXRyeSIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJsYWJlbFRleHR1cmVDYW52YXMiLCJjcmVhdGVFbGVtZW50IiwibGFiZWxUZXh0dXJlQ3R4IiwiZ2V0Q29udGV4dCIsInRleHR1cmVTaXplIiwibWluIiwiY2FwYWJpbGl0aWVzIiwibWF4VGV4dHVyZVNpemUiLCJyZWxhdGl2ZUZvbnRTaXplIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZm9udCIsInRleHRXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGhEZWx0YSIsImZvbnRTaXplIiwiZmlsbFN0eWxlIiwibGFiZWxNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwiQ2FudmFzVGV4dHVyZSIsInRyYW5zcGFyZW50IiwibGFiZWxNZXNoIiwiTWVzaCIsImFkZCIsInBvc3RFZmZlY3QiLCJ1bmlmb3JtcyIsInREaWZmdXNlIiwidmFsdWUiLCJ1VGltZSIsInVBbXAiLCJyZXNvbHV0aW9uIiwidVJhZGl1cyIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwicmVuZGVyUGFzcyIsImFkZFBhc3MiLCJyZW5kZXJUb1NjcmVlbiIsInBhcmFtcyIsInJhZGl1cyIsInRleHRGaWVsZCIsImludGVuc2l0eSIsImd1aSIsIkdVSSIsImZvbGRlciIsImFkZEZvbGRlciIsInN0ZXAiLCJvbkNoYW5nZSIsIm9uRmluaXNoQ2hhbmdlIiwiY2xlYXJSZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJ1bk1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Warp.jsx\n"));

/***/ })

});