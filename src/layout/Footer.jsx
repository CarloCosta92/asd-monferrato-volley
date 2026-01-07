import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-(--color-bg-main) to-(--color-bg-alt) border-t border-(--color-border) mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 text-(--color-text)">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-(--color-primary) mb-4">
              Asd Monferrato Volley
            </h3>
            <p className="text-(--color-text-muted) leading-relaxed">
              La passione per la pallavolo che ci unisce. Gioca con noi e scopri
              il tuo potenziale.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-(--color-text) mb-4">
              Contatti
            </h3>
            <ul className="space-y-3 text-(--color-text-muted)">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-(--color-primary)" />
                <span>Via dello Sport 123, Milano</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-(--color-primary)" />
                <span>+39 02 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-(--color-primary)" />
                <span>info@Asd Monferrato Volley.it</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-(--color-text) mb-4">
              Seguici
            </h3>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-lg bg-white/5 border border-(--color-border) hover:border-(--color-primary) hover:text-(--color-primary) transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-(--color-border) text-center text-(--color-text-muted) text-sm">
          © 2026 Asd Monferrato Volle. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
