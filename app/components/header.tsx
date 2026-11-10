
"use client";

import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { MdArrowForward } from "react-icons/md";
import { motion } from "motion/react";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl"
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

                <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
                    ARYEL<span className="text-blue-600">.DEV</span>
                </Link>

                <div className="hidden items-center gap-9 text-sm font-medium text-slate-500 md:flex">
                    <Link className="transition-colors hover:text-blue-600" href="/">Início</Link>
                    <Link className="transition-colors hover:text-blue-600" href="/projects">Projetos</Link>
                    <Link className="transition-colors hover:text-blue-600" href="/about">Sobre</Link>
                    <Link className="transition-colors hover:text-blue-600" href="/contact">Contato</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        aria-label="Configurações"
                        className="text-xl text-slate-500 transition hover:rotate-45 hover:text-blue-600"
                    >
                        <CiSettings />
                    </button>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                    >
                        Fale comigo
                        <MdArrowForward />
                    </Link>
                </div>

            </nav>
        </motion.header>
    );
}
