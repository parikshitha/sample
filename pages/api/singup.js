import { hash } from 'bcrypt';
import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { username, password } = req.body;

  const db = await connectToDatabase();
  const collection = db.collection('users');

  const hashedPassword = await hash(password, 10);
  await collection.insertOne({ username, password: hashedPassword });

  res.status(201).end();
}
