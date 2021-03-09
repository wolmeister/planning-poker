import type { NextApiRequest, NextApiResponse } from 'next';

export type ApiRoute = {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  handle(req: NextApiRequest, res: NextApiResponse): Promise<void>;
};
