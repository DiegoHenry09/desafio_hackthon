import { useCallback, useEffect, useState } from "react";
import type { Route } from "../types";

function parse(h: string): Route {
  if (!h) return { name: "home" };
  try {
    const dec = decodeURIComponent(h);
    if (dec.startsWith("{")) return JSON.parse(dec) as Route;
    if (dec === "quiz") return { name: "quizzes" };
    return { name: dec as Route["name"] } as Route;
  } catch { return { name: "home" }; }
}
function stringify(r: Route): string {
  if ((r as { id?: string }).id) return JSON.stringify(r);
  return r.name;
}

export function useHashRouter(){
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash.slice(1)));

  useEffect(() => {
    const encoded = stringify(route);
    if (decodeURIComponent(window.location.hash.slice(1)) !== encoded){
      window.location.hash = encodeURIComponent(encoded);
    }
  }, [route]);

  useEffect(() => {
    const onHash = () => setRoute(parse(window.location.hash.slice(1)));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = useCallback((r: Route | Route["name"]) => {
    const next: Route = typeof r === "string" ? ({ name: r } as Route) : r;
    setRoute(next);
    requestAnimationFrame(() => window.scrollTo({ top: 0 }));
  }, []);

  return { route, navigate };
}
