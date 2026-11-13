// The sidebar attention popover geometry fixture: the real Sidebar pinned to the
// ?density= before the first render, since Sidebar reads its density from
// localStorage once, at mount, as it shows on a server with no inbox, the only
// place the popover still opens.
import { createRoot } from "react-dom/client";
import { saveSidebarDensity } from "../../../../fe/desktop/src/lib/sidebar-preferences";
import { Sidebar } from "../../../../fe/desktop/src/components/Sidebar";
import { setInboxSupport } from "../../../../fe/desktop/src/state/inbox";
import { StoreProvider } from "../../../../fe/desktop/src/state/store";
import { applySkin, readSkin } from "../../../../fe/desktop/src/lib/skins";
import "../../../../fe/desktop/src/styles.css";

const density = new URLSearchParams(window.location.search).get("density");
if (density === "comfortable" || density === "icons") {
  saveSidebarDensity(density);
}

setInboxSupport("no");

function Fixture() {
  return <div className="flex h-screen">
    <Sidebar open onClose={() => {}} />
    <main className="p-8">
      <h1>Isolated sidebar attention verification</h1>
      <p>Nothing is selected; the attention popover opens from the header.</p>
    </main>
  </div>;
}
applySkin(readSkin());
createRoot(document.getElementById("root")!).render(<StoreProvider><Fixture /></StoreProvider>);
