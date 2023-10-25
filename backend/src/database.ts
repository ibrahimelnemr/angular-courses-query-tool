import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const env = process.env.ENV as string;

const host = process.env.POSTGRES_HOST1 as string; 
const db = process.env.POSTGRES_DB1 as string;
const user = process.env.POSTGRES_USER1 as string; 
const password = process.env.POSTGRES_PASSWORD1 as string;

console.log(host);
console.log(db);
console.log(user);
console.log(password);

const client = new Pool({
  host: host,
  database: db,
  user: user,
  password: password,
});

export default client;
