import { NextApiRequest, NextApiResponse } from "next";
import prisma from "utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { domain, publicKey } = req.body.params;
    if (!domain || !publicKey) {
      res.status(400).json({error: "Missing required parameters domain or wallet address."});
      return;
    } else {

      // check total count of domains and limit to only 9999 domains for now
      const domainCount = await prisma.domain.count({
        where: {
          publicKey,
        }
      });

      if (domainCount > 0) {
        res.status(400).json({error: "Wallet address already linked to a domain."});
        return;
      }
      const query_res = await prisma.domain.create({
        data: {
          name: domain,
          publicKey: publicKey,
          suffix: 'algo',
          expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        },
      });
      res.status(200).json(query_res);
    }
  } else {
    res.status(405).json({error: "Unsupported method: " + req.method});
  }
}

export default handler;