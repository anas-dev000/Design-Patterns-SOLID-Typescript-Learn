import { PaymentFactory } from "./PaymentFactory";

function main() {
  const visaPayment = PaymentFactory.createPayment("visa");
  visaPayment.pay(1000);

  const paypalPayment = PaymentFactory.createPayment("paypal");
  paypalPayment.pay(2500);

  try {
    const cashPayment = PaymentFactory.createPayment("cash");
    cashPayment.pay(500);
  } catch (err) {
    console.error("❌ Error:", (err as Error).message);
  }
}

main();
