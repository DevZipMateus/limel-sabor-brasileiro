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
    <div className="h-screen w-full overflow-hidden flex flex-col pt-20">
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
