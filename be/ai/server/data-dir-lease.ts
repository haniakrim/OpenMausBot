// Plain ESM so Electron's main process and the server enforce exactly the same lease protocol.
export {
  acquireDataDirLease,
  acquireDataDirLeaseForProcess,
  clearRecordsFromEarlierRunOfThisContainer,
  clearRecordsFromOtherMachines,
  DataDirLeaseError,
} from "../../../fe/desktop/electron/data-dir-lease.mjs";

export type {
  DataDirLease,
  DelegatedDataDirLease,
  OwnedDataDirLease,
} from "../../../fe/desktop/electron/data-dir-lease.mjs";
