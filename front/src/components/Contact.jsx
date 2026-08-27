import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const form = e.target;
      const data = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire.");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError(true);
    }

    console.log(formData);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est obligatoire.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'adresse e-mail est obligatoire.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide."
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est obligatoire.";
    }

    return newErrors;
  }

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

        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit} 
          className="mt-12 flex flex-col gap-6"
        >
          <input type="hidden" name="form-name" value="contact" />

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
              className={`rounded-xl border bg-white px-4 py-3 outline-none transition ${errors.name ? "border-[#D96C8A]" : "border-gray-300 focus:border-[#fc76a7]"} `}
            />

            {errors.name && (
              <p className="text-sm text-[#D96C8A]">
                {errors.name}
              </p>
            )} 
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
              className={`rounded-xl border bg-white px-4 py-3 outline-none transition ${errors.name ? "border-[#D96C8A]" : "border-gray-300 focus:border-[#fc76a7]"} `}
            />

            {errors.email && (
              <p className="text-sm text-[#D96C8A]">
                {errors.email}
              </p>
            )} 
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
              className={`rounded-xl border bg-white px-4 py-3 outline-none transition ${errors.name ? "border-[#D96C8A]" : "resize-none border-gray-300 focus:border-[#fc76a7]"}`}
            />

            {errors.message && (
              <p className="text-sm text-[#D96C8A]">
                {errors.message}
              </p>
            )} 
          </div>

          <button
            type="submit"
            className="rounded-xl bg-[#fc76a7] px-6 py-3 font-semibold text-white transition hover:bg-[#f19bc4]"
          >
            Envoyer le message
          </button>
        </form>

        {isSubmitted && (
          <p className="mt-6 text-center font-medium text-[#6F8F7A]">
            Votre message a bien été envoyé !
          </p>
        )}

        {submitError && (
          <p className="mt-6 text-center font-medium text-[#D96C8A]">
            Une erreur est survenue. Veuillez réessayer.
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;