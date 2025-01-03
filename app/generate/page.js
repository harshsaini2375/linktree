"use client"
// generate
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const MyPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [handlename, sethandlename] = useState(searchParams.get('handle'))
    const [form, setform] = useState({ handle: handlename, picture: "" })
    const [linkandlinktext, setlinkandlinktext] = useState([])
    const [create, setcreate] = useState(false)
    const [linktext, setlinktext] = useState('')
    const [link, setlink] = useState('')



    const handleform = (e) => {

        setform({ ...form, [e.target.name]: e.target.value })
    }


    useEffect(() => {

        if (create == true) {
           fetchdata()
        }
    }, [linkandlinktext])

    const fetchdata = async() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": linkandlinktext,
            "handle": form.handle,
            "picture": form.picture
        });
        console.log(raw);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

       await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/generate`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        setform({ handle: "", picture: "" })
        setlink('')
        setlinktext('')
        setlinkandlinktext([])
        setcreate(false)
        router.push(`/${form.handle}`)
    }
    

    const handleaddmore = () => {
        setlinkandlinktext([...linkandlinktext, { 'link': link, 'linktext': linktext }])
        setlink('')
        setlinktext('')
    }


    const handlecreate = () => {
        setcreate(true)
        setlinkandlinktext([...linkandlinktext, { 'link': link, 'linktext': linktext }])

    }


    return (
        <div className='bg-[#225ac0] h-fit md:h-screen grid grid-rows-2 md:grid-cols-2 '>
            <Navbar />
            <div className="left w-screen md:w-[40vw] h-fit md:h-[70vh] flex flex-col justify-center md:items-center md:mt-[25vh] mt-[20vh] mx-auto px-5 space-y-8 ">
                <h1 className=' text-3xl font-bold text-center'>Create your Bittree</h1>

                <div className='handle text-xl space-y-2 '>
                    <h2>Claim your Handle</h2>
                    <input value={form.handle} name='handle' onChange={(e) => { handleform(e) }} className='md:w-[30vw] w-full focus:outline-blue-500 px-4 py-1 rounded-lg' type="text" placeholder='Choose a Handle' />
                </div>

                <div className="links text-xl flex flex-col space-y-2">
                    <h2>Add Links</h2>
                    <input value={linktext} name='linktext' onChange={(e) => setlinktext(e.target.value)} className='md:w-[30vw] w-full focus:outline-blue-500 px-4 py-1 rounded-lg' type="text" placeholder='Enter Link Text*' />
                    <input value={link} name='link' onChange={(e) => setlink(e.target.value)} className='md:w-[30vw] w-full focus:outline-blue-500 px-4 py-1 rounded-lg' type="text" placeholder='Enter Link*' />
                    <button onClick={() => { handleaddmore() }} className='w-fit  px-5 py-2 rounded-full text-white bg-slate-700 '>Add More Links</button>
                </div>

                <div className="img text-xl flex flex-col space-y-2">
                    <h2>Add Picture and Finalize</h2>
                    <input value={form.picture} name='picture' onChange={(e) => { handleform(e) }} className='md:w-[30vw] w-full focus:outline-blue-500 px-4 py-1 rounded-lg' type="text" placeholder='Enter Link to your Picture' />
                    <button disabled={link == '' || linktext == '' || form.handle == ''} onClick={() => { handlecreate() }} className=' disabled:bg-slate-500 w-fit px-8 py-2 rounded-full text-white bg-slate-700 ' >Create</button>
                </div>

            </div>

            <div className="right w-screen md:w-[40vw]  h-[70vh] md:h-screen  mx-auto flex justify-center items-center overflow-hidden  md:pt-28">
                <Image  src={'/generateimg.png'} height={400} width={400} alt='generateimage' />
            </div>
        </div>
    )
}

const WrappedMyPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <MyPage />
    </Suspense>
  );
  
  export default WrappedMyPage;