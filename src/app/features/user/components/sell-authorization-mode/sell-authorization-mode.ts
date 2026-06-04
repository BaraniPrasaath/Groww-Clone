import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Faq {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-sell-authorization-mode',
  imports: [CommonModule],
  templateUrl: './sell-authorization-mode.html',
  styleUrl: './sell-authorization-mode.css',
})
export class SellAuthorizationMode {
  faqs: Faq[] = [
    {
      question: 'How does T-PIN work?',
      answer:
        "T-PIN is a verification step on CDSL to authorise the sale of your holdings. You'll be redirected to verify whenever you place a sell order.",
      isOpen: false,
    },
    {
      question: 'Is there a faster way to execute sell orders?',
      answer: 'Yes. Enable DDPI to authorise once and place sell orders with a single tap.',
      isOpen: false,
    },
    {
      question: 'How do I opt for DDPI?',
      answer: 'Use the Switch to DDPI option below to begin the quick setup.',
      isOpen: false,
    },
    {
      question: 'Do I have to pay ₹100 + GST everytime?',
      answer: 'No. DDPI activation is a one-time fee of ₹118 (₹100 + ₹18 GST).',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
