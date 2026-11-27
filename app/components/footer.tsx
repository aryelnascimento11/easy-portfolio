
import Link from "next/link";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdArrowUpward } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">

            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Identidade */}
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/"
                            className="w-fit text-2xl font-bold tracking-tight text-slate-900"
                        >
                            ARYEL<span className="text-blue-600">.DEV</span>
                        </Link>

                        <p className="max-w-xs text-sm leading-7 text-slate-500">
                            Desenvolvedor web em evolução, criando interfaces
                            e aplicações que transformam ideias em soluções digitais.
                        </p>

                        <span className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                            Disponível para oportunidades
                        </span>
                    </div>

                    {/* Navegação */}
                    <div>
                        <h2 className="mb-5 text-sm font-bold text-slate-900">
                            Navegação
                        </h2>

                        <div className="flex flex-col gap-3 text-sm text-slate-500">
                            <Link href="/" className="transition hover:translate-x-1 hover:text-blue-600">
                                Início
                            </Link>

                            <Link href="/about" className="transition hover:translate-x-1 hover:text-blue-600">
                                Sobre mim
                            </Link>

                            <Link href="/projects" className="transition hover:translate-x-1 hover:text-blue-600">
                                Projetos
                            </Link>

                            <Link href="/contact" className="transition hover:translate-x-1 hover:text-blue-600">
                                Contato
                            </Link>
                        </div>
                    </div>

                    {/* Contato */}
                    <div>
                        <h2 className="mb-5 text-sm font-bold text-slate-900">
                            Vamos conversar?
                        </h2>

                        <div className="flex flex-col gap-4">

                            <a
                                href="https://wa.me/55SEUNUMERO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 text-sm text-slate-500 transition hover:text-emerald-600"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-lg transition group-hover:bg-emerald-50">
                                    <FaWhatsapp />
                                </span>
                                WhatsApp
                            </a>

                            <a
                                href="mailto:seuemail@email.com"
                                className="group flex items-center gap-3 text-sm text-slate-500 transition hover:text-blue-600"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-lg transition group-hover:bg-blue-50">
                                    <MdEmail />
                                </span>
                                E-mail
                            </a>

                            <a
                                href="https://instagram.com/seuusuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 text-sm text-slate-500 transition hover:text-pink-600"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-lg transition group-hover:bg-pink-50">
                                    <FaInstagram />
                                </span>
                                Instagram
                            </a>

                        </div>
                    </div>

                    {/* Idiomas */}
                    <div>
                        <h2 className="mb-5 text-sm font-bold text-slate-900">
                            Idiomas
                        </h2>

                        <div className="flex flex-col gap-3 text-sm text-slate-500">
                            <p>Português <span className="text-slate-400">— Nativo</span></p>
                            <p>Inglês <span className="text-slate-400">— Básico</span></p>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3"
                        >
                            Entre em contato
                            <MdArrowUpward className="rotate-45" />
                        </Link>
                    </div>

                </div>

                {/* Rodapé inferior */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-7 text-center sm:flex-row sm:text-left">

                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} Aryel Nascimento.
                        Todos os direitos reservados.
                    </p>

                    <a
                        href="#top"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-blue-600"
                    >
                        Voltar ao topo
                        <MdArrowUpward />
                    </a>

                </div>

            </div>
        </footer>
    );
}
