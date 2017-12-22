/**
 * Usage
 * To compress:
 * bit2Base64(array2bit())
 * To decompress:
 * bit2array(base64ToBit())
 */
function string2array(str) {
  return str.split(",").map(x => parseInt(x));
}

function array2bit(array) {
  const max = Math.floor(array.reduce((a, b) => Math.max(a, b)) / 8) + 1;
  const bit = Array(max).fill(0);
  array.forEach((x) => {
    const idx = Math.floor(x / 8);
    const offset = x % 8;
    bit[idx] |= 1 << offset;
  });
  return bit;
}

function bit2Base64(bitArray) {
  return btoa(bitArray.map(x => String.fromCharCode(x)).join(""));
}

function base64ToBit(base64) {
  return atob(base64).split("").map(x => x.charCodeAt());
}

function bit2array(bit) {
  const array = [];
  for (let idx = 0; idx < bit.length; idx++) {
    for (let offset = 0; offset < 8; offset++) {
      if (bit[idx] & (1 << offset)) {
        array.push(idx * 8 + offset);
      }
    }
  }
  return array;
}
