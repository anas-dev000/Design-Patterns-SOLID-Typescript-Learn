export class User {
  constructor(public name: string, public email: string) {}

  saveToDatabase() {
    console.log("💾 Saving user to database...");
  }

  sendWelcomeEmail() {
    console.log(`📧 Sending welcome email to ${this.email}`);
  }
}

const user = new User("Anas", "anas@example.com");
user.saveToDatabase();
user.sendWelcomeEmail();
