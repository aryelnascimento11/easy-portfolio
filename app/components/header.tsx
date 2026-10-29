
import Link from "next/dist/client/link";
import { CiSettings } from "react-icons/ci";
import { MdArrowForward } from "react-icons/md";


export default function Header() {
    return (
        <header className="border-b border-black">
            <nav className="flex justify-between items-center py-4 px-8 bg-white text-white">
                <Link className="font-bold text-xl text-blue-700" href="/">Aryel <span className="text-blue-500">Nascimento</span></Link>
                <div className="flex items-center gap-4 text-blue-500">
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="flex items-center gap-4">
                    <CiSettings className="text-blue-500" />
                    <a className=" inline-flex items-center gap-2 bg-blue-500 text-white rounded-lg px-3 py-2 cursor-pointer hover:bg-blue-600 transition-colors duration-300">
                        <span>Fale comigo</span>
                        <MdArrowForward />
                    </a>
                </div>
            </nav>

        </header>
    )
}