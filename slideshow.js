let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





function handleSubmit(event) {
 event.preventDefault();
}


function handleSubmit(event) {
 event.preventDefault();

 let name = document.getElementById("name").value;
 let message = document.getElementById("message").value;

 alert("Thank you, " + name + ". Your message was received.");
}


function handleSubmit(event) {
 event.preventDefault();

 let name = document.getElementById("name").value;

 document.getElementById("response").innerText =
   "Thank you, " + name + ". We will respond soon.";
}

function handleSubmit(event) {
 event.preventDefault();

 let name = document.getElementById("name").value;
 let message = document.getElementById("message").value;

 if (name === "" || message === "") {
   document.getElementById("response").innerText =
     "Please fill out all fields.";
 } else {
   document.getElementById("response").innerText =
     "Thank you, " + name + ". We will respond soon.";
 }
}
