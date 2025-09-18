import { Payment } from "./Payment";

export class VisaPayment implements Payment {
  pay(amount: number): void {
    console.log(`💳 Processing VISA payment of $${amount}`);
  }
}
