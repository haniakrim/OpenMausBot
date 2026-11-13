// The closed scales of the settings spec (§6.8): type, spacing, sizes and surfaces Settings, the outer menu and the
// pairing dialog may use. Classes outside them are listed here as known debt, file by file, and the counts can only go
// down: a new off-scale class fails the test, and fixing one asks for the count to be lowered with it.
//
// Most of the debt sits in the non-Settings branches of shared components (the onboarding importer, the chat's own
// Select variants, the bot panel's usage view) and in builder-detail folds not yet rebuilt (Desktop details, the engine
// cards, browser profiles). Settings' own rows, cards and fields are already clean.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const OFF_SCALE = /(?<![\w-])(?:border-hairline(?:\/\d+)?|bg-inset|leading-relaxed|leading-snug|leading-tight|(?:[pm][xytblr]?|gap(?:-[xy])?|space-[xy])-(?:2\.5|3\.5|0\.75|1\.25|9|10|11|14)|text-\[(?:9|10|15|17|19|22)px\])(?![\w\-./[])/g;

const FILES = [
  "fe/desktop/src/components/AboutMeSettings.tsx",
  "fe/desktop/src/components/AccountMenu.tsx",
  "fe/desktop/src/components/ActivitySection.tsx",
  "fe/desktop/src/components/AppSettingsRows.tsx",
  "fe/desktop/src/components/AppearanceSelectRows.tsx",
  "fe/desktop/src/components/AttachmentStorageSettings.tsx",
  "fe/desktop/src/components/AutomaticRecoverySettings.tsx",
  "fe/desktop/src/components/BoatOffer.tsx",
  "fe/desktop/src/components/BrowserProfilesManager.tsx",
  "fe/desktop/src/components/BrowserSettingsRows.tsx",
  "fe/desktop/src/components/CacheKeepWarmSettings.tsx",
  "fe/desktop/src/components/CloudAccountSettings.tsx",
  "fe/desktop/src/components/CloudKeepHere.tsx",
  "fe/desktop/src/components/CloudUsageMeter.tsx",
  "fe/desktop/src/components/ConnectedWorkspacesSettings.tsx",
  "fe/desktop/src/components/CustomDomainSettings.tsx",
  "fe/desktop/src/components/DecisionModelSettings.tsx",
  "fe/desktop/src/components/DiagnosticsRow.tsx",
  "fe/desktop/src/components/EnginesSettings.tsx",
  "fe/desktop/src/components/EveryBotRules.tsx",
  "fe/desktop/src/components/HomeLine.tsx",
  "fe/desktop/src/components/ImageGenerationSettings.tsx",
  "fe/desktop/src/components/ImportSettings.tsx",
  "fe/desktop/src/components/LiveProviderSettings.tsx",
  "fe/desktop/src/components/LocalComputerSection.tsx",
  "fe/desktop/src/components/MacLocalControl.tsx",
  "fe/desktop/src/components/McpCallTimeoutSettings.tsx",
  "fe/desktop/src/components/NewBotDialog.tsx",
  "fe/desktop/src/components/OllamaServer.tsx",
  "fe/desktop/src/components/OpenAiCompatServers.tsx",
  "fe/desktop/src/components/OrganizationSettings.tsx",
  "fe/desktop/src/components/PairedPhones.tsx",
  "fe/desktop/src/components/PhoneDevicesSection.tsx",
  "fe/desktop/src/components/PhonesList.tsx",
  "fe/desktop/src/components/PinnedPanelsSettings.tsx",
  "fe/desktop/src/components/PlaceLookCard.tsx",
  "fe/desktop/src/components/PlanUsage.tsx",
  "fe/desktop/src/components/ProIntroduction.tsx",
  "fe/desktop/src/components/ProfileSettings.tsx",
  "fe/desktop/src/components/RoomTurnTimeoutSettings.tsx",
  "fe/desktop/src/components/Select.tsx",
  "fe/desktop/src/components/ServerList.tsx",
  "fe/desktop/src/components/ServerPairingCard.tsx",
  "fe/desktop/src/components/SettingsModal.tsx",
  "fe/desktop/src/components/SettingsPrimitives.tsx",
  "fe/desktop/src/components/ShareLearnedSkillsSettings.tsx",
  "fe/desktop/src/components/SidebarPhoneButton.tsx",
  "fe/desktop/src/components/SidebarPopoverMenu.tsx",
  "fe/desktop/src/components/SidebarProfileMenu.tsx",
  "fe/desktop/src/components/SkillReviewSettings.tsx",
  "fe/desktop/src/components/SkinPicker.tsx",
  "fe/desktop/src/components/SwatchRadios.tsx",
  "fe/desktop/src/components/ThreadCleanupSettings.tsx",
  "fe/desktop/src/components/ThreadConcurrencySettings.tsx",
  "fe/desktop/src/components/UsageSection.tsx",
  "fe/desktop/src/components/VaultSettings.tsx",
  "fe/desktop/src/components/VpsComputersCard.tsx",
  "fe/desktop/src/components/WindowFrameBar.tsx",
  "fe/desktop/src/components/WorkersAiKeyCard.tsx",
  "fe/desktop/src/components/WorkspaceBackupSettings.tsx",
  "fe/desktop/src/components/keys/KeyPanels.tsx",
  "fe/desktop/src/components/keys/KeyRow.tsx",
  "fe/desktop/src/components/keys/KeysPage.tsx",
  "fe/desktop/src/components/settings/AdvancedSection.tsx",
  "fe/desktop/src/components/settings/DesktopKinds.tsx",
  "fe/desktop/src/components/settings/SettingsDialog.tsx",
  "fe/desktop/src/components/settings/SettingsNav.tsx",
  "fe/desktop/src/components/settings/SettingsPageHeader.tsx",
  "fe/desktop/src/components/settings/SettingsStates.tsx",
  "fe/desktop/src/components/settings/SettingsWindow.tsx",
  "fe/desktop/src/components/settings/SignOutConfirm.tsx",
  "fe/desktop/src/components/settings/inert.tsx",
  "fe/desktop/src/components/settings/pages/AccountPages.tsx",
  "fe/desktop/src/components/settings/pages/AppPages.tsx",
  "fe/desktop/src/components/settings/pages/DataPages.tsx",
  "fe/desktop/src/components/settings/pages/PhonePage.tsx",
  "fe/desktop/src/components/settings/pages/PlacePages.tsx",
  "fe/desktop/src/components/settings/pages/SettingsPageBody.tsx",
  "fe/desktop/src/components/settings/plan-parts.tsx",
  "fe/desktop/src/components/usage/TraceWaterfall.tsx",
];

