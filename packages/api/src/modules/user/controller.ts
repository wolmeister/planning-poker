import type { NextApiRequest, NextApiResponse } from 'next';

export async function addUser(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.send({
    name: 'TEST',
  });
}
