// client-side js
// run by the browser each time your view template is loaded
let tsinput = document.querySelector ('#ts-input');
let tsurl = document.querySelector ('#ts-url');
let result = document.querySelector ('#result');
let base = 'https://checker-bike-1.glitch.me/';
tsinput.addEventListener ('change', (e) => {
  tsurl.innerHTML = base + tsinput.value;
  tsurl.href = base + tsinput.value;
});
tsinput.addEventListener ('keyup', (e) => {
  tsurl.innerHTML = base + tsinput.value;
  tsurl.href = base + tsinput.value;
});
let ts = () => {
  fetch (base + tsinput.value)
    .then ((res) => {return res.text ()})
    .then ((txt) => {result.innerHTML = txt});
}
document.querySelector ('#submit').addEventListener ('click', () => {
  if (tsinput.value.trim () === '') return;
  ts ();
});