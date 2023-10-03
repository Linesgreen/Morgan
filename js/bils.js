let owedMoney = {};

function remember(names, summ) {
  owedMoney[names] = summ;
}

remember("Vlad", 15);
remember("Bill", 616);
owedMoney.Bill += 50;
console.log(owedMoney);
