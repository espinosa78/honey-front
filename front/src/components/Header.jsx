function Header() {
  return (
    <header className="flex justify-between bg-amber-200 px-8 py-5">
      <h1 className="text-amber-900 font-extrabold text-lg">Honey Pastry</h1>
      <nav>
        <ul className="flex gap-2 text-amber-900 font-bold">
          <li>
            <a className="cursor-pointer">About</a>
          </li>
          <li>
            <a className="cursor-pointer">Products</a>
          </li>
          <li>
            <a className="cursor-pointer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;