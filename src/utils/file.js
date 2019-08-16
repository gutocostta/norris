import { saveAs } from "file-saver";

export function downloadFile(filename, data) {
  if (typeof data === "string") {
    data = decodeBase64(data);
  }
  const fileContent = new Uint8Array(data);
  saveAs(
    new Blob([fileContent], {
      type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8`
    }),
    filename
  );
}

export function decodeBase64(dataAsString) {
  if (typeof dataAsString !== "string")
    throw new Error("Encoded data must be a string");

  const decoded = window.atob(dataAsString);
  const bytes = new Uint8Array(decoded.length);
  for (var i = 0; i < decoded.length; i++) {
    bytes[i] = decoded.charCodeAt(i);
  }
  return bytes;
}
