function changeImage() {
  var image = document.getElementById('bulb');
  if (image.src.match("lightoff")) {
    image.src = "lighton.png";
  } else {
    image.src = "lightoff.png";
  }
}

