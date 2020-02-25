function dataJson() {
    let request = new Request("./json_images.json");
    fetch(request)
        .then(function (data) {
            return data.json();
        }).then(function (res) {
            let slide = document.querySelector('.slide');
            for (i = 0; i < res.images.length; i++) {
                var div = document.createElement("div");
                div.className = "slide-images";
                div.id = i;
                slide.appendChild(div);
                let slideIndividual = document.getElementById(i);
                var img = document.createElement('img');
                img.src = res.images[i].image;
                slideIndividual.appendChild(img);
            }
            showSlides();
        });
}

dataJson();
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide-images");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}