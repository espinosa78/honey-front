import hero from "../assets/images/hero.webp";

function Banner() {
  return (
    <section className="bg-amber-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Honey Pastry
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Des créations gourmandes pour vos moments précieux
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Cookies, cupcakes et créations personnalisées pour accompagner vos
            plus belles occasions, des petites attentions aux grands événements.
          </p>

          <a
            href="#services"
            className="mt-8 inline-block rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            Découvrir nos prestations
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            src={hero}
            alt="Création gourmande réalisée par Honey Pastry"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;