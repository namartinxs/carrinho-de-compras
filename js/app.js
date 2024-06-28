document.getElementById('quantidade').value = 0
let total;
limpar()

function capturaValor(){
         
 let produto = document.getElementById('produto').value;
 //recuperar nome do produto
 //metodo split sem argumento,divide em substring e retorna um array
 let nome = produto.split(" - ")[0];
    //valor, .split,separa apos - .replace,troca 1º por2º .trim,remove espaços em branco
 let valor = parseInt(produto.split(" - ")[1].replace('R$', '').trim());
   //quantidade
 let qtd = parseInt(document.getElementById('quantidade').value);
    //calcular o preço
 let subtotal = valor * qtd;  

 if (qtd < 1){
   alert('Você precisa preencher o campo quantidade.')
 }else{
   //mostrar a lista de compras
   let compras = document.getElementById('lista-produtos');
   compras.innerHTML = compras.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtd}x</span> ${nome} <span class="texto-azul">R$ ${subtotal}</span>
    </section>`
    
    //carrinho: calcular o valor final e imprimir 
   total = total + subtotal;
   let imprimeTotal = document.getElementById('valor-total');
   imprimeTotal.textContent = `R$ ${total}`;
   document.getElementById('quantidade').value = 0
   //text content = 
 }
  
}

function limpar(){
  total = 0;
  //esvaziar o 'carrinho inicial
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0'
}