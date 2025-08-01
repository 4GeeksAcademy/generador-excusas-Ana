import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let who = [
    'The dog',
    'My grandma',
    'The mailman',
    'My bird',
    'An alien',
    'My goldfish',
    'My neighbor’s cat',
    'A raccoon',
    'My imaginary friend',
    'The pizza delivery guy'
  ];

  let action = [
    'ate',
    'peed',
    'crushed',
    'broke',
    'set fire to',
    'hid',
    'stole',
    'chewed',
    'deleted',
    'launched into space'
  ];

  let what = [
    'my homework',
    'my phone',
    'the car',
    'my backpack',
    'my shoes',
    'the TV remote',
    'my lunch',
    'my toothbrush',
    'my gaming console',
    'my favorite socks'
  ];

  let when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying',
    'right before the test started',
    'when I turned my back for one second',
    'while I was in the shower',
    'during a power outage',
    'when aliens invaded the neighborhood'
  ];

  let frase = "";

  frase += who[Math.floor(Math.random() * who.length)]
  frase += " " + action[Math.floor(Math.random() * action.length)]
  frase += " " + what[Math.floor(Math.random() * what.length)]
  frase += " " + when[Math.floor(Math.random() * when.length)] + "."

  let parrafo = document.getElementById("excuse");
  parrafo.innerHTML = "<p> " + frase + " </p>";
};
