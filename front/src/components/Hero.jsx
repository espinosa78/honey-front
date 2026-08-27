import hero from "../assets/images/hero.webp";

function Banner() {
  return (
    <section className="bg-[#F9F5F6]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-30">
        <div>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Des créations gourmandes pour vos moments précieux
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Cookies, cupcakes et créations personnalisées pour accompagner vos
            plus belles occasions, des petites attentions aux grands événements.
          </p>

          <a
            href="#services"
            className="mt-8 inline-block rounded-xl bg-[#fc76a7] px-6 py-3 font-semibold text-white transition hover:bg-[#f19bc4]"
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