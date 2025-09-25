import { TfiSearch } from "react-icons/tfi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { PiBag } from "react-icons/pi";
import { GoBookmark } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";


export default function Header() {
    return (
        <section className="flex justify-between items-center px-8 py-8 text-2xl ">
            <div className="font-thin tracking-[15px] max-[425px]:tracking-[10px]">TANN TRIM</div>
            <div className="flex gap-6 text-2xl max-md:hidden">
                <i><TfiSearch/></i>
                <i><MdOutlinePersonOutline/></i>
                <i><GoBookmark/></i>
                <i><PiBag/></i>
            </div>
            <i className="max-md:block hidden"><RxHamburgerMenu/></i>
        </section>
    )
}