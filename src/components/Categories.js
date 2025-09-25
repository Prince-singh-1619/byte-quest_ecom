import Image from 'next/image'
import bag1 from '../../public/assets/Frame 461.svg'
import bag2 from '../../public/assets/Group 307.svg'
import bag3 from '../../public/assets/Frame 49.svg'
import bag4 from '../../public/assets/Frame 13.svg'
import bag5 from '../../public/assets/Frame 49 (1).svg'
import bag6 from '../../public/assets/Frame 49 (2).svg'
import bag7 from '../../public/assets/Frame 22.svg'
import bag8 from '../../public/assets/Frame 20.svg'
import bag9 from '../../public/assets/Frame 46.svg'

export default function Categories() {
    const categoryArr = [
        {
            icon: bag1,
            name: "All Bags"
        },
        {
            icon: bag2,
            name: "Vanity Pouch"
        },
        {
            icon: bag3,
            name: "Tote Bag"
        },
        {
            icon: bag4,
            name: "Duffle Bag"
        },
        {
            icon: bag5,
            name: "Laptop Sleeve"
        },
        {
            icon: bag6,
            name: "Messenger Bags"
        },
        {
            icon: bag7,
            name: "Slings Bags"
        },
        {
            icon: bag8,
            name: "Handbags"
        },
        // {
        //     icon: bag9,
        //     name: "Bucket Bags"
        // },
        
    ]

    return (
        <section className=''>
            <div className="w-full mx-auto flex min-[425px]:justify-center gap-12 max-md:gap-6 max-[425px]:px-8 font-medium overflow-x-scroll no-scrollbar">
                <p className='cursor-pointer'>Bags</p>
                <p className='cursor-pointer'>Travel</p>
                <p className='cursor-pointer'>Accesories</p>
                <p className='cursor-pointer'>Gifting</p>
                <p className='cursor-pointer'>Jewelery</p>
            </div>

            <div className='w-full mx-auto flex items-end gap-6 px-4 mt-6 overflow-x-scroll no-scrollbar '>
                { categoryArr.map((data, index)=>{
                    return(
                        <div key={index} className='font-thin flex flex-col items-center gap-4 px-4 hover:bg-[#151515] rounded-lg'>
                            <Image src={data.icon} alt={data.name} width={125} height={125} />
                            <p className='text-nowrap '>{data.name}</p>
                        </div>
                    )}
                )}
                <div className='flex flex-col items-center gap-2 px-4 hover:bg-[#151515] rounded-lg'>
                    <Image src={bag9} alt='bag 9' width={50} height={50} />
                    <p className='text-nowrap '>Bucket</p>
                </div>
            </div>
        </section>
    )
}