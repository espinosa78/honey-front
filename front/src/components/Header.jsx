import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecte le scroll de la page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Ferme le menu avec la touche Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Empêche le scroll de la page lorsque le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-amber-100 bg-amber-50/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="relative z-50 text-2xl font-bold tracking-tight text-amber-900 transition-colors duration-200 hover:text-amber-600"
        >
          Honey Pastry
        </a>

        {/* Navigation desktop */}
        <nav className="hidden sm:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-7 text-sm font-semibold text-gray-700">
            <li>
              <a
                href="#about"
                className="group relative py-2 transition-colors duration-200 hover:text-amber-600"
              >
                À propos

                <span className="absolute bottom-0 left-0 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="group relative py-2 transition-colors duration-200 hover:text-amber-600"
              >
                Prestations

                <span className="absolute bottom-0 left-0 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="group relative py-2 transition-colors duration-200 hover:text-amber-600"
              >
                Nous contacter

                <span className="absolute bottom-0 left-0 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          </ul>
        </nav>

        {/* Bouton mobile */}
        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="relative z-50 text-amber-900 transition-colors duration-200 hover:text-amber-600 sm:hidden"
        >
          {isOpen ? (
            <IoIosClose size={32} />
          ) : (
            <RxHamburgerMenu size={25} />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        aria-label="Navigation mobile"
        className={`fixed inset-0 z-40 flex min-h-screen flex-col items-center justify-center bg-amber-50/95 backdrop-blur-xl transition-all duration-300 sm:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-xl font-semibold text-gray-700">
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="transition-colors duration-200 hover:text-amber-600"
            >
              À propos
            </a>
          </li>

          <li>
            <a
              href="#services"
              onClick={closeMenu}
              className="transition-colors duration-200 hover:text-amber-600"
            >
              Prestations
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="transition-colors duration-200 hover:text-amber-600"
            >
              Nous contacter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;