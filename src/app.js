/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Raul from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let subject = Math.floor(Math.random() * who.length);
  let ver = Math.floor(Math.random() * action.length);
  let noun = Math.floor(Math.random() * what.length);
  let conjunction = Math.floor(Math.random() * when.length);

  return (
    who[subject] +
    " " +
    action[ver] +
    " " +
    what[noun] +
    " " +
    when[conjunction]
  );
};
