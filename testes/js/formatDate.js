// Escreva uma função que converta a data de entrada do usuário formatada como MM/DD/YYYY em um formato exigido por uma API (YYYYMMDD). O parâmetro "userDate" e o valor de retorno são strings.

// Por exemplo, ele deve converter a data de entrada do usuário "31/12/2014" em "20141231" adequada para a API.


function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let dataBarrasRemovidas = userDate.split("/");
  //let dataOrdenada = dataBarrasRemovidas[2]+dataBarrasRemovidas[0]+dataBarrasRemovidas[1]
  let dataOrdenada = `${dataBarrasRemovidas[2]}${dataBarrasRemovidas[0]}${dataBarrasRemovidas[1]}`
  return dataOrdenada;
}

console.log(formatDate("12/31/2014"));