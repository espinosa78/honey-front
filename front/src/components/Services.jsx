function Services() {
  return (
    <section id="services" className="scroll-mt-14 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Ce que nous proposons
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Nos prestations
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Des créations gourmandes et des événements imaginés avec soin pour
            rendre chaque occasion encore plus spéciale.
          </p>
        </div>

        {/* Service 1 */}
        <div className="mt-16 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              01
            </p>

            <h3 className="mt-3 text-3xl font-bold text-gray-900">
              Cookies artisanaux
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Découvrez nos cookies gourmands, préparés avec soin et déclinés
              selon différentes saveurs. Pour une petite envie sucrée ou pour
              accompagner un événement, chaque création est pensée pour être
              aussi belle que délicieuse.
            </p>

            <button
              type="button"
              className="mt-6 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
            >
              En savoir plus
            </button>
          </div>

          <div className="aspect-square overflow-hidden rounded-2xl bg-amber-100">
            {/* Carousel à venir */}
          </div>
        </div>

        {/* Service 2 */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 aspect-square overflow-hidden rounded-2xl bg-amber-100 md:order-1">
            {/* Carousel à venir */}
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              02
            </p>

            <h3 className="mt-3 text-3xl font-bold text-gray-900">
              Cupcakes & créations gourmandes
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Des cupcakes personnalisés et autres douceurs réalisés pour
              s'adapter à vos envies, vos couleurs et votre thème. Une façon
              gourmande d'apporter une touche personnelle à chaque occasion.
            </p>

            <button
              type="button"
              className="mt-6 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
            >
              En savoir plus
            </button>
          </div>
        </div>

        {/* Service 3 */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              03
            </p>

            <h3 className="mt-3 text-3xl font-bold text-gray-900">
              Événements & célébrations
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Baby shower, anniversaire ou autre événement particulier : nous
              vous accompagnons dans la création d'une ambiance unique et
              personnalisée pour célébrer vos moments importants.
            </p>

            <button
              type="button"
              className="mt-6 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
            >
              En savoir plus
            </button>
          </div>

          <div className="aspect-square overflow-hidden rounded-2xl bg-amber-100">
            {/* Carousel à venir */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;