let slideIndex = [0, 0, 0, 0];
window.onload = () => {
  for (let i = 0; i < slideIndex.length; i++)
    showSlides(slideIndex[i], i);
}

function plusSlides(n, idx) {
  showSlides(slideIndex[idx] += n, idx);
}

function showSlides(n, idx) {
  let i;
  let slides = document.getElementsByClassName("image-slide" + idx);
  let captionText = document.getElementById("caption" + idx);

  if (n >= slides.length)
    slideIndex[idx] = 0

  if (n < 0)
    slideIndex[idx] = slides.length - 1

  for (i = 0; i < slides.length; i++)
    slides[i].style.display = "none";

  slides[slideIndex[idx]].style.display = "flex";
  captionText.innerHTML = slides[slideIndex[idx]].children[0].alt;
}