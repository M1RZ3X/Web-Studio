// Smooth Scrolling

$(document).ready(function () {
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
     if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 900, function () {

           window.location.hash = hash;
        });
     }
  });

  $(window).scroll(function () {
     $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 100) {
           $(this).addClass("slide");
        }
     });
  });
})

//   END Smooth Scrolling


// Selected Menu Class

const li = document.querySelectorAll(".links")
const sec = document.querySelectorAll("section")

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach(ltx => ltx.classList.remove("selected"));
  li[len].classList.add("selected")
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// END Selected Menu Class


// Modal Image Menu

// Image 1

var modal = document.getElementById("myModal1");

var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("exit")[5];

span.onclick = function () {
  modal.style.display = "none";
}
// Image 2
var modal = document.getElementById("myModal2");

var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Image 3
var modal = document.getElementById("myModal3");

var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Image 4
var modal = document.getElementById("myModal4");

var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption4");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Image 5

var modal = document.getElementById("myModal5");

var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption5");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Image 6
var modal = document.getElementById("myModal6");

var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img06");
var captionText = document.getElementById("caption6");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// END Modal Image Menu