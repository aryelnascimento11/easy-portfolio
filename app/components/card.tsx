import { MdArrowOutward } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";

import { useState } from "react";


import Image from "next/image";


export default function Card() {
    const [atualizar, setAtualizar] = useState(false);
    return (
        <main>
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
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setAtualizar(!atualizar)}>Atualizar</button>
                    {atualizar && (
                        <section className="bg-white text-black p-4 rounded-lg mt-4">
                            <h2>Minha seção</h2>
                            <p>meu conteudo</p>
                        </section>
                    )}
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
            <section>
                <h2>MINHAS TECNOLOGIAS</h2>
                <p>Ferramentas que ultilizo no meu dia a dia.</p>
                <div className="flex  gap-10  items-center mt-4">
                    <h2 className="flex items-center gap-2"><SiNextdotjs className="text-black" />Next.js</h2>
                    <h2 className="flex items-center gap-2"><IoLogoJavascript className="text-yellow-500" />JavaScript</h2>
                    <h2 className="flex items-center gap-2"><FaReact className="text-blue-500" />React</h2>
                    <h2 className="flex items-center gap-2"><RiSupabaseFill className="text-green-500" />Supabase</h2>
                </div>
            </section>
        </main>
    )

}