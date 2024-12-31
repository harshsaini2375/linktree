import React from 'react'
import Image from 'next/image'
import clientPromise from "@/lib/mongodb";
import Link from 'next/link';
import { notFound } from 'next/navigation';


const Linkspage = async ({ username }) => {

  const client = await clientPromise;
  const db = client.db("linktree")
  const collection = db.collection("links")

  const data = await collection.findOne({ handle: username })

  if(!data){
    return notFound()
   }

  let newarr;
  let pic;

  if (data) {
    newarr = data.links
    pic = data.picture

  }


  return (
    <div >
      <div className="main min-h-[100vh] h-fit w-screen  max-w-[100vw] absolute  flex flex-col items-center pb-5 inset-0 -z-10  bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]
">
        {pic ? <div className='h-24 w-24 border-[1px] border-black rounded-full my-5 relative overflow-hidden'>
          <Image src={pic} fill={true} alt='profilepic' />
        </div> : <div className='h-24 w-24 border-[1px] border-black bg-red-500 rounded-full my-5 flex justify-center items-center text-6xl font-bold text-white'>{username.toUpperCase()[0]}</div>
        }

        <div className="name font-bold text-lg">@{username}</div>
        <div className="icons flex gap-2 md:gap-5 my-5 relative self-end mr-5 md:mr-0">
          <Link className='flex justify-center items-center border-2 border-[#8f8f8f] rounded-md absolute md:-left-[13vw] -left-[82px] text-[#8f8f8f] py-1 px-4' href={"/"}>Back</Link>
          <Image src={"/linkedin.svg"} width={35} height={35} alt='icon' />
          <Image src={"/github.svg"} width={35} height={35} alt='icon' />
          <Image src={"/instagram.svg"} width={35} height={35} alt='icon' />
          <Image src={"/facebook.svg"} width={35} height={35} alt='icon' />
          <Image src={"/twitter.svg"} width={35} height={35} alt='icon' />
          <Image src={"/pinterest.svg"} width={35} height={35} alt='icon' />
        </div>


        {newarr ? newarr.map((obj, index) => {

          return <div key={index} className="shadow border-2 border-black h-12 w-[80vw] md:w-[45vw] mx-auto rounded-lg mt-5 bg-black relative">
          <Link  href={obj.link} target='_blank' >
            <div className="link bg-white border-2 border-black h-12 w-[80vw]  md:w-[45vw] mx-auto rounded-lg mt-5 flex justify-center items-center text-xl text-purple-700 absolute bottom-2 hover:bottom-1 right-2 hover:right-1 transition-all ease-in-out duration-100">
              {obj.linktext}
            </div>
          </Link>
          </div>
        }) : <div className='text-2xl'>Please add your Links.</div>}

          
       

      </div>
    </div>
  )
}

export default Linkspage


