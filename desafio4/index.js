const user = {
  name: "André Nunes",
  transactions: [],
  balance: 0
};

function createTransaction(type, value) {

  return {type , value}

}

function addTransaction(user,transaction) {

  user.transactions.push(transaction)

}

function balance(user, transaction, type) {  
  user.balance += (type==='debit' ? transaction.value*(-1) : transaction.value)
}

function getHigherTransactionByType(users, type) {
  let maior = [];
  for(let user of users ) {
    if(user.type === type ) {
      maior.push(user.value)
    }
  }
  return {type, value: Math.max(...maior)};  
}

function getAverageTransactionValue(users) {
  let media = 0;
  for(let user of users ) {
    media += user.value
  }
  return (media / users.length );  

} 

function getTransactionsCount(users) {
  let tcredit =0, tdebit = 0;
  for(let user of users ) {
    if (user.type === 'credit') {
      tcredit += 1
    } else {
      tdebit += 1
    }    
  }

  return { 'credit': tcredit, 'debit': tdebit}

}

transaction = createTransaction('credit', 50);
addTransaction(user, transaction )
balance(user, transaction, 'credit')


transaction = createTransaction('credit', 120);
addTransaction(user, transaction )
balance(user, transaction, 'credit')

transaction = createTransaction('debit', 80);
addTransaction(user, transaction )
balance(user, transaction, 'debit')

transaction = createTransaction('debit', 30);
addTransaction(user, transaction )
balance(user, transaction, 'debit')

transaction = createTransaction('credit', 130);
addTransaction(user, transaction )
balance(user, transaction, 'credit')

transaction = createTransaction('credit', 360);
addTransaction(user, transaction )
balance(user, transaction, 'credit')

transaction = createTransaction('debit', 180);
addTransaction(user, transaction )
balance(user, transaction, 'debit')


console.table(user);

console.log(getHigherTransactionByType(user.transactions, 'credit'))

console.log(getHigherTransactionByType(user.transactions, 'debit'))

console.log(getAverageTransactionValue(user.transactions))

console.log(getTransactionsCount(user.transactions ))

console.log('Balance:',user.balance)