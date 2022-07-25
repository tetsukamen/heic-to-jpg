const { promisify } = require("util");
const fs = require("fs");
const convert = require("heic-convert");

(async () => {
  const inputBuffer = await promisify(fs.readFile)("./img.HEIC");
  const outputBuffer = await convert({
    buffer: inputBuffer, // the HEIC file buffer
    format: "JPEG", // output format
    quality: 0.1, // the jpeg compression quality, between 0 and 1
  });

  await promisify(fs.writeFile)("./result1.jpg", outputBuffer);
})();
