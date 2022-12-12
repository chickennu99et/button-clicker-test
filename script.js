function l() {
  var clicks = Number(document.getElementById("clicks").innerText);
  clicks = clicks + 1;
  document.getElementById("clicks").innerText = clicks;
  document.getElementById("lol").innerText = clicks;
}
