let cont=0;
function alterarStatus(id){
    let botao= document.getElementById(`game-${id}`);
    let imagem = botao.querySelector(".dashboard__item__img");
    let estiloBotao = botao.querySelector(".dashboard__item__button");
        if(imagem.classList.contains("dashboard__item__img--rented")){
            let certeza = prompt("Tem certeza que quer devolver o jogo, responda com sim ou não");
            certeza = certeza.toLowerCase().trim(); 
          
            if (certeza === "sim"){
                
                imagem.classList.remove("dashboard__item__img--rented");
                estiloBotao.textContent = "Alugar";
                estiloBotao.classList.remove("dashboard__item__button--return");
                cont--;
            }
        }
            
            else {
                imagem.classList.add("dashboard__item__img--rented");
                estiloBotao.textContent = "Devolver";
                estiloBotao.classList.add("dashboard__item__button--return");
                cont++;

            }
      
    
        }
    

console.log("numero de jogos alugados" + cont);