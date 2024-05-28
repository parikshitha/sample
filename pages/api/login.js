import { compare } from 'bcrypt';
import { getUserByUsername } from '../../lib/db';
import { setLoginSession } from '../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { username, password } = req.body;

  const user = await getUserByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const isValid = await compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  await setLoginSession(res, user);

  res.status(200).end();
}
