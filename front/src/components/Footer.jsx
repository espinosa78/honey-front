import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-amber-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold tracking-tight text-amber-900">
            Honey Pastry
          </h3>

          <p className="mt-4 max-w-md leading-7 text-gray-600">
            Des créations gourmandes réalisées avec passion pour accompagner
            tous vos plus beaux événements.
          </p>

          <ul className="mt-8 flex items-center gap-8">
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 transition-colors hover:text-amber-600"
              >
                <FaInstagram size={22} />
                <span>Instagram</span>
              </a>
            </li>

            <li>
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 transition-colors hover:text-amber-600"
              >
                <FaTiktok size={20} />
                <span>TikTok</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 border-t border-amber-100 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2026 Honey Pastry. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;