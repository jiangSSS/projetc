const CryptoJS = require('../../static/lib/aes_1');
// var aesjs = require('aes-js');
//

const key = CryptoJS.enc.Utf8.parse("1234567890123456");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("1234567890123456");   //十六位十六进制数作为密钥偏移量

//加密方法
function Encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv,  mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.ciphertext.toString();
}

//解密方法
function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}



export {
  Decrypt ,
  Encrypt
}



// // //FIXME CBC
// console.log(aesjs);
// var key = aesjs.utils.utf8.toBytes('1234567890123456');
// var iv = aesjs.utils.utf8.toBytes('1234567890123456');
//
// // The initialization vector (must be 16 bytes)
// // var iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];
//
// function Encrypt(text) {
//   // Convert text to bytes (text must be a multiple of 16 bytes)
// // var text = 'TextMustBe16Byte';
//   var textBytes = aesjs.utils.utf8.toBytes(text);
//
//   var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
//   var encryptedBytes = aesCbc.encrypt(textBytes);
//
// // To print or store the binary data, you may convert it to hex
//   var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
//   console.log(encryptedHex);
//   // "104fb073f9a131f2cab49184bb864ca2"
//   return encryptedHex;
// }
//
// function Decrypt(encryptedHex) {
//   // When ready to decrypt the hex string, convert it back to bytes
//   var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
//
// // The cipher-block chaining mode of operation maintains internal
// // state, so to decrypt a new instance must be instantiated.
//   var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
//   var decryptedBytes = aesCbc.decrypt(encryptedBytes);
//
// // Convert our bytes back into text
//   var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
//   console.log(decryptedText);
//   return decryptedText;
// }


// //FIXME ECB
// console.log(aesjs);
// // An example 128-bit key
// var key = aesjs.utils.utf8.toBytes(1234567890123456);
// // var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6 ];
//
// function Encrypt(text) {
//   // var text = 'TextMustBe16Byte';
//   var textBytes = aesjs.utils.utf8.toBytes(text);
//
//   var aesEcb = new aesjs.ModeOfOperation.ecb(key);
//   var encryptedBytes = aesEcb.encrypt(textBytes);
//
// // To print or store the binary data, you may convert it to hex
//   var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
//   console.log(encryptedBytes);
// // "a7d93b35368519fac347498dec18b458"
//   return encryptedHex;
// }
//
// function Decrypt(encryptedHex) {
//   // When ready to decrypt the hex string, convert it back to bytes
//   var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
//
// // Since electronic codebook does not store state, we can
// // reuse the same instance.
//   var aesEcb = new aesjs.ModeOfOperation.ecb(key);
//   var decryptedBytes = aesEcb.decrypt(encryptedBytes);
//
// // Convert our bytes back into text
//   var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
//   console.log(decryptedText);
//   return decryptedText;
// }



// export {
//   Decrypt ,
//   Encrypt
// }
