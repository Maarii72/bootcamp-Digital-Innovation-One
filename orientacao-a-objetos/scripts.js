class ContaBancaria{
  constructor(agencia, numero, tipo){
    //this se refere ao objeto contaBancaria
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    // adiciona sempre o _ na frente quando tiver getter ou setter 
    //para função ter o nome saldo mas a propriedade não
    this._saldo = 0;
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
class ContaCorrente extends ContaBancaria{
  constructor(agencia,numero,cartaoCredito){
    super(agencia, numero);
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
class ContaPoupanca extends ContaBancaria{
  constructor(agencia,numero){
    super(agencia, numero);
    this.tipo = 'poupança';
  }
}

//Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
class ContaUniversitaria extends ContaBancaria{
  constructor(agencia,numero){
    super(agencia, numero);
    this.tipo = 'universitária';
  }
  //Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
  sacar(valor){
    if(valor>500){
      return 'Operação negada!';
    }
  }
}

/*
no console do google:
const minhaConta = new ContaCorrente(1, 234, true)
minhaConta.saldo
minhaConta.depositar(1000)
minhaConta.sacar(2000)
*/