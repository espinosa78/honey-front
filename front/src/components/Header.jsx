function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50border-b border-amber-100 bg-amber-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-amber-900 transition-colors hover:text-amber-600"
        >
          Honey Pastry
        </a>

        <nav>
          <ul className="flex items-center gap-6 text-sm font-semibold text-gray-700">
            <li>
              <a
                href="#about"
                className="transition-colors hover:text-amber-600"
              >
                À propos
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="transition-colors hover:text-amber-600"
              >
                Prestations
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-amber-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;