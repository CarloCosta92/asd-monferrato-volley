import { Users, Trophy, Target } from "lucide-react";
import Button from "../components/Button";
import CallToAction from "../components/CalltoAction";

const Teams = () => {
  const teams = [
    {
      name: "Serie A Femminile",
      description:
        "La nostra squadra di punta che compete ai massimi livelli nazionali",
      players: 14,
      achievements: "3 Campionati, 2 Coppe Italia",
      gradient: "from-[var(--color-primary)] to-[var(--color-secondary)]",
      image:
        "https://images.pexels.com/photos/8224459/pexels-photo-8224459.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Serie B Maschile",
      description: "Giovani talenti in crescita con grandi ambizioni",
      players: 16,
      achievements: "1 Promozione, Finalisti Coppa Regionale",
      gradient: "from-[var(--color-secondary)] to-[var(--color-primary-dark)]",
      image:
        "https://images.pexels.com/photos/8007876/pexels-photo-8007876.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Under 18",
      description:
        "Il vivaio del nostro futuro, formazione tecnica e caratteriale",
      players: 22,
      achievements: "2 Titoli Regionali",
      gradient:
        "from-[var(--color-primary-dark)] to-[var(--color-secondary-dark)]",
      image:
        "https://images.pexels.com/photos/8007989/pexels-photo-8007989.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Minivolley",
      description:
        "Dove inizia la passione: divertimento e apprendimento per i più piccoli",
      players: 35,
      achievements: "Torneo Primavera Champions",
      gradient: "from-[var(--color-secondary-dark)] to-[var(--color-primary)]",
      image:
        "https://images.pexels.com/photos/8224986/pexels-photo-8224986.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-(--color-bg-main) text-(--color-text)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white mb-6">
            Le Nostre
            <span className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
              Squadre
            </span>
          </h1>
          <p className="text-xl text-(--color-text-muted) max-w-2xl mx-auto">
            Dall'agonismo di alto livello alla formazione giovanile, scopri
            tutte le nostre realtà
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-(--color-bg-alt)/50 backdrop-blur-sm border border-(--color-border) hover:border-(--color-primary) transition-all duration-500"
            >
              <div className="absolute inset-0 bg-linear-to-br from-(--color-primary)/20 to-(--color-secondary)/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t ${team.gradient} opacity-60`}
                ></div>
              </div>

              <div className="relative p-8 flex flex-col">
                <h3 className="text-3xl font-bold text-(--color-text) mb-3">
                  {team.name}
                </h3>
                <p className="text-(--color-text-muted) mb-6 leading-relaxed">
                  {team.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-(--color-bg-alt)/20 rounded-xl p-4 border border-(--color-border) flex flex-col items-center">
                    <Users className="h-6 w-6 text-(--color-primary) mb-2" />
                    <div className="text-2xl font-bold text-(--color-text)">
                      {team.players}
                    </div>
                    <div className="text-sm text-(--color-text-muted)">
                      Atleti
                    </div>
                  </div>
                  <div className="bg-(--color-bg-alt)/20 rounded-xl p-4 border border-(--color-border) flex flex-col items-center">
                    <Trophy className="h-6 w-6 text-(--color-primary) mb-2" />
                    <div className="text-sm text-(--color-text-muted) mt-2">
                      {team.achievements}
                    </div>
                  </div>
                </div>

                <Button to="/contatti" variant="primary" className="mt-auto">
                  Scopri di più
                </Button>
              </div>
            </div>
          ))}
        </div>

        <CallToAction />
      </div>
    </div>
  );
};

export default Teams;
