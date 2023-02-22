import { NextApiResponse } from 'next';

export const methodNotAllowed = (res: NextApiResponse) => {
  res.status(405).send('Method Not Allowed');
};
