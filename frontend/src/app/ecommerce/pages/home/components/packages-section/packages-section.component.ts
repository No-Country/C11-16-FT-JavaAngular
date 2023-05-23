import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

interface PackageArray {
  id: number;
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-packages-section',
  templateUrl: './packages-section.component.html',
  styleUrls: ['./packages-section.component.css'],
})
export class PackagesSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  @Input() package!: PackageArray[];

  slider!: KeenSliderInstance;

  ngAfterViewInit() {
    this.slider = new KeenSlider(
      this.sliderRef.nativeElement,
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout: any;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 5000);
          }
          slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener('mouseout', () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on('dragStarted', clearNextTimeout);
          slider.on('animationEnded', nextTimeout);
          slider.on('updated', nextTimeout);
        },
      ]
    );
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
