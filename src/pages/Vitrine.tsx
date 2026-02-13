import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Header />
      <iframe
        src="https://limel.egestor.com.br/vitrine/"
        title="Demonstração de Vitrine"
        className="w-full flex-1 border-none"
        style={{ height: "calc(100vh - 80px - 63px)" }}
        allowFullScreen
      />
    </div>
  );
};

export default Vitrine;
