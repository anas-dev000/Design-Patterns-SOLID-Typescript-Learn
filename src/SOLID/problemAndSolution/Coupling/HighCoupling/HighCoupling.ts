import { MySQLDatabase } from "../MySQLDatabase";

class UserService {
  private db: MySQLDatabase;

  constructor() {
    this.db = new MySQLDatabase();
  }

  getUsers() {
    this.db.connect();
    console.log("Fetching users...");
  }
}

const user = new UserService();
user.getUsers();
