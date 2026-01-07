import { Calendar, Tag, ArrowRight } from "lucide-react";

const News = () => {
  const news = [
    {
      title: "Grande Vittoria in Trasferta!",
      date: "15 Gennaio 2024",
      category: "Risultati",
      excerpt:
        "La nostra Serie A femminile conquista una vittoria schiacciante in trasferta con un risultato di 3-0.",
      image:
        "https://images.pexels.com/photos/8224411/pexels-photo-8224411.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-(--color-primary) to-(--color-primary-dark)",
    },
    {
      title: "Inaugurazione Nuovo Centro Sportivo",
      date: "10 Gennaio 2024",
      category: "Società",
      excerpt:
        "Taglio del nastro per la nuova struttura all'avanguardia che ospiterà tutti i nostri allenamenti.",
      image:
        "https://images.pexels.com/photos/8224449/pexels-photo-8224449.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-(--color-primary-dark) to-(--color-primary)",
    },
    {
      title: "Convocazioni in Nazionale",
      date: "5 Gennaio 2024",
      category: "Premi",
      excerpt:
        "Tre nostre atlete convocate per il raduno della nazionale Under 20. Un orgoglio per tutta la società!",
      image:
        "https://images.pexels.com/photos/8224400/pexels-photo-8224400.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-(--color-primary) to-(--color-primary-dark)",
    },
  ];

  const getCategoryClass = (category) => {
    const map = {
      Risultati: "bg-green-600",
      Società: "bg-blue-600",
      Premi: "bg-yellow-500 text-black",
      Eventi: "bg-(--color-primary)",
    };
    return map[category] || "bg-slate-600";
  };

  return (
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-(--color-text) mb-6">
            News &{" "}
            <span className="bg-linear-to-r from-(--color-primary) to-(--color-primary-dark) bg-clip-text text-transparent">
              Eventi
            </span>
          </h1>
          <p className="text-lg text-(--color-text-muted) max-w-2xl mx-auto">
            Resta aggiornato su tutte le novità, i risultati e gli eventi della
            nostra società
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group relative bg-(--color-bg-alt)/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-(--color-border) hover:border-(--color-primary)/50 transition-all duration-500 hover:scale-[1.03]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div
                  className={`absolute inset-0 bg-linear-to-t ${item.gradient} opacity-50`}
                />

                <div className="absolute top-4 left-4">
                  <span
                    className={`${getCategoryClass(
                      item.category
                    )} text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1`}
                  >
                    <Tag className="h-3 w-3" />
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-(--color-text-muted) text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>

                <h3 className="text-xl font-bold text-(--color-text) mb-3 group-hover:text-(--color-primary) transition-colors">
                  {item.title}
                </h3>

                <p className="text-(--color-text-muted) leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                <button className="flex items-center gap-2 text-(--color-primary) font-semibold group-hover:gap-3 transition-all">
                  <span>Leggi di più</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
              />
            </article>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white/10 backdrop-blur text-(--color-text) font-bold rounded-full border border-white/20 hover:bg-linear-to-r hover:from-(--color-primary) hover:to-(--color-primary-dark) hover:border-transparent transition-all duration-300 hover:scale-105">
            Carica altre news
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
