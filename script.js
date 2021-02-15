"use strict";

window.addEventListener("DOMContentLoaded", init);
// init();
const colorPicker = document.querySelector("#colorPicker");
const boxColor = document.querySelector("#boxColor");
const HEX = document.querySelector("#hex");
const RGB = document.querySelector("#rgb");
const HSL = document.querySelector("#hsl");


function init() {
  getHexInput();
  colorPicker.addEventListener("input", getHexInput);
}

function getHexInput() {
  // document.querySelector("#colorPicker").addEventListener("input", showBoxColor);
  const valueHex = event.target.value;
  showBoxColor(valueHex);
  showHex(valueHex);
  hexToRgb(valueHex);
}


function showBoxColor(valueHex) {
  boxColor.style.backgroundColor = valueHex;

}

// function getHexValue() {}

function showHex(valueHex) {
  HEX.textContent = valueHex;
}

function hexToRgb(valueHex) {
  // const hexColor = "#bada55";
  // function colorConvert(hexColor) {
    const r = valueHex.substring(1, 3);
    const g = valueHex.substring(3, 5);
    const b = valueHex.substring(5, 7);
  
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
  
    console.log(`RGB: ${r}, ${g}, ${b}`);

    // colorConvert(hexColor);
    showRgb(r, g, b);
  }
  
function showRgb(r, g, b) {
  RGB.textContent = `${r}, ${g}, ${b}`;
}

function getHslValue(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
   
  let h, s, l;
   
  const min = Math.min(r,g,b);
  const max = Math.max(r,g,b);
    
  if( max === min ) {
       h = 0;
     } else
     if (max === r) {
       h = 60 * (0 + (g - b) / (max - min) );
     } else
     if (max === g) {
       h = 60 * (2 + (b - r) / (max - min) );
     } else
     if (max === b) {
       h = 60 * (4 + (r - g) / (max - min) );
  }
    
  if (h < 0) {h = h + 360; }
    
  l = (min + max) / 2;
    
  if (max === 0 || min === 1 ) {
       s = 0;
     } else {
       s = (max - l) / ( Math.min(l,1-l));
     }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
   
  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  showHsl(h, s, l);
}

function showHsl(h, s, l) {
  HSL.textContent = `HSL: ${h}, ${s}%, ${l}%`;
}

