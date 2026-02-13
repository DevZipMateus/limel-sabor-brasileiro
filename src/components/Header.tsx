import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
{ label: "Início", href: "#inicio" },
{ label: "Sobre", href: "#sobre" },
{ label: "Produtos", href: "#produtos" },
{ label: "Vitrine", href: "/vitrine" },
{ label: "Mercado", href: "#mercado" },
{ label: "Contato", href: "#contato" }];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border ${
      scrolled ? "shadow-md" : ""}`
      }>

      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 md:h-20">
        <a
          href="/"
          onClick={(e) => {e.preventDefault();if (location.pathname === "/") {window.scrollTo({ top: 0, behavior: "smooth" });} else {navigate("/");}}}
          className="flex items-center gap-2">

          <img src={logo} alt="Logo Sorvetes Limel" className="h-7 sm:h-10 md:h-14 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) =>
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-foreground/80 hover:text-primary font-medium transition-colors text-xs lg:text-sm whitespace-nowrap">

              {item.label}
            </a>
          )}
          <a
            href="https://wa.me/5511965328237"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 lg:px-5 py-2 rounded-full font-semibold text-xs lg:text-sm hover:opacity-90 transition-opacity whitespace-nowrap">

            Fale conosco
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>

          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen &&
      <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-5 py-3 flex flex-col gap-1">
            {navItems.map((item) =>
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-foreground/80 hover:text-primary font-medium transition-colors py-2.5 text-sm">

                {item.label}
              </a>
          )}
            <a
            href="https://wa.me/5511965328237"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm text-center hover:opacity-90 transition-opacity mt-2">

              Fale conosco
            </a>
          </nav>
        </div>
      }
    </header>);

};

export default Header;