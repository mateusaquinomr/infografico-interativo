import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import iconeLogo from "../../../../assets/icone-logo.svg";
import styles from './Header.module.css';

export default function Header() {
    const [activeSection, setActiveSection] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({
        left: "0px",
        width: "0px",
    });

    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = {
        inicio: useRef<HTMLAnchorElement>(null),
        sobre: useRef<HTMLAnchorElement>(null),
        conceitos: useRef<HTMLAnchorElement>(null),
        livro: useRef<HTMLAnchorElement>(null),
    };

    useEffect(() => {
        const sections = ["inicio", "sobre", "conceitos", "livro"];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const id of sections) {
                const section = document.getElementById(id);

                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const ref = linksRef[activeSection as keyof typeof linksRef];

        if (ref?.current && navRef.current) {
            const rect = ref.current.getBoundingClientRect();
            const navRect = navRef.current.getBoundingClientRect();

            setIndicatorStyle({
                left: `${rect.left - navRect.left}px`,
                width: `${rect.width}px`,
            });
        }
    }, [activeSection]);

    const navItemClass = (id: string) =>
        `py-1 transition-colors duration-300 hover:text-blue-200 ${activeSection === id ? "text-blue-200 font-semibold" : ""
        }`;

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50 text-base bg-[#465FB9] text-white shadow">
            <div className="container mx-auto px-4 relative">
                <div className="flex justify-between items-center py-4">
                    <img
                        src={iconeLogo}
                        alt="Ícone logo"
                        className="w-12 h-12 md:hidden cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    />

                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white"
                        aria-label="Abrir menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <div className="hidden md:flex justify-center items-center w-full">
                        <nav
                            ref={navRef}
                            className="w-[100%] flex gap-12 relative justify-center"
                        >
                            <a
                                href="#inicio"
                                ref={linksRef.inicio}
                                className={navItemClass("inicio")}
                            >
                                Início
                            </a>
                            <a
                                href="#sobre"
                                ref={linksRef.sobre}
                                className={navItemClass("sobre")}
                            >
                                Sobre
                            </a>
                            <a
                                href="#conceitos"
                                ref={linksRef.conceitos}
                                className={navItemClass("conceitos")}
                            >
                                Conceitos
                            </a>
                            <a
                                href="#livro"
                                ref={linksRef.livro}
                                className={navItemClass("livro")}
                            >
                                Livro das Formas de Expressão
                            </a>

                            <span
                                className={styles.indicator}
                                style={indicatorStyle}
                            />
                        </nav>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden flex flex-col space-y-3 pb-4">
                        <a
                            onClick={() => setIsOpen(false)}
                            href="#inicio"
                            className={navItemClass("inicio")}
                        >
                            Início
                        </a>
                        <a
                            onClick={() => setIsOpen(false)}
                            href="#sobre"
                            className={navItemClass("sobre")}
                        >
                            Sobre
                        </a>
                        <a
                            onClick={() => setIsOpen(false)}
                            href="#conceitos"
                            className={navItemClass("conceitos")}
                        >
                            Conceitos
                        </a>
                        <a
                            onClick={() => setIsOpen(false)}
                            href="#livro"
                            className={navItemClass("livro")}
                        >
                            Livro das Formas de Expressão
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}