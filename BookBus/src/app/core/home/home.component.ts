import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentImageIndex = 0;
  images: NodeList = document.querySelectorAll('#image-container img');

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  nextImage() {
    (this.images[this.currentImageIndex] as HTMLElement).classList.remove('active');
    this.currentImageIndex = this.currentImageIndex < this.images.length - 1 ? this.currentImageIndex + 1 : 0;
    (this.images[this.currentImageIndex] as HTMLElement).classList.add('active');
  }

}
