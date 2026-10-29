import { MdArrowForward } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";


export default function Banner() {
    return (
        <main>
            <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-100 py-20 px-10 md:px-20">
                <div className="flex flex-col gap-4 mt-10 px-20">
                    <p className="flex items-center gap-1 text-blue-500"><FaRegPlayCircle /> DESENVOLVIMENTO WEB</p>
                    <h1 className="text-4xl font-bold text-gray-800">
                        Desenvolvimento web <br />
                        em <span className="text-blue-500">evolução</span>
                    </h1>
                    <h2 className="text-lg text-gray-600">
                        Desenvolvedor web com experiência em desenvolvimento de sites, aplicativos e sistemas web.
                    </h2>
                    <div className="flex items-center gap-4">
                        <a href="/" className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 whitespace-nowrap">
                            <span>Ver Projetos</span>
                            <MdArrowForward /></a>
                        <a className="flex items-center gap-1 text-blue-500" href="/"><MdOutlineMail /> Entrar em contato</a>
                    </div>
                </div>         
                <img className="w-100 h-100 object-cover" src="./image/banner.png" alt="Banner" />
            </section>
        </main>
    )

}