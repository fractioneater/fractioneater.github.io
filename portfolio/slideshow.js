let slideIndex = [0, 0];
window.onload = () => {
  for (let i = 0; i < slideIndex.length; i++)
    showSlides(slideIndex[i], i);
}

function plusSlides(n, idx) {
  showSlides(slideIndex[idx] += n, idx);
}

function switchSlide(n, idx) {
  showSlides(slideIndex[idx] = n - 1, idx);
}

function showSlides(n, idx) {
  let i;
  let slides = document.getElementsByClassName("image-slide" + idx);
  let dots = document.getElementsByClassName("demo" + idx);
  let captionText = document.getElementById("caption" + idx);

  if (n >= slides.length)
    slideIndex[idx] = 0

  if (n < 0)
    slideIndex[idx] = slides.length - 1

  for (i = 0; i < slides.length; i++)
    slides[i].style.display = "none";

  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "");

  slides[slideIndex[idx]].style.display = "flex";
  dots[slideIndex[idx]].className += " active";
  captionText.innerHTML = dots[slideIndex[idx]].alt;
}