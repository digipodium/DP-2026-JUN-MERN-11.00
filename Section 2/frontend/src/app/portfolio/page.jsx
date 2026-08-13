// 'use client';
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
// import {
//     Code2,
//     Boxes,
//     Server,
//     Share2,
//     Database,
//     PenTool,
//     Github,
//     Linkedin,
//     Mail,
//     Instagram,
//     ArrowUpRight,
//     ArrowUp,
//     Send,
//     CheckCircle2,
//     Terminal,
// } from "lucide-react";

// /* ---------------------------------------------------------
//    Design tokens
//    bg        #0A0F0E  near-black, faint teal cast
//    surface   #101514
//    surface-2 #141B19
//    border    #1E2A27
//    text hi   #EAF3F0
//    text mid  #93A6A1
//    text low  #5C716C
//    teal      #2FE0C4  (signature accent)
//    teal-dim  #1B8F7C
// --------------------------------------------------------- */

// const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');`;

// const SKILLS = [
//     { name: "JavaScript", icon: Code2, level: 5 },
//     { name: "React", icon: Boxes, level: 5 },
//     { name: "Express", icon: Server, level: 4 },
//     { name: "REST API", icon: Share2, level: 5 },
//     { name: "MongoDB", icon: Database, level: 4 },
//     { name: "Figma", icon: PenTool, level: 3 },
// ];

// const SECTIONS = ["hero", "skills", "projects", "contact"];

// /* ---------- shared reveal wrapper ---------- */
// function Reveal({ children, delay = 0, y = 24, className = "" }) {
//     return (
//         <motion.div
//             className={className}
//             initial={{ opacity: 0, y }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
//         >
//             {children}
//         </motion.div>
//     );
// }

// /* ---------- ambient cursor glow ---------- */
// function CursorGlow() {
//     const ref = useRef(null);
//     useEffect(() => {
//         const el = ref.current;
//         if (!el) return;
//         const onMove = (e) => {
//             el.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
//         };
//         window.addEventListener("mousemove", onMove);
//         return () => window.removeEventListener("mousemove", onMove);
//     }, []);
//     return (
//         <div
//             ref={ref}
//             className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full z-0 hidden md:block"
//             style={{
//                 background:
//                     "radial-gradient(circle, rgba(47,224,196,0.06) 0%, rgba(47,224,196,0) 70%)",
//                 transition: "transform 0.15s ease-out",
//                 willChange: "transform",
//             }}
//         />
//     );
// }

// /* ---------- fixed side nav (dashboard status style) ---------- */
// function SideNav({ active }) {
//     const scrollTo = (id) => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     };
//     return (
//         <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4">
//             {SECTIONS.map((s) => (
//                 <button
//                     key={s}
//                     onClick={() => scrollTo(s)}
//                     className="group flex items-center gap-3"
//                     aria-label={`Go to ${s}`}
//                 >
//                     <span
//                         className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                         style={{ color: "#93A6A1" }}
//                     >
//                         {s}
//                     </span>
//                     <span
//                         className="block rounded-full transition-all duration-300"
//                         style={{
//                             width: active === s ? 10 : 6,
//                             height: active === s ? 10 : 6,
//                             background: active === s ? "#2FE0C4" : "#2A3835",
//                             boxShadow: active === s ? "0 0 12px rgba(47,224,196,0.7)" : "none",
//                         }}
//                     />
//                 </button>
//             ))}
//         </div>
//     );
// }

// /* ---------- scroll progress hairline ---------- */
// function ProgressBar() {
//     const { scrollYProgress } = useScroll();
//     return (
//         <motion.div
//             className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
//             style={{ scaleX: scrollYProgress, background: "#2FE0C4" }}
//         />
//     );
// }

