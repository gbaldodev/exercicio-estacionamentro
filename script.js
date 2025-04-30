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
    }
    trocoFinal(){
        this.trocoFinal = this.valorInserido - this.valorSerpago;
        console.log(this.trocoFinal);
    }
        
}
    



const meuParquimetro = new parquimetro();