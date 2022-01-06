class ContaBancaria{
  constructor(agencia, numero, tipo, saldo){
    //this se refere ao objeto contaBancaria
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    // adiciona sempre o _ na frente quando tiver getter ou setter 
    //para função ter o nome saldo mas a propriedade não
    this._saldo = saldo;
  }

  get saldo(){
    return this._saldo;
  }

  set saldo(valor){
    this._saldo = valor;
  }

  sacar(valor){
    if(valor > this._saldo){
      return 'operação negada';
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }

  depositar(valor){
    this._saldo = this._saldo + valor;

    return this._saldo;
  }
}

//Crie uma classe-filha chamada ContaCorrente que herda 
//todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
class ContaCorrente{
  constructor(agencia,numero,saldo,cartaoCredito){
    super(agencia, numero, saldo);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  //Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;

  get cartaoCredito(){
    return this._cartaoCredito;
  }

  set cartaoCredito(valor){
    this._cartaoCredito = valor;
  }
}

//crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class ContaPoupanca{
  constructor(agencia,numero,saldo){
    super(agencia, numero, saldo);
    this.tipo = 'poupança';
  }
}

//Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
class ContaUniversitária{
  constructor(agencia,numero,saldo){
    super(agencia, numero, saldo);
    this.tipo = 'universitária';
  }
  //Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
}