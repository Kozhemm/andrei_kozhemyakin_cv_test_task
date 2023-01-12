class Slider {
  constructor(
    selectorSlider = '.slider',
    stylesForSlider = ['25rem', '30rem']
  ) {
    this.listImgs = document.querySelectorAll('.favorite-photos__photo');
    this.placeForFutureImg = document.querySelector('.future-img');
    this.counter = 0;
    this.images = [];
    this.pathToImages = [
      './images/forest.jpg',
      './images/space.jpeg',
      './images/ocean.jpg',
    ];
    this.countImages = this.pathToImages.length;
    this.sliderElement = document.querySelector(selectorSlider);

    this.sliderElement.style.width = stylesForSlider[0];
    this.sliderElement.style.height = stylesForSlider[1];

    for (let img_ = 0; img_ < this.countImages; img_++) {
      this.images.push(document.createElement('img'));
      this.images[img_].src = this.pathToImages[img_];
      this.images[
        img_
      ].style = `width:${stylesForSlider[0]}; height:${stylesForSlider[1]};`;
    }
    for (let elemSlider = 0; elemSlider < this.countImages; elemSlider++) {
      this.listImgs[elemSlider].addEventListener('click', () => {
        while (this.placeForFutureImg.firstChild) {
          this.placeForFutureImg.removeChild(this.placeForFutureImg.lastChild);
        }
        this.placeForFutureImg.appendChild(this.images[elemSlider]);
      });
    }
  }
}
