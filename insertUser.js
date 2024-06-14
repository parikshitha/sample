const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const uri = 'mongodb://localhost:27017/mydatabase'; // Update with your MongoDB URI
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const users = database.collection('users');

    const hashedPassword = await bcrypt.hash('password123', 10);

    const user = {
      username: 'testuser',
      password: hashedPassword,
    };

    await users.insertOne(user);
    console.log('User inserted');
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
