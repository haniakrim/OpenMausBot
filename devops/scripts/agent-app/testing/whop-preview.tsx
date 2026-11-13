import { createRoot } from "react-dom/client";
import { PluginsPanel } from "../../../../fe/desktop/src/components/PluginsPanel";
import { StoreProvider } from "../../../../fe/desktop/src/state/store";
import { setAnalyticsEnabled } from "../../../../fe/desktop/src/lib/analytics";
import { applySkin, readSkin } from "../../../../fe/desktop/src/lib/skins";
import "../../../../fe/desktop/src/styles.css";

setAnalyticsEnabled(false);
applySkin(readSkin());
createRoot(document.getElementById("root")!).render(<StoreProvider><PluginsPanel /></StoreProvider>);
