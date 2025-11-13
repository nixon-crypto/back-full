class Conta {
  constructor(saldo) {
    this.saldo = saldo;
    this.historico = []; // lista para armazenar os dados das transações
  }
  deposito(valor) {
    this.saldo += valor;
    // registrando a transição com data e tipo
    this.historico.push({ tipo: "Deposito", valor: valor, data: new Date() });
  }
  saque(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para saque.");
      return; // Retornar para evitar o saque
    }
    this.saldo -= valor;
    // registra a transação com data e tipo
    this.historico.push({ tipo: "Saque", valor: valor, data: new Date() });
  }
  extrato() {
    console.log("---Extrato da Conta ---");
    console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    console.log("Historico de transações:");
    if (this.historico.length === 0) { //vereficando se a lista esta vazia.
      console.log("nenhuma transferencia registrada ");
    } else {
        // detalha cada transação da lista, "+" e "-" é uma forma de fazer if/else
      this.historico.forEach((transacao) => {
        const  {tipo, valor, data } = transacao;
        const sinal = tipo === "Deposito" ? "+" : "-";
        console.log(`${data.toLocaleDateString()} - ${tipo}: ${sinal} R$ ${valor.toFixed(2)}`
        );
      });
    }
    console.log("--------------------------------------");
  }
}

let conta = new Conta(1000);
conta.deposito(1000);
conta.saque(163.5);
conta.deposito(500);

// teste

conta.extrato();

