// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sanityClient } from '../../lib/sanity';

sanityClient.config({
  token: process.env.SANITY_WRITE_TOKEN,
});

export default async function likeButtonHandler(req : any, res : any) {
  const { _id } = JSON.parse(req.body);
  const data : any = await sanityClient
    .patch(_id)
    .setIfMissing({ likes: 0 })
    .inc({ likes: 1 })
    .commit()
    .catch((error => console.log(error)));

    res.status(200).json({ likes: data.likes })
}