// /* ---------- mini live-dashboard illustration (hero signature element) ---------- */
// function DashboardWidget() {
//     const bars = [40, 70, 55, 90, 65, 80, 50];
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 30, rotate: -2 }}
//             animate={{ opacity: 1, y: 0, rotate: -2 }}
//             transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
//             whileHover={{ rotate: 0, scale: 1.02 }}
//             className="relative w-full max-w-md rounded-2xl p-5 backdrop-blur-sm"
//             style={{
//                 background: "linear-gradient(180deg, #121a18 0%, #0d1312 100%)",
//                 border: "1px solid #1E2A27",
//                 boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(47,224,196,0.03)",
//             }}
//         >
//             <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full" style={{ background: "#2FE0C4" }} />
//                     <span className="text-[11px] font-mono tracking-wider" style={{ color: "#93A6A1" }}>
//                         EzDashboard · live
//                     </span>
//                 </div>
//                 <span className="text-[10px] font-mono" style={{ color: "#5C716C" }}>
//                     v1.2
//                 </span>
//             </div>

//             <div className="flex items-end gap-2 h-24 mb-4">
//                 {bars.map((h, i) => (
//                     <motion.div
//                         key={i}
//                         initial={{ height: 0 }}
//                         animate={{ height: `${h}%` }}
//                         transition={{ duration: 0.8, delay: 0.6 + i * 0.06, ease: "easeOut" }}
//                         className="flex-1 rounded-t-sm"
//                         style={{
//                             background:
//                                 i === 3
//                                     ? "linear-gradient(180deg, #2FE0C4 0%, #1B8F7C 100%)"
//                                     : "#1B2523",
//                         }}
//                     />
//                 ))}
//             </div>

//             <div className="grid grid-cols-3 gap-3">
//                 {[
//                     { label: "Uptime", value: "99.9%" },
//                     { label: "Users", value: "12.4k" },
//                     { label: "Latency", value: "82ms" },
//                 ].map((stat) => (
//                     <div key={stat.label} className="rounded-lg p-2.5" style={{ background: "#0F1614", border: "1px solid #1a2422" }}>
//                         <p className="text-[9px] font-mono uppercase tracking-wider mb-1" style={{ color: "#5C716C" }}>
//                             {stat.label}
//                         </p>
//                         <p className="text-sm font-semibold" style={{ color: "#EAF3F0", fontFamily: "Sora, sans-serif" }}>
//                             {stat.value}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             <motion.div
//                 className="absolute -top-3 -right-3 w-16 h-16 rounded-full blur-2xl"
//                 style={{ background: "#2FE0C4" }}
//                 animate={{ opacity: [0.15, 0.35, 0.15] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />
//         </motion.div>
//     );
// }

// /* ---------- Hero ---------- */
// function Hero() {
//     return (
//         <section
//             id="hero"
//             className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-28 pb-16 overflow-hidden"
//         >
//             <div
//                 className="absolute inset-0 -z-10 opacity-[0.35]"
//                 style={{
//                     backgroundImage:
//                         "radial-gradient(circle at 1px 1px, rgba(47,224,196,0.08) 1px, transparent 0)",
//                     backgroundSize: "36px 36px",
//                 }}
//             />
//             <div
//                 className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] -z-10"
//                 style={{ background: "rgba(47,224,196,0.07)" }}
//             />

//             <div className="w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
//                 <div>
//                     <Reveal>
//                         <div
//                             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
//                             style={{ border: "1px solid #1E2A27", background: "#0F1614" }}
//                         >
//                             <span className="relative flex h-1.5 w-1.5">
//                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#2FE0C4" }} />
//                                 <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#2FE0C4" }} />
//                             </span>
//                             <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: "#93A6A1" }}>
//                                 Available for work
//                             </span>
//                         </div>
//                     </Reveal>

//                     <Reveal delay={0.08}>
//                         <h1
//                             className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-6"
//                             style={{ color: "#EAF3F0", fontFamily: "Sora, sans-serif" }}
//                         >
//                             Mohammad
//                             <br />
//                             <span style={{ color: "#2FE0C4" }}>Mubassir</span>.
//                         </h1>
//                     </Reveal>

