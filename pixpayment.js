// const $ = require("jquery");
// const FazUmPix = require("faz-um-pix");

// const chavePix = "sua_chave_pix";
// const valor = "0.01";
// const descricao = "Compra na loja XPTO";
// const pagador = "Cliente da loja XPTO";

// const payload = FazUmPix.Pix(
//   chavePix,
//   pagador,
//   "Belo Horizonte",
//   valor,
//   descricao
// );

// const url = "https://faz-um-pix.enssure.com.br/api/Pay";

// $.post(url, { "QRCodeString": payload }, function (data) {
//   const qrCode = jsQR(data.QRCodeBase64, data.QRCodeSize, data.QRCodeSize);
//   console.log(qrCode);
// });