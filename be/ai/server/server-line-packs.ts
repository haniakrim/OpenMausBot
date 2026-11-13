// Every other language's server lines, from the app's packs (server-lines.ts reads English). The server loads this when
// it starts (server/index.ts), and so does a test that checks a line in another language; before that, a line reads in
// English. Only tests that load this read a translation, so only they run with the locale tests (scripts/ci-scope.mjs).
import de from "../../../fe/desktop/src/locales/de.json" with { type: "json" };
import es from "../../../fe/desktop/src/locales/es.json" with { type: "json" };
import fr from "../../../fe/desktop/src/locales/fr.json" with { type: "json" };
import hi from "../../../fe/desktop/src/locales/hi.json" with { type: "json" };
import it from "../../../fe/desktop/src/locales/it.json" with { type: "json" };
import ja from "../../../fe/desktop/src/locales/ja.json" with { type: "json" };
import ko from "../../../fe/desktop/src/locales/ko.json" with { type: "json" };
import pl from "../../../fe/desktop/src/locales/pl.json" with { type: "json" };
import ptBr from "../../../fe/desktop/src/locales/pt-br.json" with { type: "json" };
import ru from "../../../fe/desktop/src/locales/ru.json" with { type: "json" };
import tr from "../../../fe/desktop/src/locales/tr.json" with { type: "json" };
import uk from "../../../fe/desktop/src/locales/uk.json" with { type: "json" };
import vi from "../../../fe/desktop/src/locales/vi.json" with { type: "json" };
import zhTw from "../../../fe/desktop/src/locales/zh-tw.json" with { type: "json" };
import zh from "../../../fe/desktop/src/locales/zh.json" with { type: "json" };
import { addServerLinePacks } from "./server-lines.ts";

addServerLinePacks({ de, es, fr, hi, it, ja, ko, pl, "pt-br": ptBr, ru, tr, uk, vi, zh, "zh-tw": zhTw });
