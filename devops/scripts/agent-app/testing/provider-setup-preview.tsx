// Real store and setup card; the launcher supplies only synthetic provider statuses.
import { createRoot } from "react-dom/client";
import { StoreProvider, useStore } from "../../../../fe/desktop/src/state/store";
import { EngineCard, engineReady } from "../../../../fe/desktop/src/components/EngineLibrary";
import { EngineSetup } from "../../../../fe/desktop/src/components/EngineSetup";
import "../../../../fe/desktop/src/styles.css";

function Preview() {
  const { state } = useStore();
  const kimi = state.instances.find((instance) => instance.instanceId === "kimi");
  return <main className="mx-auto max-w-lg p-4">
    <p className="mb-3 text-sm text-ink-secondary">Isolated provider setup · no real account</p>
    {kimi && <EngineCard instance={kimi}>
      {engineReady(kimi) ? <p role="status">Ready to use</p> : <EngineSetup instance={kimi} />}
    </EngineCard>}
  </main>;
}
const root = createRoot(document.getElementById("root")!);
root.render(<StoreProvider><Preview /></StoreProvider>);
if (import.meta.hot) import.meta.hot.dispose(() => root.unmount());
