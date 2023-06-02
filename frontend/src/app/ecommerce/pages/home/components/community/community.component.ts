import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

interface Travellers {
  id: number;
  name: string;
  rating: number;
  img: string;
  description: string;
  date: string;
  ubication: string;
}

const animation = { duration: 25000, easing: (t: any) => t };

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent implements AfterViewInit, OnDestroy {
  @Input() travellers!: Travellers[];
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider!: KeenSliderInstance;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      renderMode: 'precision',
      drag: false,
      breakpoints: {
        '(min-width: 600px)': {
          slides: { perView: 2, spacing: 5 },
        },
        '(min-width: 1100px)': {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: {
        perView: 4,
        spacing: 15,
      },
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
