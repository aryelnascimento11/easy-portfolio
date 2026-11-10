
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MdArrowOutward, MdClose, MdArrowForward } from "react-icons/md";
import {
    SiNextdotjs,
    SiJavascript,
    SiReact,
    SiSupabase,
} from "react-icons/si";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    details: string;
    challenge: string;
    link?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "FIFO Gloria",
        description: "Site de restaurante com cardápio, carrinho e integração com WhatsApp.",
        image: "/image/fifo.png",
        category: "Projeto comercial",
        technologies: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
        details: "Desenvolvimento de uma plataforma para restaurante, com foco em facilitar a visualização do cardápio e o processo de pedidos.",
        challenge: "O desafio foi integrar o fluxo de pedidos com o WhatsApp e criar uma experiência simples para o cliente.",
        link: "https://fifo-gloria1.vercel.app/",
    },
    {
        id: 2,
        title: "Mestre Barbeiro",
        description: "Site de barbearia com apresentação de serviços e agendamento.",
        image: "/image/mestre-barbeiro.png",
        category: "Projeto demonstrativo",
        technologies: ["Next.js", "Tailwind", "JavaScript"],
        details: "Uma experiência digital para apresentar os serviços, informações e identidade de uma barbearia.",
        challenge: "Organizar as informações de maneira visual e facilitar o acesso dos clientes aos serviços.",
    },
    {
        id: 3,
        title: "Next.js Components",
        description: "Estudos e experimentos com componentes e interfaces.",
        image: "/image/components.png",
        category: "Projeto pessoal",
        technologies: ["Next.js", "React", "TypeScript"],
        details: "Projeto criado para praticar composição de componentes e organização de interfaces.",
        challenge: "Desenvolver componentes reutilizáveis e manter uma estrutura organizada.",
    },
];

const technologies = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "React", icon: SiReact, color: "text-sky-500" },
    { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
];

export default function Card() {
    const [projetoSelecionado, setProjetoSelecionado] =
        useState<Project | null>(null);

    useEffect(() => {
        if (!projetoSelecionado) return;

        function fecharComEsc(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setProjetoSelecionado(null);
            }
        }

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", fecharComEsc);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", fecharComEsc);
        };
    }, [projetoSelecionado]);

    return (
        <main className="bg-white px-6 py-20 lg:px-10">

            <div className="mx-auto max-w-7xl">

                {/* Título */}
                <div id="projetos" className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="mb-2 text-xs font-bold tracking-[0.16em] text-blue-600">
                            PORTFÓLIO
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                            Projetos em destaque
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Alguns trabalhos e experiências que desenvolvi.
                        </p>
                    </div>

                    <a
                        href="/projects"
                        className="hidden items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 sm:flex"
                    >
                        Ver todos
                        <MdArrowForward />
                    </a>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            whileHover={{ y: -7 }}
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/70"
                        >

                            <button
                                onClick={() => setProjetoSelecionado(project)}
                                className="block w-full text-left"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                    <motion.div
                                        layoutId={`project-image-${project.id}`}
                                        className="h-full w-full"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={`Imagem do projeto ${project.title}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </motion.div>

                                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="p-5">

                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-slate-900">
                                            {project.title}
                                        </h3>

                                        <MdArrowOutward className="text-xl text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" />
                                    </div>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {project.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-xs font-medium text-blue-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </button>
                        </motion.article>
                    ))}

                </div>

                {/* Tecnologias */}
                <section className="mt-24 border-t border-slate-200 pt-10">

                    <div className="mb-7">
                        <p className="text-xs font-bold tracking-[0.16em] text-blue-600">
                            FERRAMENTAS
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-slate-900">
                            Minhas tecnologias
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Tecnologias que utilizo no desenvolvimento dos meus projetos.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8">
                        {technologies.map((tech) => {
                            const Icon = tech.icon;

                            return (
                                <div
                                    key={tech.name}
                                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                                >
                                    <Icon className={`text-2xl ${tech.color}`} />
                                    {tech.name}
                                </div>
                            );
                        })}
                    </div>

                </section>
            </div>

            {/* Modal de detalhes */}
            <AnimatePresence>
                {projetoSelecionado && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-3 backdrop-blur-md sm:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onMouseDown={(event) => {
                            if (event.target === event.currentTarget) {
                                setProjetoSelecionado(null);
                            }
                        }}
                    >
                        <motion.div
                            layoutId={`project-image-${projetoSelecionado.id}`}
                            initial={{ opacity: 0, y: 35, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 25, scale: 0.97 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="project-title"
                            className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
                        >

                            <button
                                onClick={() => setProjetoSelecionado(null)}
                                aria-label="Fechar detalhes"
                                className="absolute right-5 top-5 z-10 rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:bg-slate-100"
                            >
                                <MdClose className="text-xl" />
                            </button>

                            <div className="grid md:grid-cols-[1.4fr_1fr]">

                                <div className="p-6 sm:p-9">

                                    <p className="text-xs font-bold tracking-widest text-blue-600">
                                        {projetoSelecionado.category.toUpperCase()}
                                    </p>

                                    <h2
                                        id="project-title"
                                        className="mt-3 text-3xl font-bold tracking-tight text-slate-900"
                                    >
                                        {projetoSelecionado.title}
                                    </h2>

                                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                                        {projetoSelecionado.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {projetoSelecionado.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
                                        <Image
                                            src={projetoSelecionado.image}
                                            alt={`Visualização de ${projetoSelecionado.title}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 60vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="font-bold text-slate-900">
                                            Desafios e soluções
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-500">
                                            {projetoSelecionado.challenge}
                                        </p>
                                    </div>
                                </div>

                                <aside className="border-t border-slate-200 bg-slate-50/80 p-6 sm:p-9 md:border-l md:border-t-0">

                                    <h3 className="text-lg font-bold text-slate-900">
                                        Sobre o projeto
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        {projetoSelecionado.details}
                                    </p>

                                    <div className="mt-9">
                                        <h3 className="font-bold text-slate-900">
                                            Principais tecnologias
                                        </h3>

                                        <div className="mt-4 flex flex-col gap-3">
                                            {projetoSelecionado.technologies.map((tech) => (
                                                <div
                                                    key={tech}
                                                    className="flex items-center gap-3 text-sm text-slate-600"
                                                >
                                                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {projetoSelecionado.link && (
                                        <a
                                            href={projetoSelecionado.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                                        >
                                            Visitar projeto
                                            <MdArrowOutward />
                                        </a>
                                    )}

                                    <button
                                        onClick={() => setProjetoSelecionado(null)}
                                        className="mt-3 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-white"
                                    >
                                        Voltar aos projetos
                                    </button>

                                </aside>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}
