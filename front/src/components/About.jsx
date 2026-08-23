function About() {
  return (
    <section id="about" className="scroll-mt-14 bg-amber-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Notre univers
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Des créations gourmandes pour vos moments précieux
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Nous créons avec passion des douceurs artisanales pensées pour
            accompagner vos plus beaux moments. Cookies, cupcakes et autres
            créations gourmandes sont réalisés avec soin pour apporter une
            touche unique à vos envies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Des créations sur mesure
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Que ce soit pour une envie gourmande, un anniversaire ou une
              occasion particulière, nous imaginons des créations adaptées à
              votre univers, vos goûts et votre événement.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Des événements inoubliables
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Nous vous accompagnons également dans l'organisation de moments
              uniques comme les baby showers, anniversaires et autres
              célébrations, avec une attention particulière portée aux détails.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;