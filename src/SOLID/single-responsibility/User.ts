export class User {
  constructor(public name: string, public email: string) {}
}

export class EmailService {
  sendWelcomeEmail(user: User) {
    console.log(`📧 Sending welcome email to ${user.email}`);
  }
}

export class UserRepository {
  save(user: User) {
    console.log("💾 Saving user to database...");
  }
}

function main() {
  const user = new User("Anas", "anas@example.com");

  const userRepository = new UserRepository();
  userRepository.save(user);

  const emailService = new EmailService();
  emailService.sendWelcomeEmail(user);
}

main();
