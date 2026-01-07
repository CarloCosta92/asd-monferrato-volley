import { Link } from "react-router-dom";
import { Trophy, Users, Calendar, TrendingUp } from "lucide-react";

const Home = () => {
  const stats = [
    { icon: Trophy, label: "Campionati Vinti", value: "15" },
    { icon: Users, label: "Atleti Attivi", value: "200+" },
    { icon: Calendar, label: "Anni di Attività", value: "25" },
    { icon: TrendingUp, label: "Crescita", value: "40%" },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-(--color-bg-main)">
        <div className="max-w-4xl text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Vola alto</span>
            <span className="text-(--color-primary)">con noi</span>
          </h1>

          <p className="text-(--color-text-muted) text-lg mb-10">
            Passione, disciplina e crescita continua nel mondo della pallavolo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/squadre"
              className="px-8 py-4 bg-(--color-primary) hover:bg-(--color-primary-dark) transition rounded-full font-semibold"
            >
              Scopri le squadre
            </Link>
            <Link
              to="/contatti"
              className="px-8 py-4 border border-(--color-border) hover:border-(--color-primary) transition rounded-full"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-(--color-bg-alt)">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-(--color-bg-main) p-6 rounded-xl border border-(--color-border)"
            >
              <stat.icon className="h-8 w-8 text-(--color-primary) mb-4" />
              <div className="text-3xl font-bold text-(--color-text)">
                {stat.value}
              </div>
              <div className="text-(--color-text-muted)">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
