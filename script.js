/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}


let cottages = document.getElementById('cottages');
let cafe = document.getElementById('cafe');
let image1 = document.getElementsByClassName('slider-image1');
let image2 = document.getElementsByClassName('slider-image2');
let image3 = document.getElementsByClassName('slider-image3');
let image4 = document.getElementsByClassName('slider-image4');
let image5 = document.getElementsByClassName('slider-image5');
let image6 = document.getElementsByClassName('slider-image6');
let image7 = document.getElementsByClassName('slider-image7');
let image8 = document.getElementsByClassName('slider-image8');


cottages.addEventListener('click', function() {
    cottages.classList.add('active-switch');
    cafe.classList.remove('active-switch');
    for (let i = 0; i < image1.length; i++) {
        image1[i].src = 'img/cot/img1.jpg';
    }
    for (let i = 0; i < image2.length; i++) {
        image2[i].src = 'img/cot/img2.jpg';
    }
    for (let i = 0; i < image3.length; i++) {
        image3[i].src = 'img/cot/img3.jpg';
    }
    for (let i = 0; i < image4.length; i++) {
        image4[i].src = 'img/cot/img4.jpg';
    }
    for (let i = 0; i < image5.length; i++) {
        image5[i].src = 'img/cot/img5.jpg';
    }
    for (let i = 0; i < image5.length; i++) {
        image6[i].src = 'img/cot/img6.jpg';
    }
    for (let i = 0; i < image5.length; i++) {
        image7[i].src = 'img/cot/img7.jpg';
    }
    for (let i = 0; i < image5.length; i++) {
        image8[i].src = 'img/cot/img8.jpg';
    }
});
cafe.addEventListener('click', function() {
    cafe.classList.add('active-switch');
    cottages.classList.remove('active-switch');
    for (let i = 0; i < image1.length; i++) {
        image1[i].src = 'img/caf/img1_auto_x2.jpg';
    }
    for (let i = 0; i < image2.length; i++) {
        image2[i].src = 'img/caf/img9.jpg';
    }
    for (let i = 0; i < image3.length; i++) {
        image3[i].src = 'img/caf/img8.jpg';
    }
    for (let i = 0; i < image4.length; i++) {
        image4[i].src = 'img/caf/img4.jpg';
    }
    for (let i = 0; i < image5.length; i++) {
        image5[i].src = 'img/caf/img5.jpg';
    }
    for (let i = 0; i < image5.length; i++) {
        image6[i].src = 'img/caf/img10.jpg';
    }
    for (let i = 0; i < image5.length; i++) {
        image7[i].src = 'img/caf/img11.jpg';
    }
    for (let i = 0; i < image5.length; i++) {
        image8[i].src = 'img/caf/img12.jpg';
    }
});
