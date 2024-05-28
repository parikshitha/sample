import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = 'nextjs-auth';
let db;

export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db(dbName);
  }
  return db;
}

export async function getUserByUsername(username) {
  const db = await connectToDatabase();
  const collection = db.collection('users');
  return collection.findOne({ username });
}
