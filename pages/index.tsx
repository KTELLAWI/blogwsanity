import Head from 'next/head'
import Link from 'next/link';
import Header from '../components/Header'
import {sanityClient,urlFor,  } from "../sanity";
import { Post  } from "../typings";

interface Props{
  posts:[Post];
}

export default function Home({posts} : Props) {
  console.log('posts');
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'> 
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif' >
            <span className=' underline decoration-black decoration-4 '>Medium</span> {""} is a place to write ,read and connect 
          </h1>
          <h2>
            It is easy and free to post your thinking on any topic and connect with millions of readers 
          </h2>

        </div>

        <img className='hidden md:inline-flex h-40 lg:h-60'
         src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogok.org%2Fwp-content%2Fuploads%2F2015%2F10%2FMedium-logo-old-1024x768.png&f=1&nofb=1" alt="" />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 P-2 md:p-6'>
      {
        posts.map((post)=>(  
          <Link  
          //  key={post._id}
          href={`/post/${post.slug.current}`}
          >
            <div className='group  cursor-pointer border rounded-t-lg overflow-hidden'>
              <img className='h060 w-full object-cover group-hover:scale-110 transition-transform duration-200 ease-in-out '
              src={urlFor(post.mainImage).url()!} alt="" />
              <div  className='flex justify-between p-5 bg-white'>
                <div> 
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p className='text-xs'>{post.description} by {post.author.name}</p>
                 
                </div>
                <img className='h-12 w-12 rounded-full '
                src={urlFor(post.author.image).url()!} alt="" />
              </div>
            </div>


          </Link>
        ))
      }

      </div>

      

     
    </div>
  )
}

export const getServerSideProps = async ()=>{
const query = `*[_type =='post']{
  _id,
  title,
  author ->{
  name,
  image,
},
description,
slug,
mainImage,
  
}`

const posts = await  sanityClient.fetch(query);
return {
  props:{
       posts,
  }
}

}
