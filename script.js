class parquimetro{
      
    constructor(){
        this.valorTempo = 0;
        this.valorInserido = 0;
        this.valorSerpago= 0;
    }
    pegarTempo(){
        this.valorTempo = parseFloat(document.getElementById('tempo').value);
        console.log(this.valorTempo);
    }
    pegarValor(){
        this.valorInserido = parseFloat(document.getElementById('dinheiro').value);
        console.log(this.valorInserido);
    }
    calculoCusto(){
        
        if (this.valorTempo <= 30) {
            this.valorSerpago = 1.00;
             console.log("o valor a ser pago e de 1 real");
        }else if (this.valorTempo <= 60){
            this.valorSerpago = 1.75;
            console.log("o valor a ser pago e de 1,75 reais");
        }else{
            this.valorSerpago = 3.00;
            console.log("o valor a ser pago e de 3 reais");
        }

        if (this.valorInserido <= 0){
            alert("INSIRA UM VALOR VALIDO");
            document.getElementById("dinheiro").style.border = "2px solid red";
        }
        document.getElementById('exibircobranca').innerText = "O valor cobrado foi : R$" + this.valorSerpago;
    }    
      trocoFinal(){
        this.trocoFinal = this.valorInserido - this.valorSerpago;
        document.getElementById('exibirtroco').innerText = "O valor de troco sera : R$" + this.trocoFinal;
      }
  
        
}




const meuParquimetro = new parquimetro();