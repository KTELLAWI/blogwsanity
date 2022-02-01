//const sanityClient = require('@sanity/client')
//client = sanityClient({
import { createClient,createCurrentUserHook,createImageUrlBuilder } from "next-sanity";
export const config = { 
  projectId: '1zhvl9pv',// process.env.NEXT_PUBLIC_SANITY_DATASET  ||
  dataset:   'production',//process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
};
  //})

  export const sanityClient = createClient(config);
  export const urlFor= (source)=> createImageUrlBuilder(config).image(source);
  export const useCurrentUser=createCurrentUserHook(config); 