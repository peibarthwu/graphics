import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import * as dat from "dat.gui";

export default function Warp() {
  useEffect(function onFirstMount() {
    let renderer, scene, camera, composer;
    let perspective = 10;
    let customPass, bloomPass;

    const offsetFactorX = window.innerWidth / 2;
    const offsetFactorY = window.innerHeight / 2;

    var uMouse = new THREE.Vector2(0, 0);

    const fov =
      (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three").appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
      fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, perspective);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    let LABEL_TEXT = "YOUR TEXT HERE \n MOUSE OVER ME ";
    const labelMeshSize = innerWidth > innerHeight ? innerHeight : innerWidth;
    const labelGeometry = new THREE.PlaneBufferGeometry(
      labelMeshSize,
      labelMeshSize
    );

    // Canvas and corresponding context2d to be used for drawing the text
    const labelTextureCanvas = document.createElement("canvas");
    const labelTextureCtx = labelTextureCanvas.getContext("2d");
    // Dynamic texture size based on the device capabilities
    const textureSize = Math.min(renderer.capabilities.maxTextureSize, 2048);
    const relativeFontSize = 20;
    console.log(textureSize);
    // Size our text canvas
    labelTextureCanvas.width = textureSize;
    labelTextureCanvas.height = textureSize;
    labelTextureCtx.textAlign = "center";
    labelTextureCtx.textBaseline = "middle";
    // Dynamic font size based on the texture size (based on the device capabilities)
    labelTextureCtx.font = `${relativeFontSize}px Helvetica`;
    const textWidth = labelTextureCtx.measureText(LABEL_TEXT).width;
    const widthDelta = labelTextureCanvas.width / textWidth;
    const fontSize = relativeFontSize * widthDelta;
    labelTextureCtx.font = `${fontSize}px Helvetica`;
    labelTextureCtx.fillStyle = "white";
    addText(labelTextureCtx, labelTextureCanvas, fontSize, LABEL_TEXT);
    // labelTextureCtx.fillText(LABEL_TEXT, labelTextureCanvas.width / 2, labelTextureCanvas.height / 2)

    const labelMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.CanvasTexture(labelTextureCanvas),
      transparent: true,
    });
    // Create a plane mesh, add it to the scene
    const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial);
    scene.add(labelMesh);

    var postEffect = {
      uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0 },
        uAmp: { value: 0.02 },
        resolution: {
          value: new THREE.Vector2(1, window.innerHeight / window.innerWidth),
        },
        uMouse: { value: new THREE.Vector2(-10, -10) },
        uRadius: { value: 0.2 },
      },
      vertexShader: `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );}`,
      fragmentShader: `
    
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    varying vec2 vUv;
    uniform vec2 uMouse;
    uniform float uTime;
    uniform float uAmp;

    uniform float uRadius;
    
    float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
      uv -= disc_center;
      uv*=resolution;
      float dist = sqrt(dot(uv, uv));
      return  smoothstep(disc_radius+border_size, disc_radius-border_size,  dist);
    }

    float wave(vec2 uv){
        float dx = 1. - uv.x;   
        float dy = 1. -uv.y;
        float freq = sqrt(dx*dx + dy*dy);
        float angle = freq*10.+uTime;
        return sin(angle)*uAmp;
    }
   

    void main()  {
        float c = circle(vUv, uMouse, uRadius, 0.1 );
        float wave = (1.-c) * wave(vUv);
        vec2 mod_uv = wave+(vUv);
        vec4 inputColor = texture2D(tDiffuse, mod_uv);
        vec4 color = vec4(inputColor);
        gl_FragColor = color;
    }`,
    };
    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    customPass = new ShaderPass(postEffect);
    customPass.renderToScreen = true;
    composer.addPass(customPass);

    //GUI STUFF SO U CAN EDIT
    var params = {
      radius: 0.1,
      textField: "This is a placeholder \n text",
      intensity: 0.02,
    };

    var gui = new dat.GUI();

    var folder = gui.addFolder("Shader Values");
    folder
      .add(params, "radius", 0, 0.5)
      .step(0.001)
      .onChange(function (value) {
        customPass.uniforms.uRadius.value = value;
      });
    folder
      .add(params, "intensity", 0, 0.1)
      .step(0.001)
      .onChange(function (value) {
        customPass.uniforms.uAmp.value = value;
      });
    folder.add(params, "textField").onFinishChange(function (value) {
      labelTextureCtx.clearRect(
        0,
        0,
        labelTextureCanvas.width,
        labelTextureCanvas.height
      );
      labelGeometry.width = labelMeshSize;

      labelGeometry.height = labelMeshSize;
      addText(labelTextureCtx, labelTextureCanvas, fontSize, value);

      labelMaterial.map = new THREE.CanvasTexture(labelTextureCanvas);
    });

    document.addEventListener("mousemove", onMouseMove);
    function onMouseMove(e) {
      uMouse.x = e.clientX / window.innerWidth;
      uMouse.y = 1 - e.clientY / window.innerHeight;
    }

    window.addEventListener("resize", onWindowResize);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      composer.render();
      if (customPass) {
        customPass.uniforms.uTime.value += 0.01;
        customPass.uniforms.uMouse.value = uMouse;
      }
    }
    animate();

    function addText(context, canvas, size, str) {
      var lines = str.split("\n");
      console.log(lines);
      for (var j = 0; j < lines.length; j++) {
        context.fillText(
          lines[j],
          canvas.width / 2,
          canvas.height / 4 + j * size
        );
      }
    }

    return function unMount() {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onMouseMove);
    };
  });
  return <div id="three"></div>;
}
