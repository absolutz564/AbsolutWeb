var categoriaSelecionada = "Casas";

class Produto {
  constructor(nome, preco, imagem, categoria, estoque, id) {
    this.nome = nome;
    this.preco = preco;
    this.imagem = imagem;
    this.categoria = categoria;
    this.estoque = estoque;
    this.id = id;
  }

  exibirProduto() {

    var div = document.createElement("div");
    div.classList.add("produto"); // adicionando a classe "produto" na div criada
    // <p class="estoque" id="estoque-${this.nome}">Estoque: ${this.estoque}</p>
    if (this.estoque > 0) { // Verifica se o produto está em estoque
      div.innerHTML = `
        <h2>${this.nome}</h2>
        <img src="${this.imagem}" alt="Imagem do produto ${this.nome}" width="250" height="200">
        <p class="preco">Preço: R$ ${this.preco.toFixed(2)}</p>

        <button class="botao-comprar" onclick="exibirFormasDePagamento({
          nome: '${this.nome}',
          preco: ${this.preco},
          imagem: '${this.imagem}',
          categoria: '${this.categoria}',
          estoque: ${this.estoque},
          id: ${this.id}
        })">Comprar</button>
        `;
    } else {
      div.innerHTML = `
        <h2>${this.nome}</h2>
        <img src="${this.imagem}" alt="Imagem do produto ${this.nome}" width="250" height="200">
        <p class="preco">Preço: R$ ${this.preco.toFixed(2)}</p>
        <button class="botao-indisponivel" disabled>Indisponível</button>
      `;
    }

    return div;
  }
}
var produto1 = new Produto("Casa 1", 5.00, "images/casa1.png", "Casas", 3);
var produto2 = new Produto("Carro 1", 600.00, "images/carro1.jpg", "Veículos", 1);
var produto3 = new Produto("Casa 2", 5.00, "images/casa2.png", "Casas", 0);
var produto4 = new Produto("Casa 3", 25.00, "images/casa3.png", "Casas", 4);
var produto5 = new Produto("Casa 4", 50.00, "images/casa4.png", "Casas", 4);
var produto6 = new Produto("VIP Básico", 70.00, "images/premium02.png", "Vips", 5, 1);
var produto7 = new Produto("VIP Ouro", 120.00, "images/premium01.png", "Vips", 3, 2);
var produto8 = new Produto("VIP Platina", 150.00, "images/premium.png", "Vips", 1, 3);


var produtosCasas = [produto1, produto3, produto4, produto5];
var produtosVeiculos = [produto2];
var produtosVips = [produto6, produto7, produto8];

var produtosContainer = document.getElementById("produtos-container");
// produtosContainer.appendChild(produto1.exibirProduto());
// produtosContainer.appendChild(produto2.exibirProduto());


function exibirFormasDePagamento(produto) {
  var modal = document.createElement("div");
  modal.className = "modal";
    modal.innerHTML = `
    <div class="modal-content">
      <h2>Escolha a forma de pagamento:</h2>
      <button class="botao-pix">PIX</button>
      <button class="botao-paypal">Paypal</button>
      <button class="botao-cartao">Cartão de Crédito</button>
      <buttonCancel class="botao-cancelar">Cancelar</buttonCancel>
    </div>
  `;
  
  document.body.appendChild(modal);

  modal.querySelector('.botao-pix').addEventListener('click', function() {
    comprar(Object.assign({}, produto), 'PIX');
    fecharModal();
  });
  modal.querySelector('.botao-paypal').addEventListener('click', function() {
    comprar(Object.assign({}, produto), 'Paypal');
    fecharModal();
  });
  modal.querySelector('.botao-cartao').addEventListener('click', function() {
    comprar(Object.assign({}, produto), 'Cartão de Crédito');
    fecharModal();
  });
  modal.querySelector('.botao-cancelar').addEventListener('click', function() {
    fecharModal();
  });
}

function comprar(produto, formaDePagamento) {
  console.log(produto);
  if (produto.estoque > 0) {
    produto.estoque--;
    alert(`Você comprou o produto ${produto.nome} com a forma de pagamento ${formaDePagamento}!`);
    atualizarEstoque(produto);
    fecharModal();
    if (produto.categoria == "Vips"){
      if(produto.id == 1){
        window.activeVip1();
      } else if(produto.id == 2){
        window.activeVip2();
      } else if(produto.id == 3){
        window.activeVip3();
      }
    }
  } else {
    alert(`O produto ${produto.nome} está indisponível no momento.`);
  }
}

function atualizarEstoque(produto) {
  // const estoqueElement = document.getElementById(`estoque-${produto.nome}`);
  // estoqueElement.textContent = `Estoque: ${produto.estoque}`;
}

function fecharModal() {
  var modal = document.querySelector(".modal");
  if (modal) {
    document.body.removeChild(modal);
  }
}

function exibirProdutosCasas() {
  atualizarTituloCategoria("Produtos à Venda - Casas");

  var produtosContainer = document.getElementById("produtos-container");
  produtosContainer.innerHTML = "";
  produtosCasas.forEach(function(produto) {
    produtosContainer.appendChild(produto.exibirProduto());
  });
}

function exibirProdutosVeiculos() {
  atualizarTituloCategoria("Produtos à Venda - Veículos");

  var produtosContainer = document.getElementById("produtos-container");
  produtosContainer.innerHTML = "";
  produtosVeiculos.forEach(function(produto) {
    produtosContainer.appendChild(produto.exibirProduto());
  });
}

function exibirProdutosVips() {
  atualizarTituloCategoria("Produtos à Venda - VIPs");

  var produtosContainer = document.getElementById("produtos-container");
  produtosContainer.innerHTML = "";
  produtosVips.forEach(function(produto) {
    produtosContainer.appendChild(produto.exibirProduto());
  });
}

// Chamando a função com o array de produtos
exibirProdutosCasas();

var botaoCasas = document.getElementById("botao-casas");
var botaoVeiculos = document.getElementById("botao-veiculos");
var botaoVips = document.getElementById("botao-vips");

botaoCasas.addEventListener("click", function() {
  botaoCasas.classList.add("selecionado");
  botaoVeiculos.classList.remove("selecionado");
  botaoVips.classList.remove("selecionado");
});

botaoVeiculos.addEventListener("click", function() {
  botaoVeiculos.classList.add("selecionado");
  botaoCasas.classList.remove("selecionado");
  botaoVips.classList.remove("selecionado");
});

botaoVips.addEventListener("click", function() {
  botaoVips.classList.add("selecionado");
  botaoVeiculos.classList.remove("selecionado");
  botaoCasas.classList.remove("selecionado");
});

function atualizarTituloCategoria(categoria) {
  var tituloCategoria = document.getElementById("titulo-categoria");
  tituloCategoria.innerText = categoria;
}
