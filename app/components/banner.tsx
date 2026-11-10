
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MdArrowForward, MdOutlineMail } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";

export default function Banner() {
    return (
        <section className="relative isolate overflow-hidden bg-white">

            {/* Elementos decorativos */}
            <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

            <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-10">

                <motion.div
                    initial={{ opacity: 0, x: -35 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start gap-6"
                >
                    <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-blue-600">
                        <FaRegPlayCircle />
                        DESENVOLVEDOR WEB
                    </p>

                    <h1 className="max-w-xl text-5xl font-bold leading-[1.12] tracking-tight text-slate-900 md:text-6xl">
                        Desenvolvedor web
                        <br />
                        em <span className="text-blue-600">evolução.</span>
                    </h1>

                    <p className="max-w-lg text-base leading-7 text-slate-500 md:text-lg">
                        Construindo interfaces e aplicações web funcionais,
                        transformando ideias em experiências digitais.
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-5">
                        <Link
                            href="#projetos"
                            className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                        >
                            Ver projetos
                            <MdArrowForward />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
                        >
                            <MdOutlineMail className="text-lg" />
                            Entrar em contato
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 25 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Image
                            src="/image/banner.png"
                            alt="Notebook exibindo código de desenvolvimento"
                            width={700}
                            height={600}
                            priority
                            className="h-auto w-full object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    <div className="absolute -bottom-2 right-2 rounded-xl border border-blue-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md md:right-0">
                        <p className="text-xs font-semibold text-slate-800">
                            Código que
                            <span className="block text-blue-600">resolve problemas.</span>
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
