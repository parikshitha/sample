import { logoutSession } from '../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  logoutSession(res);
  res.status(200).end();
}