//                     <Reveal delay={0.16}>
//                         <p
//                             className="text-lg md:text-xl mb-3 font-medium"
//                             style={{ color: "#C7D6D2", fontFamily: "Sora, sans-serif" }}
//                         >
//                             Full Stack Developer — 7+ years of experience
//                         </p>
//                     </Reveal>

//                     <Reveal delay={0.22}>
//                         <p
//                             className="text-base leading-relaxed max-w-lg mb-10"
//                             style={{ color: "#7C948F" }}
//                         >
//                             I design and build reliable web products end-to-end — from REST
//                             APIs and databases to fast, polished interfaces. Currently
//                             building{" "}
//                             <span style={{ color: "#93A6A1" }}>EzDashboard</span>, a React
//                             library for shipping dashboards without the boilerplate.
//                         </p>
//                     </Reveal>

//                     <Reveal delay={0.3}>
//                         <div className="flex flex-wrap items-center gap-4">
//                             <motion.a
//                                 href="#contact"
//                                 whileHover={{ y: -2 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
//                                 style={{ background: "#2FE0C4", color: "#08110F" }}
//                             >
//                                 Get in touch
//                                 <ArrowUpRight size={16} />
//                             </motion.a>
//                             <motion.a
//                                 href="#projects"
//                                 whileHover={{ y: -2, borderColor: "#2FE0C4" }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
//                                 style={{ border: "1px solid #1E2A27", color: "#C7D6D2" }}
//                             >
//                                 View work
//                             </motion.a>
//                         </div>
//                     </Reveal>
//                 </div>

//                 <div className="flex justify-center lg:justify-end">
//                     <DashboardWidget />
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ---------- Skills ---------- */
// function SkillCard({ skill, index }) {
//     const Icon = skill.icon;
//     return (
//         <Reveal delay={index * 0.06}>
//             <motion.div
//                 whileHover={{ y: -6, borderColor: "#2FE0C4" }}
//                 transition={{ duration: 0.25 }}
//                 className="group rounded-2xl p-6 h-full"
//                 style={{ background: "#0F1614", border: "1px solid #1E2A27" }}
//             >
//                 <div
//                     className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
//                     style={{ background: "#141B19", border: "1px solid #1E2A27" }}
//                 >
//                     <Icon size={18} style={{ color: "#2FE0C4" }} />
//                 </div>
//                 <h3
//                     className="text-base font-medium mb-3"
//                     style={{ color: "#EAF3F0", fontFamily: "Sora, sans-serif" }}
//                 >
//                     {skill.name}
//                 </h3>
//                 <div className="flex gap-1.5">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                         <span
//                             key={i}
//                             className="h-1 flex-1 rounded-full"
//                             style={{
//                                 background: i < skill.level ? "#2FE0C4" : "#1E2A27",
//                             }}
//                         />
//                     ))}
//                 </div>
//             </motion.div>
//         </Reveal>
//     );
// }

// function Skills() {
//     return (
//         <section id="skills" className="relative px-6 md:px-16 lg:px-24 py-28">
//             <Reveal>
//                 <div className="flex items-center gap-3 mb-3">
//                     <Terminal size={14} style={{ color: "#2FE0C4" }} />
//                     <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: "#5C716C" }}>
//                         Stack
//                     </span>
//                 </div>
//             </Reveal>
//             <Reveal delay={0.05}>
//                 <h2
//                     className="text-3xl md:text-4xl font-medium mb-14 max-w-xl"
//                     style={{ color: "#EAF3F0", fontFamily: "Sora, sans-serif" }}
//                 >
//                     Tools I reach for, every day.
//                 </h2>
//             </Reveal>

//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {SKILLS.map((skill, i) => (
//                     <SkillCard skill={skill} index={i} key={skill.name} />
//                 ))}
//             </div>
//         </section>
//     );
// }

