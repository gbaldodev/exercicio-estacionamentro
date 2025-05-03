class parquimetro{
      
    constructor(){
        this.valorTempo = 0;
        this.valorInserido = 0;
        this.valorSerpago= 0;
    }
    pegarValor(){
        this.valorInserido = parseFloat(document.getElementById('dinheiro').value);
        console.log(this.valorInserido);
    }
    calculoCusto(){       
        if (this.valorInserido >= 3.00) {
            this.valorSerpago = 3.00;
            this.valorTempo = 120.0;
             console.log(this.valorTempo);
             console.log("valor inserido " + this.valorInserido);
        }else if (this.valorInserido >= 1.75){
            this.valorSerpago = 1.75;
            this.valorTempo = 60.0;
            console.log(this.valorTempo);
            console.log("valor inserido " + this.valorInserido);
        }
        else if (this.valorInserido >= 1.00){
            this.valorSerpago = 1.0;
            this.valorTempo = 30.0;
            console.log(this.valorTempo);
            console.log("valor inserido " + this.valorInserido);
        }
        if (this.valorInserido <= 0){
            alert("INSIRA UM VALOR VALIDO");
            document.getElementById("dinheiro").style.border = "2px solid red";
            return;
        }
        document.getElementById('exibircobranca').innerText = "O valor cobrado foi : R$" + this.valorSerpago;
    }    
      trocoFinal(){
        this.trocoFinal = this.valorInserido - this.valorSerpago;
        document.getElementById('exibirtroco').innerText = "O valor de troco sera : R$" + this.trocoFinal.toFixed(2);
        console.log(this.trocoFinal);
      }
      showHoras(){
        this.showHoras = this.valorTempo;
        document.getElementById('tempo').innerText = " Tempo Disponivel :" + this.showHoras + " minutos.";
      }
      limparCampos() {
        document.getElementById('exibircobranca').innerText = "O valor cobrado foi:";
        document.getElementById('exibirtroco').innerText = "O valor de troco sera : R$";
        document.getElementById('tempo').innerText = "Tempo Disponível:";
        document.getElementById("dinheiro").value = "";
        this.valorTempo = 0;
        this.valorInserido = 0;
        this.valorSerpago = 0;
    }
  
        
}




const meuParquimetro = new parquimetro();