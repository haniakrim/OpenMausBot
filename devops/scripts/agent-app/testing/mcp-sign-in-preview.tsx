import { createRoot } from "react-dom/client";
import { McpServersPanel } from "../../../../fe/desktop/src/components/McpServersPanel";
import { StoreProvider } from "../../../../fe/desktop/src/state/store";
import { setAnalyticsEnabled } from "../../../../fe/desktop/src/lib/analytics";
import { applySkin, readSkin } from "../../../../fe/desktop/src/lib/skins";
import "../../../../fe/desktop/src/styles.css";

setAnalyticsEnabled(false);
applySkin(readSkin());
createRoot(document.getElementById("root")!).render(
  <StoreProvider><main className="mx-auto max-w-4xl p-8"><McpServersPanel /></main></StoreProvider>,
);