// /* ---------- Projects ---------- */
// function MiniPreview() {
//     const rows = [60, 85, 45, 95, 70];
//     return (
//         <div
//             className="w-full h-full rounded-2xl p-6 flex flex-col justify-center gap-3"
//             style={{ background: "#0F1614", border: "1px solid #1E2A27" }}
//         >
//             {rows.map((w, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                     <div className="w-2 h-2 rounded-full shrink-0" style={{ background: i === 3 ? "#2FE0C4" : "#2A3835" }} />
//                     <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${w}%` }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
//                         className="h-2 rounded-full"
//                         style={{ background: i === 3 ? "#2FE0C4" : "#1E2A27" }}
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }

// function Projects() {
//     const tags = ["React", "Component Library", "Dashboards", "Open Source"];
//     return (
//         <section id="projects" className="relative px-6 md:px-16 lg:px-24 py-28">
//             <Reveal>
//                 <div className="flex items-center gap-3 mb-3">
//                     <Terminal size={14} style={{ color: "#2FE0C4" }} />
//                     <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: "#5C716C" }}>
//                         Selected work
//                     </span>
//                 </div>
//             </Reveal>
//             <Reveal delay={0.05}>
//                 <h2
//                     className="text-3xl md:text-4xl font-medium mb-14 max-w-xl"
//                     style={{ color: "#EAF3F0", fontFamily: "Sora, sans-serif" }}
//                 >
//                     A project I've been building.
//                 </h2>
//             </Reveal>

//             <Reveal delay={0.1}>
//                 <motion.div
//                     whileHover={{ borderColor: "#2FE0C4" }}
//                     transition={{ duration: 0.3 }}
//                     className="grid md:grid-cols-2 gap-10 md:gap-14 items-center rounded-3xl p-8 md:p-12"
//                     style={{ background: "#0B100F", border: "1px solid #1E2A27" }}
//                 >
//                     <div>
//                         <p className="text-[11px] font-mono tracking-widest uppercase mb-4" style={{ color: "#5C716C" }}>
//                             01 · Featured
//                         </p>
//                         <h3
//                             className="text-2xl md:text-3xl font-medium mb-4"
//                             style={{ color: "#EAF3F0", fontFamily: "Sora, sans-serif" }}
//                         >
//                             EzDashboard
//                         </h3>
//                         <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "#7C948F" }}>
//                             A React library for building dashboards quickly — pre-built
//                             layout primitives, charts, and data widgets so teams can ship
//                             admin panels and analytics screens without reinventing the
//                             same UI every time.
//                         </p>
//                         <div className="flex flex-wrap gap-2 mb-8">
//                             {tags.map((t) => (
//                                 <span
//                                     key={t}
//                                     className="text-[11px] font-mono px-2.5 py-1 rounded-full"
//                                     style={{ color: "#93A6A1", border: "1px solid #1E2A27" }}
//                                 >
//                                     {t}
//                                 </span>
//                             ))}
//                         </div>
//                         <div className="flex gap-3">
//                             <motion.a
//                                 href="#"
//                                 whileHover={{ y: -2 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
//                                 style={{ background: "#2FE0C4", color: "#08110F" }}
//                             >
//                                 <Github size={15} />
//                                 Repository
//                             </motion.a>
//                             <motion.a
//                                 href="#"
//                                 whileHover={{ y: -2, borderColor: "#2FE0C4" }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
//                                 style={{ border: "1px solid #1E2A27", color: "#C7D6D2" }}
//                             >
//                                 Live demo
//                                 <ArrowUpRight size={14} />
//                             </motion.a>
//                         </div>
//                     </div>
//                     <div className="h-64 md:h-72">
//                         <MiniPreview />
//                     </div>
//                 </motion.div>
//             </Reveal>
//         </section>
//     );
// }

