import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";


export default function Card() {
    return (
        <section className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-500 flex w-92 m-4 rounded-lg items-start justify-between border border-black py-6 px-4 ">

                <div className="flex flex-col gap-3">
                    <Image
                        src="/image/fifo.png"
                        alt="Fifo Gloria"
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                    <h2 className="text-xl font-bold">Fifo Gloria</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
                    <div className="flex flex-wrap gap-2">
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">HTML</p>
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">CSS</p>
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">JavaScript</p>
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">Supabase</p>
                    </div>
                </div>
                <p className="text-xl"><MdArrowOutward /></p>
            </div>
            <div className="bg-blue-500 flex w-92 m-4 rounded-lg items-start justify-between border border-black py-6 px-4 ">

                <div className="flex flex-col gap-3">
                    <Image
                        src="/image/fifo.png"
                        alt="Fifo Gloria"
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                    <h2 className="text-xl font-bold">Mestre Barbeiro</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
                    <div className="flex flex-wrap gap-2">
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">HTML</p>
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">CSS</p>
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">JavaScript</p>
                    </div>
                </div>
                <p className="text-xl"><MdArrowOutward /></p>
            </div>
            <div className="bg-blue-500 flex w-92 m-4 rounded-lg items-start justify-between border border-black py-6 px-4 ">

                <div className="flex flex-col gap-3">
                    <Image
                        src="/image/fifo.png"
                        alt="Fifo Gloria"
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                    <h2 className="text-xl font-bold">Next.Js Components</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
                    <div className="flex flex-wrap gap-2">
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">Next.js</p>
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">Tailwind CSS</p>
                        <p className="bg-white text-blue-500 px-2 py-1 rounded-lg">TypeScript</p>
                    </div>
                </div>
                <p className="text-xl"><MdArrowOutward /></p>
            </div>
          

        </section>
    )

}