function MenuMobile({ isOpen, closeMenu }) {
  return (
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
  )
}

export default MenuMobile;