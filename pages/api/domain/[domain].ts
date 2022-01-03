import { NextApiRequest, NextApiResponse } from "next";
import prisma from "utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { domain } = req.query;
    const domain_res = await prisma.domain.findUnique({
      where: {
        name: domain.toString(),
      },
    });
    res.status(200).json(domain_res);
  } else {
    res.status(405).json({error: "Unsupported method: " + req.method});
  }
}

export default handler;