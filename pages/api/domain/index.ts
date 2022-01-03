import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { domain, publicKey } = req.body.params;
    if (!domain || !publicKey) {
      res.status(400).json({error: "Missing required parameters domain or wallet address."});
      return;
    } else {
      // prisma create domain
      res.status(200).json({domain: domain, publicKey: publicKey});
    }
  } else {
    res.status(405).json({error: "Unsupported method: " + req.method});
  }
}

export default handler;