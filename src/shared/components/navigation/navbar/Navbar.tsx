import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import iconeLogo from "../../../../assets/brand/icone-logo.svg";
import styles from './Navbar.module.css';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({
        left: "0px",
        width: "0px",
    });

    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = {
        hero: useRef<HTMLAnchorElement>(null),
        about: useRef<HTMLAnchorElement>(null),
        concepts: useRef<HTMLAnchorElement>(null),
        book: useRef<HTMLAnchorElement>(null),
    };

    useEffect(() => {
        const sections = ["hero", "about", "concepts", "book"];

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
                                href="#hero"
                                ref={linksRef.hero}
                                className={navItemClass("hero")}
                            >
                                Início
                            </a>
                            <a
                                href="#about"
                                ref={linksRef.about}
                                className={navItemClass("about")}
                            >
                                Sobre
                            </a>
                            <a
                                href="#concepts"
                                ref={linksRef.concepts}
                                className={navItemClass("concepts")}
                            >
                                Conceitos
                            </a>
                            <a
                                href="#book"
                                ref={linksRef.book}
                                className={navItemClass("book")}
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
                            href="#hero"
                            className={navItemClass("hero")}
                        >
                            Início
                        </a>
                        <a
                            onClick={() => setIsOpen(false)}
                            href="#about"
                            className={navItemClass("about")}
                        >
                            Sobre
                        </a>
                        <a
                            onClick={() => setIsOpen(false)}
                            href="#concepts"
                            className={navItemClass("concepts")}
                        >
                            Conceitos
                        </a>
                        <a
                            onClick={() => setIsOpen(false)}
                            href="#book"
                            className={navItemClass("book")}
                        >
                            Livro das Formas de Expressão
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}