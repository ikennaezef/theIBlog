import { sanityClient } from "../../lib/sanity";

sanityClient.config({
  token: process.env.SANITY_WRITE_TOKEN,
})

export default async function likeButtonHandler(req, res) {
  const { _id, add } = JSON.parse(req.body);
  // let data;
  // const data = await sanityClient
  //   .patch(_id)
  //   .setIfMissing({ likes: 0 })
  //   .inc({ likes: 1 })
  //   .commit()
  //   .catch((error) => console.log(error));

  if (add == true) {
    const data = await sanityClient
      .patch(_id)
      .setIfMissing({ likes: 0 })
      .inc({ likes: 1 })
      .commit()
      .catch((error) => console.log(error));
  } else {
    const data = await sanityClient
      .patch(_id)
      .dec({ likes: 1 })
      .commit()
      .catch((error) => console.log(error));
  }

  res.status(200).json({ likes: data.likes });

}