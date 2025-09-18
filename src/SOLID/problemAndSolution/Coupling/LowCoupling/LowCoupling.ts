import { Database } from "../Database";
import { MySQLDatabase } from "../MySQLDatabase";
import { MongoDatabase } from "../MongoDatabase";

export class UserService {
  constructor(private db: Database) {}

  getUsers() {
    this.db.connect();
    console.log("Fetching users...");
  }
}


const service1 = new UserService(new MySQLDatabase());
service1.getUsers();

const service2 = new UserService(new MongoDatabase());
service2.getUsers();
