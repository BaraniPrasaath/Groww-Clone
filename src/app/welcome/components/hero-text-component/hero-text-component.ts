import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  image: string;
  name: string;
  text: string;
  top: string;
  left: string;
  scale: number;
}

@Component({
  selector: 'app-hero-text-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-text-component.html',
  styleUrl: './hero-text-component.css',
})
export class HeroTextComponent implements OnInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  scrollProgress = 0;
  testimonials: Testimonial[] = [];

  images = [
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123442/Rahul-Gupta-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123442/Sangeeta-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123826/Anoop-Singh-150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123824/Ankit-Puri-300x297.png',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123442/shivam-kushwaha-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2017/01/18123901/abhinav-e1486979446250.png',
    'https://wp-asset.groww.in/wp-content/uploads/2017/02/18123859/puneet-gupta-groww-150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123443/Gopalkrishnan-e1518785171373-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123825/Vasumati--150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2015/03/18123901/sahil-bansal-2-150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123441/uttam-raj-e1518782629637.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123443/amit-sharma-e1518785489450-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123442/palak-gupta-e1518783525196-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123826/Roopa-FB.jpg',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123832/ravali-e1494058091114.png',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123825/Mohit-Daga-150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123832/ajinkya-150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2017/02/18123859/richa-singh-150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123442/Rahul-Gupta-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123442/Sangeeta-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123826/Anoop-Singh-150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123824/Ankit-Puri-300x297.png',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123442/shivam-kushwaha-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2017/05/18123825/Vasumati--150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2015/03/18123901/sahil-bansal-2-150x150.png',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123441/uttam-raj-e1518782629637.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123443/amit-sharma-e1518785489450-150x150.jpeg',
    'https://wp-asset.groww.in/wp-content/uploads/2018/02/18123442/palak-gupta-e1518783525196-150x150.jpeg',
  ];

  ngOnInit() {
    this.generateTestimonials();
  }

  generateTestimonials() {
    const names = [
      'Rahul',
      'Sangeeta',
      'Anoop',
      'Ankit',
      'Shivam',
      'Abhinav',
      'Puneet',
      'Gopal',
      'Vasumati',
      'Sahil',
      'Uttam',
      'Amit',
      'Palak',
      'Roopa',
      'Ravali',
      'Mohit',
      'Ajinkya',
      'Richa',
      'Rahul',
      'Sangeeta',
      'Anoop',
      'Ankit',
      'Shivam',
      'Vasumati',
      'Sahil',
      'Uttam',
      'Amit',
      'Palak',
    ];

    const textSnippets = [
      'Very happy to invest here.',
      'Smooth and fast process.',
      'A very informative portal.',
      'Helped me make better decisions.',
      'Trusted platform.',
      'Zero account opening fees.',
      'Excellent support.',
      'Highly recommended!',
      'Clean user interface.',
    ];

    const fixedLayouts = [
      { top: '2%', left: '-2%', scale: 0.9 },
      { top: '10%', left: '32%', scale: 0.8 },
      { top: '5%', left: '52%', scale: 1.0 },
      { top: '5%', left: '78%', scale: 0.85 },
      { top: '35%', left: '-5%', scale: 0.95 },
      { top: '42%', left: '82%', scale: 0.75 },
      { top: '68%', left: '2%', scale: 0.8 },
      { top: '82%', left: '25%', scale: 0.9 },
      { top: '75%', left: '55%', scale: 1.05 },
      { top: '85%', left: '80%', scale: 0.85 },
      { top: '-5%', left: '35%', scale: 0.7 },
      { top: '92%', left: '8%', scale: 0.9 },
      { top: '98%', left: '42%', scale: 0.8 },
      { top: '90%', left: '88%', scale: 0.95 },
      { top: '55%', left: '88%', scale: 0.85 },
      { top: '52%', left: '-8%', scale: 0.9 },
      { top: '-10%', left: '15%', scale: 0.8 },
      { top: '-8%', left: '68%', scale: 0.95 },
      { top: '15%', left: '15%', scale: 0.9 },
      { top: '50%', left: '50%', scale: 0.8 },
      { top: '20%', left: '75%', scale: 1.0 },
      { top: '45%', left: '5%', scale: 0.85 },
      { top: '52%', left: '28%', scale: 0.95 },
      { top: '65%', left: '60%', scale: 1.05 },
      { top: '72%', left: '82%', scale: 0.85 },
      { top: '50%', left: '85%', scale: 0.7 },
      { top: '75%', left: '18%', scale: 0.9 },
      { top: '68%', left: '38%', scale: 0.8 },
    ];

    this.testimonials = this.images.map((img, i) => ({
      image: img,
      name: names[i],
      text: textSnippets[i % textSnippets.length],
      top: fixedLayouts[i].top,
      left: fixedLayouts[i].left,
      scale: fixedLayouts[i].scale,
    }));
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.scrollContainer) return;

    const element = this.scrollContainer.nativeElement;
    const rect = element.getBoundingClientRect();
    const scrollableDistance = element.clientHeight - window.innerHeight;
    const scrolled = -rect.top;

    if (scrolled <= 0) {
      this.scrollProgress = 0;
    } else if (scrolled >= scrollableDistance) {
      this.scrollProgress = 1;
    } else {
      this.scrollProgress = scrolled / scrollableDistance;
    }
  }

  getOpacity(startRange: number, endRange: number, invert = false): number {
    if (this.scrollProgress < startRange) return invert ? 1 : 0;
    if (this.scrollProgress > endRange) return invert ? 0 : 1;

    const progress = (this.scrollProgress - startRange) / (endRange - startRange);
    return invert ? 1 - progress : progress;
  }

  getScale(startScale: number, endScale: number, startRange: number, endRange: number): number {
    if (this.scrollProgress < startRange) return startScale;
    if (this.scrollProgress > endRange) return endScale;

    const progress = (this.scrollProgress - startRange) / (endRange - startRange);
    return startScale + (endScale - startScale) * progress;
  }
}
