import { ReactNode } from "react";
import { Topbar } from "./Topbar";

interface Props {
  activeTab: "perfil" | "comparativa" | "resultados";
  onTabChange: (t: "perfil" | "comparativa" | "resultados") => void;
  children: ReactNode;
}

export const Layout = ({ children, activeTab, onTabChange }: Props) => {
  return (
    <div>
      <Topbar active={activeTab} onTabChange={onTabChange} />
      <main className="page-container">{children}</main>
    </div>
  );
};
