;(function() {

  'use strict';

  var doc,
      sliderBtns,
      images,
      mainImg;

  doc = document;

  sliderBtns = doc.querySelectorAll('.slider-buttons .slider-button');
  mainImg = doc.querySelector('#slider');

  images = ['slider-bg0', 'black-sea', 'purple-blacksea', 'black-sea2', 'sea-sunset2']

  for (var i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].addEventListener('click', changeBg);
  }

  function changeBg(e) {
    e.preventDefault();
    var count = this.dataset.num
    var mainImgOpacity = 1;

    for (var j = 0; j < sliderBtns.length; j++) {
      sliderBtns[j].classList.remove('current');
    }
    this.classList.add('current');

    var mainImgOpacityDown = setInterval(function() {
      mainImgOpacity -= .1;

      mainImg.style.opacity = mainImgOpacity;

      if (mainImg.style.opacity <= .5) {
        clearInterval(mainImgOpacityDown);

        var mainImgOpacityUp = setInterval(function() {
          mainImgOpacity += .1;

          mainImg.style.opacity = mainImgOpacity;

          if (mainImg.style.opacity >= 1) {
            clearInterval(mainImgOpacityUp);
          }
        }, 60)

        mainImg.style.background = 'url(img/' + images[count] + '.jpg) no-repeat center';

        mainImg.style.backgroundSize = 'cover';
      }

    }, 60)
  }

})();