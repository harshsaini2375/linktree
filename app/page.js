"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {

  const router = useRouter()
  const [name, setname] = useState('')

  const claim = () => {
    if (name != '') {
      router.push(`/generate?handle=${name}`)

    }

  }

  return (<>
    <Navbar />
    <div className="istpart bg-[#254f1a] h-fit md:h-screen grid grid-rows-2 md:grid-cols-2 ">
      <div className="h-[80vh] w-screen md:w-[42vw] my-auto md:px-0 px-5 md:ml-24">
        <p className="text-[#d2e823] text-3xl md:text-6xl font-extrabold pt-[20vh]">Everything you are. In one, simple link in bio.</p>
        <p className="text-[#d2e823] text-base md:text-lg py-5">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className="inp md:block flex flex-col gap-4 md:space-x-10 md:mt-5">
          <input value={name} onChange={(e) => { setname(e.target.value) }} className="py-5 px-7 rounded-lg ring-[#254f1a] " type="text" placeholder="Enter your Handle" />
          <button onClick={() => { claim() }} className="py-5 px-7 rounded-full bg-[#e9c0e9] font-bold">Claim your Linktree</button>
        </div>
      </div>



      <div className=" h-[80vh] md:w-[42vw] pt-[10vh] md:m-auto md:pt-[20vh] md:pl-[7vw]">
        <Image
          src="/istphoto.png"
          width={400}
          height={400}
          alt="ist Picture"
        />
      </div>

    </div>
  </>
  );
}
