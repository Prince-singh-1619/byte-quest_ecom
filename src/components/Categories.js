import Image from 'next/image'
// import bag1 from '../../public/assets/Frame 461.svg'
// import bag2 from '../../public/assets/Group 307.svg'
// import bag3 from '../../public/assets/Frame 49.svg'
// import bag4 from '../../public/assets/Frame 13.svg'
// import bag5 from '../../public/assets/Frame 49 (1).svg'
// import bag6 from '../../public/assets/Frame 49 (2).svg'
// import bag7 from '../../public/assets/Frame 22.svg'
// import bag8 from '../../public/assets/Frame 20.svg'
// import bag9 from '../../public/assets/Frame 46.svg'

export default function Categories() {
    const categoryArr = [
        {
            id: 1,
            icon: '/assets/Frame-461.svg',
            name: "All Bags"
        },
        {
            id: 2,
            icon: '/assets/Group-307.svg',
            name: "Vanity Pouch"
        },
        {
            id: 3,
            icon: '/assets/Frame-49.svg',
            name: "Tote Bag"
        },
        {
            id: 4,
            icon: '/assets/Frame-13.svg',
            name: "Duffle Bag"
        },
        {
            id: 5,
            icon: '/assets/Frame-50.svg',
            name: "Laptop Sleeve"
        },
        {
            id: 6,
            icon: '/assets/Frame-51.svg',
            name: "Messenger Bags"
        },
        {
            id: 7,
            icon: '/assets/Frame-22.svg',
            name: "Slings Bags"
        },
        {
            id: 8,
            icon: '/assets/Frame-20.svg',
            name: "Handbags"
        },   
    ]

    return (
        <section>
            <div className="w-full mx-auto flex min-[425px]:justify-center gap-12 max-md:gap-6 max-[425px]:px-8 font-medium overflow-x-scroll no-scrollbar">
                <p className='cursor-pointer'>Bags</p>
                <p className='cursor-pointer'>Travel</p>
                <p className='cursor-pointer'>Accesories</p>
                <p className='cursor-pointer'>Gifting</p>
                <p className='cursor-pointer'>Jewelery</p>
            </div>

            <div className='w-full mx-auto flex items-end gap-6 px-4 mt-6 overflow-x-scroll no-scrollbar '>
                {categoryArr.map((data)=>{
                    return(
                        <div key={data.id} className='font-thin flex flex-col items-center gap-4 px-4 hover:bg-[#151515] rounded-lg'>
                            <Image src={data.icon} alt={data.name} width={125} height={125} />
                            <p className='text-nowrap '>{data.name}</p>
                        </div>
                    )}
                )}
                <div className='flex flex-col items-center gap-2 px-4 hover:bg-[#151515] rounded-lg'>
                    <Image src={'/assets/Frame-46.svg'} alt='bag 9' width={50} height={50} />
                    <p className='text-nowrap '>Bucket</p>
                </div>
            </div>
        </section>
    )
}