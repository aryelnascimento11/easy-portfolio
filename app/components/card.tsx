import { MdArrowOutward } from "react-icons/md";


export default function Card() {
    return (
        <section>
            <div className="bg-blue-500 flex w-92 m-4 rounded-lg items-start justify-between border border-black py-6 px-4 ">
                <div className="flex flex-col gap-3">
                    <img src="./public/image/fifo.png" alt="images" />
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
            <div></div>
            <div></div>
            <div></div>

        </section>
    )

}