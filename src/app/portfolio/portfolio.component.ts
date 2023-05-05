import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {

  slides = ['Slide 1', 'Slide 2', 'Slide 3'];
  currentIndex = 0;

  slideNext() {
    this.currentIndex++;
    if (this.currentIndex >= this.slides.length) {
      this.currentIndex = 0;
    }
    this.slide();
  }

  slidePrevious() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.slides.length - 1;
    }
    this.slide();
  }

  slide() {
    const slider = document.querySelector<HTMLElement>('.slider');
    if (slider) {
      slider.style.transform = `translateX(-${this.currentIndex * 100 / this.slides.length}%)`;
    }
  }

}
