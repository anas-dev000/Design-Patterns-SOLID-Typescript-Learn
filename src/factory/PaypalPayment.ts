import { Payment } from "./Payment";

export class PaypalPayment implements Payment {
  pay(amount: number): void {
    console.log(`💻 Processing PayPal payment of $${amount}`);
  }
}
