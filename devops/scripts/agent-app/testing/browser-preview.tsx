import { createRoot } from "react-dom/client";
import { BrowserPanel } from "../../../../fe/desktop/src/components/BrowserPanel";
import { StoreProvider, useStore } from "../../../../fe/desktop/src/state/store";
import { applySkin } from "../../../../fe/desktop/src/lib/skins";
import "../../../../fe/desktop/src/styles.css";

function Fixture() {
  const { state } = useStore();
  const bot = state.bots[0];
  return <main className="flex h-screen bg-app p-3 sm:p-6">{bot ? <BrowserPanel bot={bot} /> : "Loading isolated fixture…"}</main>;
}
applySkin("midnight");
createRoot(document.getElementById("root")!).render(<StoreProvider><Fixture /></StoreProvider>);
