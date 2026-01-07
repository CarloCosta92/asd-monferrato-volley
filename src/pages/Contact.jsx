import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { contactSchema } from "../schemas/ContactShema";
import Button from "../components/Button";
import CallToAction from "../components/CalltoAction";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log("Submit triggered!", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Indirizzo",
      content: "Via dello Sport 123, Milano",
      gradient: "from-(--color-primary) to-(--color-secondary)",
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "+39 02 1234567",
      gradient: "from-(--color-secondary) to-(--color-primary-dark)",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@asdmonferratovolle.it",
      gradient: "from-(--color-primary) to-(--color-secondary)",
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-(--color-bg-main) text-(--color-text)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titolo */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white mb-6">
            Contattaci{" "}
            <span className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
              Ora
            </span>
          </h1>
          <p className="text-xl text-(--color-text-muted) max-w-2xl mx-auto">
            Hai domande? Vuoi unirti a noi? Compila il form o contattaci
            direttamente.
          </p>
        </div>

        {/* Info contatti */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="relative group">
              <div
                className={`absolute inset-0 bg-linear-to-r ${info.gradient} rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity`}
              ></div>
              <div className="relative bg-(--color-bg-alt)/80 backdrop-blur-sm p-8 rounded-2xl border border-(--color-border) hover:border-(--color-primary)/50 transition-all duration-300 text-center">
                <div className="inline-flex p-4 bg-linear-to-r from-(--color-primary) to-(--color-secondary) rounded-full mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-(--color-text) mb-2">
                  {info.title}
                </h3>
                <p className="text-(--color-text-muted)">{info.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-(--color-primary) to-(--color-secondary) rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-(--color-bg-alt)/80 backdrop-blur-sm p-8 rounded-3xl border border-(--color-border)">
              <h2 className="text-3xl font-bold text-(--color-text) mb-6">
                Invia un Messaggio
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-(--color-primary)/20 border border-(--color-primary)/50 rounded-xl text-(--color-primary)">
                  Messaggio inviato con successo!
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {["name", "email", "phone", "subject"].map((field) => (
                  <div key={field}>
                    <label className="block text-(--color-text) font-medium mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      {...register(field)}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      placeholder={
                        field === "email"
                          ? "mario.rossi@email.it"
                          : field === "phone"
                          ? "+39 123 4567890"
                          : "Mario Rossi"
                      }
                      className="w-full px-4 py-3 bg-(--color-bg-alt)/50 border border-(--color-border) rounded-xl text-(--color-text) placeholder-(--color-text-muted) focus:outline-none focus:border-(--color-primary) transition-colors"
                    />
                    {errors[field] && (
                      <p className="mt-2 text-red-400 text-sm">
                        {errors[field]?.message}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-(--color-text) font-medium mb-2">
                    Messaggio
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Scrivi qui il tuo messaggio..."
                    className="w-full px-4 py-3 bg-(--color-bg-alt)/50 border border-(--color-border) rounded-xl text-(--color-text) placeholder-(--color-text-muted) focus:outline-none focus:border-(--color-primary) transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="mt-2 text-red-400 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
                </Button>
              </form>
            </div>
          </div>

          {/* Info laterali: Orari + Mappa */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-(--color-primary) to-(--color-secondary) rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-(--color-bg-alt)/80 backdrop-blur-sm p-8 rounded-3xl border border-(--color-border)">
                <h3 className="text-2xl font-bold text-(--color-text) mb-4">
                  Orari di Apertura
                </h3>
                <div className="space-y-3 text-(--color-text-muted)">
                  <div className="flex justify-between py-2 border-b border-(--color-border)">
                    <span>Lunedì - Venerdì</span>
                    <span className="font-semibold text-(--color-primary)">
                      15:00 - 22:00
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-(--color-border)">
                    <span>Sabato</span>
                    <span className="font-semibold text-(--color-primary)">
                      09:00 - 20:00
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Domenica</span>
                    <span className="font-semibold text-(--color-primary)">
                      09:00 - 13:00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-(--color-secondary) to-(--color-primary) rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-(--color-bg-alt)/80 backdrop-blur-sm p-8 rounded-3xl border border-(--color-border)">
                <h3 className="text-2xl font-bold text-(--color-text) mb-4">
                  Vieni a Trovarci
                </h3>
                <p className="text-(--color-text-muted) leading-relaxed mb-6">
                  La nostra palestra è situata nel cuore di Milano, facilmente
                  raggiungibile con i mezzi pubblici. Siamo a soli 5 minuti
                  dalla fermata della metropolitana.
                </p>
                <div className="aspect-video bg-(--color-bg-alt)/50 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0!2d9.19!3d45.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzM2LjAiTiA5wrAxMScyNC4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
      </div>
    </div>
  );
};

export default Contact;
