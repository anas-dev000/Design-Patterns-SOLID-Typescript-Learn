class Database {
  private static instance: Database;
  private connection: {
    host: string;
    user: string;
    password: string;
    database: string;
  };

  private constructor() {
    this.connection = {
      host: "localhost",
      user: "root",
      password: "",
      database: "test_db",
    };
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  getConnection() {
    return this.connection;
  }
}

const db1 = Database.getInstance().getConnection();
const db2 = Database.getInstance().getConnection();

console.log(
  "Are Database connection 1 and Database connection 2 the same?",
  db1 === db2
);
