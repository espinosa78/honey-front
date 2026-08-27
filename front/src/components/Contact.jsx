import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section id="contact" className="scroll-mt-14 bg-[#F9F5F6] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          Nous contacter
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Vous souhaitez passer une commande ou obtenir des informations sur nos
          différentes prestations ? Envoyez-nous votre message, nous vous
          répondrons dans les plus brefs délais.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-gray-700">
              Nom
            </label>

            <input
              id="name"
              type="text"
              placeholder="Votre nom"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#fc76a7]"
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#fc76a7]"
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
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#fc76a7]"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-[#fc76a7] px-6 py-3 font-semibold text-white transition hover:bg-[#f19bc4]"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;