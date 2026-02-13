import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    const badge = document.getElementById("montesite-footer-badge");
    if (badge) badge.style.display = "none";
    return () => {
      if (badge) badge.style.display = "";
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col pt-14 sm:pt-16 md:pt-20">
      <Header />
      <iframe
        src="https://limel.egestor.com.br/vitrine/"
        title="Demonstração de Vitrine"
        className="w-full flex-1 border-none"
        allowFullScreen
      />
    </div>
  );
};

export default Vitrine;
