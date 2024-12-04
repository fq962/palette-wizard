// utils/getVersion.js
import packageJSON from "../../package.json";

export function getVersion() {
  return packageJSON.version;
}
