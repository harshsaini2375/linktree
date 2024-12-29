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
    <div className="istpart bg-[#254f1a] h-screen grid grid-cols-2 ">
      <div className=" h-[80vh] w-[42vw] my-auto ml-24">
        <p className="text-[#d2e823] text-6xl font-extrabold pt-[20vh]">Everything you are. In one, simple link in bio.</p>
        <p className="text-[#d2e823] text-lg py-5">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className="inp space-x-10 mt-5">
          <input value={name} onChange={(e) => { setname(e.target.value) }} className="py-5 px-7 rounded-lg ring-[#254f1a] " type="text" placeholder="Enter your Handle" />
          <button onClick={() => { claim() }} className="py-5 px-7 rounded-full bg-[#e9c0e9] font-bold">Claim your Linktree</button>
        </div>
      </div>



      <div className=" h-[80vh] w-[42vw] m-auto pt-[20vh] pl-[7vw]">
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