// /* ---------- Contact ---------- */
// function ContactForm() {
//     const [form, setForm] = useState({ name: "", email: "", message: "" });
//     const [status, setStatus] = useState("idle"); // idle | sending | sent

//     const onSubmit = (e) => {
//         e.preventDefault();
//         if (!form.name || !form.email || !form.message) return;
//         setStatus("sending");
//         setTimeout(() => {
//             setStatus("sent");
//             setTimeout(() => {
//                 setStatus("idle");
//                 setForm({ name: "", email: "", message: "" });
//             }, 2200);
//         }, 900);
//     };

//     const inputClass =
//         "w-full bg-transparent text-sm py-3 px-4 rounded-xl outline-none transition-colors duration-200";

//     return (
//         <form onSubmit={onSubmit} className="flex flex-col gap-4">
//             <input
//                 type="text"
//                 placeholder="Your name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className={inputClass}
//                 style={{ border: "1px solid #1E2A27", color: "#EAF3F0" }}
//                 onFocus={(e) => (e.target.style.borderColor = "#2FE0C4")}
//                 onBlur={(e) => (e.target.style.borderColor = "#1E2A27")}
//             />
//             <input
//                 type="email"
//                 placeholder="Email address"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className={inputClass}
//                 style={{ border: "1px solid #1E2A27", color: "#EAF3F0" }}
//                 onFocus={(e) => (e.target.style.borderColor = "#2FE0C4")}
//                 onBlur={(e) => (e.target.style.borderColor = "#1E2A27")}
//             />
//             <textarea
//                 placeholder="Tell me about your project"
//                 rows={4}
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className={inputClass + " resize-none"}
//                 style={{ border: "1px solid #1E2A27", color: "#EAF3F0" }}
//                 onFocus={(e) => (e.target.style.borderColor = "#2FE0C4")}
//                 onBlur={(e) => (e.target.style.borderColor = "#1E2A27")}
//             />
//             <motion.button
//                 type="submit"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 disabled={status !== "idle"}
//                 className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium mt-2"
//                 style={{
//                     background: status === "sent" ? "#141B19" : "#2FE0C4",
//                     color: status === "sent" ? "#2FE0C4" : "#08110F",
//                     border: status === "sent" ? "1px solid #2FE0C4" : "none",
//                 }}
//             >
//                 <AnimatePresence mode="wait" initial={false}>
//                     {status === "sent" ? (
//                         <motion.span
//                             key="sent"
//                             initial={{ opacity: 0, y: 6 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -6 }}
//                             className="inline-flex items-center gap-2"
//                         >
//                             <CheckCircle2 size={16} />
//                             Message sent
//                         </motion.span>
//                     ) : (
//                         <motion.span
//                             key="idle"
//                             initial={{ opacity: 0, y: 6 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -6 }}
//                             className="inline-flex items-center gap-2"
//                         >
//                             <Send size={15} />
//                             {status === "sending" ? "Sending…" : "Send message"}
//                         </motion.span>
//                     )}
//                 </AnimatePresence>
//             </motion.button>
//         </form>
//     );
// }

