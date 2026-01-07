import Button from "./Button";

const CallToAction = () => {
  return (
    <div className="mt-20 bg-(--color-bg-alt)/20 backdrop-blur-sm rounded-3xl p-12 border border-(--color-border) text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Vuoi Unirti a Noi?</h2>
      <p className="text-xl text-(--color-text-muted) mb-8 max-w-2xl mx-auto">
        Siamo sempre alla ricerca di nuovi talenti. Vieni a provare con noi!
      </p>
      <Button to="/contatti" variant="primary">
        Richiedi Informazioni
      </Button>
    </div>
  );
};

export default CallToAction;
