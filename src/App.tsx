import { useState } from "react";
import { Layout } from "./components/Layout";
import { PerfilPage } from "./pages/Perfil";
import { Comparativa } from "./pages/Comparativa";
import { Resultados } from "./pages/Resultados";

type Tab = "perfil" | "comparativa" | "resultados";

function App() {
  const [tab, setTab] = useState<Tab>("perfil");

  const renderPage = () => {
    switch (tab) {
      case "perfil": return <PerfilPage />;
      case "comparativa": return <Comparativa />;
      case "resultados": return <Resultados />;
      default: return <PerfilPage />;
    }
  };

  return (
    <Layout activeTab={tab} onTabChange={setTab}>
      {renderPage()}
    </Layout>
  );
}

export default App;