// function ContactLinks() {
//     const links = [
//         { label: "Email", value: "mubassir.dev@gmail.com", icon: Mail, href: "mailto:mubassir.dev@gmail.com" },
//         { label: "GitHub", value: "github.com/mohammad-mubassir", icon: Github, href: "https://github.com/mohammad-mubassir" },
//         { label: "LinkedIn", value: "linkedin.com/in/mohammad-mubassir", icon: Linkedin, href: "https://linkedin.com/in/mohammad-mubassir" },
//         { label: "Instagram", value: "@mohammad.mubassir", icon: Instagram, href: "https://instagram.com/mohammad.mubassir" },
//     ];
//     return (
//         <div className="flex flex-col">
//             {links.map((l, i) => {
//                 const Icon = l.icon;
//                 return (
//                     <motion.a
//                         key={l.label}
//                         href={l.href}
//                         target="_blank"
//                         rel="noreferrer"
//                         whileHover={{ x: 6 }}
//                         className="group flex items-center justify-between py-4"
//                         style={{ borderBottom: i < links.length - 1 ? "1px solid #1E2A27" : "none" }}
//                     >
//                         <div className="flex items-center gap-4">
//                             <div
//                                 className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300"
//                                 style={{ background: "#0F1614", border: "1px solid #1E2A27" }}
//                             >
//                                 <Icon size={15} style={{ color: "#2FE0C4" }} />
//                             </div>
//                             <div>
//                                 <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "#5C716C" }}>
//                                     {l.label}
//                                 </p>
//                                 <p className="text-sm" style={{ color: "#C7D6D2" }}>
//                                     {l.value}
//                                 </p>
//                             </div>
//                         </div>
//                         <ArrowUpRight
//                             size={16}
//                             className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                             style={{ color: "#2FE0C4" }}
//                         />
//                     </motion.a>
//                 );
//             })}
//         </div>
//     );
// }

// function Contact() {
//     return (
//         <section id="contact" className="relative px-6 md:px-16 lg:px-24 py-28">
//             <Reveal>
//                 <div className="flex items-center gap-3 mb-3">
//                     <Terminal size={14} style={{ color: "#2FE0C4" }} />
//                     <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: "#5C716C" }}>
//                         Get in touch
//                     </span>
//                 </div>
//             </Reveal>
//             <Reveal delay={0.05}>
//                 <h2
//                     className="text-3xl md:text-4xl font-medium mb-14 max-w-xl"
//                     style={{ color: "#EAF3F0", fontFamily: "Sora, sans-serif" }}
//                 >
//                     Let's build something reliable.
//                 </h2>
//             </Reveal>

//             <div className="grid md:grid-cols-2 gap-14">
//                 <Reveal delay={0.1}>
//                     <ContactForm />
//                 </Reveal>
//                 <Reveal delay={0.15}>
//                     <ContactLinks />
//                 </Reveal>
//             </div>
//         </section>
//     );
// }

// /* ---------- Footer ---------- */
// function Footer() {
//     const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
//     return (
//         <footer
//             className="px-6 md:px-16 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
//             style={{ borderTop: "1px solid #1E2A27" }}
//         >
//             <p className="text-xs" style={{ color: "#5C716C" }}>
//                 © 2026 Mohammad Mubassir. Built with React &amp; Tailwind CSS.
//             </p>
//             <motion.button
//                 onClick={scrollTop}
//                 whileHover={{ y: -3, borderColor: "#2FE0C4" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono"
//                 style={{ border: "1px solid #1E2A27", color: "#93A6A1" }}
//             >
//                 <ArrowUp size={13} />
//                 Back to top
//             </motion.button>
//         </footer>
//     );
// }

// /* ---------- App ---------- */
// export default function Portfolio() {
//     const [active, setActive] = useState("hero");

//     useEffect(() => {
//         const observers = [];
//         SECTIONS.forEach((id) => {
//             const el = document.getElementById(id);
//             if (!el) return;
//             const obs = new IntersectionObserver(
//                 ([entry]) => {
//                     if (entry.isIntersecting) setActive(id);
//                 },
//                 { threshold: 0.4 }
//             );
//             obs.observe(el);
//             observers.push(obs);
//         });
//         return () => observers.forEach((o) => o.disconnect());
//     }, []);

//     return (
//         <div
//             className="min-h-screen w-full relative"
//             style={{ background: "#0A0F0E", fontFamily: "Inter, sans-serif" }}
//         >
//             <style>{FONT_IMPORT}</style>
//             <ProgressBar />
//             <CursorGlow />
//             <SideNav active={active} />
//             <Hero />
//             <Skills />
//             <Projects />
//             <Contact />
//             <Footer />
//         </div>
//     );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page