export class Payment {
    creditCardNumber: string;
    cardholder: string;
    expirationDate: Date; //fututre-only in tagul de input
    securityCode: String; //trebuie sa fac o functie , max 3
    amount: number; // <input type="number" min="0">
  id: string;
}
