javascript
let counter = 0;

function generatePhotoName(extension) {
  counter += 1;
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-:T]/g, "").slice(0, 14); // YYYYMMDDHHMMSS
  const ms = String(now.getMilliseconds()).padStart(3, "0");
  const seq = String(counter).padStart(3, "0");
  return `${timestamp}_${ms}_${seq}.${extension.replace(/^\./, "")}`;
}

console.log(generatePhotoName("jpg"));
// Output: 20261113202800_412_001.jpg