/** Known debt: how many off-scale classes each file still has. Lower a count when you fix one; never raise it. */
const DEBT: Record<string, number> = {
  "fe/desktop/src/components/AboutMeSettings.tsx": 2,
  "fe/desktop/src/components/ActivitySection.tsx": 4,
  "fe/desktop/src/components/BrowserProfilesManager.tsx": 10,
  "fe/desktop/src/components/CloudAccountSettings.tsx": 2,
  "fe/desktop/src/components/CloudUsageMeter.tsx": 9,
  "fe/desktop/src/components/EnginesSettings.tsx": 16,
  "fe/desktop/src/components/HomeLine.tsx": 1,
  "fe/desktop/src/components/ImportSettings.tsx": 8,
  "fe/desktop/src/components/LocalComputerSection.tsx": 11,
  "fe/desktop/src/components/MacLocalControl.tsx": 2,
  "fe/desktop/src/components/NewBotDialog.tsx": 11,
  "fe/desktop/src/components/OrganizationSettings.tsx": 3,
  "fe/desktop/src/components/PhoneDevicesSection.tsx": 5,
  "fe/desktop/src/components/PlanUsage.tsx": 3,
  "fe/desktop/src/components/ProIntroduction.tsx": 2,
  "fe/desktop/src/components/ProfileSettings.tsx": 3,
  "fe/desktop/src/components/Select.tsx": 9,
  "fe/desktop/src/components/ServerList.tsx": 4,
  "fe/desktop/src/components/SettingsPrimitives.tsx": 3,
  "fe/desktop/src/components/SidebarPopoverMenu.tsx": 1,
  "fe/desktop/src/components/SidebarProfileMenu.tsx": 2,
  "fe/desktop/src/components/SkinPicker.tsx": 6,
  "fe/desktop/src/components/SwatchRadios.tsx": 2,
  "fe/desktop/src/components/UsageSection.tsx": 11,
  "fe/desktop/src/components/VaultSettings.tsx": 6,
  "fe/desktop/src/components/VpsComputersCard.tsx": 5,
  "fe/desktop/src/components/WorkspaceBackupSettings.tsx": 1,
  "fe/desktop/src/components/keys/KeyRow.tsx": 3,
  "fe/desktop/src/components/keys/KeysPage.tsx": 2,
  "fe/desktop/src/components/usage/TraceWaterfall.tsx": 15,
};

describe("Settings' closed scales (§6.8)", () => {
  it.each(FILES)("%s adds no class outside the scales", (file) => {
    const found = readFileSync(file, "utf8").match(OFF_SCALE) ?? [];
    const allowed = DEBT[file] ?? 0;
    expect(found.length, `off-scale classes in ${file}: ${found.join(" ")}`).toBeLessThanOrEqual(allowed);
  });

  it("keeps the debt list honest: a file that got cleaner says so here", () => {
    const stale = Object.entries(DEBT).filter(([file, allowed]) => (readFileSync(file, "utf8").match(OFF_SCALE) ?? []).length < allowed);
    expect(stale.map(([file]) => file)).toEqual([]);
  });
});
