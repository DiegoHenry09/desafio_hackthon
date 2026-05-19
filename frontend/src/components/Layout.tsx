import React from "react";
import { BannerCanaisOficiais } from "./BannerCanaisOficiais";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import type { Route } from "../types";

interface Props {
  route: Route["name"];
  navigate: (n: Route["name"]) => void;
  crumb: string;
  title: string;
  routeKey: string;
  children: React.ReactNode;
}

export function Layout({ route, navigate, crumb, title, routeKey, children }: Props){
  return (
    <div className="app">
      <BannerCanaisOficiais onOpenCanais={() => navigate("canais")} />
      <div className="shell">
        <Sidebar route={route} onNavigate={navigate} />
        <div className="main-col">
          <Header crumb={crumb} title={title} onSearch={() => navigate("biblioteca")} />
          <main className="main" key={routeKey}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
