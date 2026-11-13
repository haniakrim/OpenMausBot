import { createRoot } from "react-dom/client";
import { Composer } from "../../../../fe/desktop/src/components/Composer";
import { DesktopCapabilitiesProvider } from "../../../../fe/desktop/src/components/DesktopCapabilities";
import { initialDesktopCapabilities } from "../../../../fe/desktop/src/lib/desktop";
import { setLocale } from "../../../../fe/desktop/src/lib/i18n";
import { StoreProvider, useStore } from "../../../../fe/desktop/src/state/store";
import { createSpeechTranscript } from "../../../../fe/desktop/electron/speech-transcript.mjs";
import "../../../../fe/desktop/src/styles.css";

setLocale("en");

type Line = { text?: string; partial?: boolean; utteranceFinal?: boolean; speechStart?: number };
let normalize = createSpeechTranscript();
const listeners = new Set<(line: Line) => void>();
const oldListeners = new Set<(line: Line) => void>();
const ends = new Set<(info: { code: number }) => void>();
let starts = 0;
let stops = 0;
let capturing = false;
window.ogb = {
  platform: "darwin",
  getCapabilities: async () => initialDesktopCapabilities(),
  speechStart: async () => { starts++; capturing = true; normalize = createSpeechTranscript(); },
  speechStop: async () => { stops++; capturing = false; },
  onSpeechTranscript: (cb: (line: Line) => void) => {
    listeners.add(cb);
    oldListeners.add(cb);
    return () => listeners.delete(cb);
  },
  onSpeechEnd: (cb: (info: { code: number }) => void) => { ends.add(cb); return () => ends.delete(cb); },
} as unknown as typeof window.ogb;

Object.assign(window, { dictationFixture: {
  stats: () => ({ starts, stops, capturing }),
  hear: (line: Line) => { for (const cb of listeners) cb(normalize(line)); },
  late: (text: string) => { for (const cb of oldListeners) cb({ text, partial: true }); },
} });

function Fixture() {
  const { state } = useStore();
  const bot = state.bots.find(candidate => !candidate.hidden);
  return <main className="mx-auto max-w-xl p-4">
    <h1>Synthetic dictation fixture — no microphone</h1>
    {bot && <Composer bot={bot} />}
  </main>;
}
const root = createRoot(document.getElementById("root")!);
root.render(<StoreProvider><DesktopCapabilitiesProvider><Fixture /></DesktopCapabilitiesProvider></StoreProvider>);
if (import.meta.hot) import.meta.hot.dispose(() => root.unmount());
