function Contact() {
  return (
    <section className="bg-amber-100 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          Me contacter
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Vous souhaitez passer une commande ou obtenir des informations sur nos
          différentes prestations ? Envoyez-nous votre message, nous vous
          répondrons dans les plus brefs délais.
        </p>

        <form className="mt-12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-gray-700">
              Nom
            </label>

            <input
              id="name"
              type="text"
              placeholder="Votre nom"
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-gray-700">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="votre@email.com"
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium text-gray-700">
              Message
            </label>

            <textarea
              id="message"
              rows={6}
              placeholder="Décrivez votre demande..."
              className="resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;