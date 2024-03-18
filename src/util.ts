export function findSliceStart(array: string[]) {
  return array.length > 300 ? array.length - 300 : 0;
}

export function convertUTCToTimeDate(string: string): string {
  const date = new Date(string);
  const hour =
    String(date.getHours()).length === 1
      ? 0 + String(date.getHours())
      : String(date.getHours());
  const minute =
    String(date.getMinutes()).length === 1
      ? 0 + String(date.getMinutes())
      : String(date.getMinutes());
  const second =
    String(date.getSeconds()).length === 1
      ? 0 + String(date.getSeconds())
      : String(date.getSeconds());
  return `${hour}:${minute}:${second}`;
}
