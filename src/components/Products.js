"use client";
import Image from "next/image";
import { TfiExport } from "react-icons/tfi";
// import addCart from '../../public/assets/Group-451.svg'
import { GoBookmark } from "react-icons/go";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Products(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
            .then((res)=>{
                // console.log(res.data)
                setProducts(res.data)
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err)
                setLoading(false)
            })
    }, [])

    const productArray = [
        {
            id: 1,
            image: '/assets/prod1.jpg',
            name: "The Brown Metro Mover",
        },
        {
            id: 2,
            image: '/assets/prod2.jpg',
            name: "The Brown Metro Black",
        },
        {
            id: 3,
            image: '/assets/prod3.jpg',
            name: "The Brown Metro Black",
        },
        {
            id: 4,
            image: '/assets/prod4.jpg',
            name: "The Brown Metro Black",
        },
        {
            id: 5,
            image: '/assets/prod1.jpg',
            name: "The Brown Metro Mover",
        },
        {
            id: 6,
            image: '/assets/prod2.jpg',
            name: "The Brown Metro Black",
        },
        {
            id: 7,
            image: '/assets/prod3.jpg',
            name: "The Brown Metro Black",
        },
        {
            id: 8,
            image: '/assets/prod4.jpg',
            name: "The Brown Metro Black",
        },
    ]

    return (
        <section className="h-full p-8">
            <div className="flex max-[425px]:flex-col gap-2 justify-between items-center max-[425px]:items-start px-2 font-semibold">
                <div className="flex gap-2 items-center">
                    <p>Bags</p>
                    <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
                    <p>Backpacks</p>
                </div>
                <div className="flex gap-4">
                    <p>{products.length+8} products</p>
                    <i className="font-bold"><TfiExport/></i>
                </div>
            </div>

            {/* same layout from figma file  */}
            <div className="h-full flex flex-wrap my-8 justify-start ">
                {productArray.map((data)=>{return(
                    <div key={data.id} className=" h-full relative rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 my-4" >
                        {/* <Image src={data?.image} alt={data.name} height={180} width={425} className="lazy-loading rounded-t-lg object-cover"/> */}
                        <div className="relative w-full h-115 ">
                            <Image src={data.image} alt={data.name} fill className="rounded-t-lg object-cover"/>
                        </div>

                        <p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wider  px-2 py-4 bg-[#151515]"> {data.name} </p>

                        <div className="w-full flex justify-between items-center bg-[#151515] rounded-b-lg">
                            <div className="flex gap-1 items-end px-2 py-4">
                                <p className="font-bold text-lg  md:text-2xl text-nowrap">₹ 4899</p>
                                <span className="text-xs sm:text-sm">8999</span>
                                <span className="font-semibold text-xs sm:text-sm text-green-500 text-nowrap"> (50% off) </span>
                            </div>

                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                                <Image src={'/assets/Group-451.svg'} alt="add" fill />
                            </div>                        
                        </div>

                        <i className="absolute top-6 right-4 sm:top-8 sm:right-6 font-thin text-[#151515] text-3xl sm:text-5xl">
                            <GoBookmark />
                        </i>
                    </div>
                )})}
            </div>

            {/* for dynamic data from API */}
            <div className="h-full flex flex-wrap my-8 justify-start ">
                { loading ? (
                    <div className="w-full flex justify-center">
                        <div className="w-12 h-12 border-2 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                ) : (
                    products?.map((data)=>{ return (
                        <div key={data.id} className=" h-full relative rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 my-4" >
                            <div className="relative w-full h-105 ">
                                <Image src={data.image} alt={data.title} fill className="rounded-t-lg object-cover"/>
                            </div>
                            <p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-nowrap overflow-hidden px-2 py-4 bg-[#151515]"> {data.title} </p>

                            <div className="w-full flex justify-between items-center bg-[#151515] rounded-b-lg">
                                <div className="flex gap-1 items-end px-2 py-4">
                                    <p className="font-bold text-lg  md:text-2xl text-nowrap">₹ {data.price}</p>
                                    <span className="text-xs sm:text-sm">8999</span>
                                    <span className="font-semibold text-xs sm:text-sm text-green-500 text-nowrap"> (50% off) </span>
                                </div>

                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                                    <Image src={'/assets/Group-451.svg'} alt="add" fill />
                                </div>
                            </div>

                            <i className="absolute top-6 right-4 sm:top-8 sm:right-6 font-thin text-slate-100 text-3xl sm:text-5xl">
                                <GoBookmark />
                            </i>
                        </div>
                    )}
                ))}
            </div>
        </section>
    )
}