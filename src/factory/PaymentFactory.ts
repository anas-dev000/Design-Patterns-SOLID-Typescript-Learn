import { Payment } from "./Payment";
import { VisaPayment } from "./VisaPayment";
import { PaypalPayment } from "./PaypalPayment";

export class PaymentFactory {
  static createPayment(method: string): Payment {
    switch (method.toLowerCase()) {
      case "visa":
        return new VisaPayment();
      case "paypal":
        return new PaypalPayment();
      default:
        throw new Error("Unsupported payment method");
    }
  }
}
