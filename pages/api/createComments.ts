// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from "@sanity/client";

 const config = { 
    projectId: '1zhvl9pv',// process.env.NEXT_PUBLIC_SANITY_DATASET  ||
    dataset:   'production',//process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    token:       'sk9afXnn21uNS78puTrBFK6KIu1IsV3lYshQo76Yk3tyTsIhB7wINr45t7Q0E0CcO5YJef7jQib4NitsubjMrSL560uQozAPMXd7ye1byJeXgNPxjdWemiq6IEKUfKgKbdmTlwkGXtI18p5rZ72QOtMQgSPuSInOk1gTXysIFyNMWF2Iyos4', // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  };
    //})

    const client = sanityClient(config); 
type Data = {
  name: string
}

export default  async function createComment(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {_id,name,email,comment } = JSON.parse(req.body);
    
    try{
        await client.create({
        _type:"comment",
        post:{
            _type:"reference",
            _ref:_id,

        },
        name,
        email,
        comment,
        })

    }
    catch(err){
        console.log(err);
        
      return  res.status(500).json({ message: 'Could not submitted ',errr });  
    }
    console.log("submitted");

     return   res.status(200).json({ message: 'comment has submitted' });
}