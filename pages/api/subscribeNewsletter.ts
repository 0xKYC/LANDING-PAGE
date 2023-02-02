import { RegionUS, TrackClient } from 'customerio-node';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function SubscribeNewsletter(req: NextApiRequest, res: NextApiResponse) {
  const siteId = process.env.CUSTOMER_IO_SITE_KEY;
  const apiKey = process.env.CUSTOMER_IO_API_KEY;

  if (!siteId || !apiKey) {
    throw new Error('Environment variables are required!');
  }

  const cio = new TrackClient(siteId, apiKey, { region: RegionUS });

  try {
    await cio.identify(req.body.email, {
      email: req.body.email,
    });

    res.status(200).send('success');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
