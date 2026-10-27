import { MdArrowForward } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";


export default function Banner() {
    return (
        <main>
            <section>
                <div>
                    <p className="flex items-center gap-1 text-blue-500"><FaRegPlayCircle />DESENVOLVIMENTO WEB</p>
                    <h1>Desenvolvimento web em <span>evolução</span></h1>
                    <h2>Desenvolvedor web com experiência em desenvolvimento de sites, aplicativos e sistemas web.</h2>
                    <div>
                        <button><a href="/">Ver Projetos<MdArrowForward /></a></button>
                        <a href="/"><MdOutlineMail /> Entrar em contato</a>
                    </div>
                </div>
                <img src="/banner.png" alt="Banner" />
            </section>
        </main>
    )

}