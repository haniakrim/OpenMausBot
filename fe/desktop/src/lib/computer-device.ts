import { t } from "./i18n";
import type { ComputerDevice } from "../../../../be/ai/shared/computer-ask";

export function computerDeviceText(device: ComputerDevice): string {
  return device === "computer" ? t("vm.host.computer") : device;
}
