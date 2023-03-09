// Implemente a função removeProperty, que recebe um objeto e o nome de uma propriedade.

// Faça o seguinte:

// Se o objeto obj tiver uma propriedade prop, a função removerá a propriedade do objeto e retornará true;
// em todos os outros casos, retorna falso.

let pessoa = {
  nome: "Wey",
  cidade: "São Carlos",
};

function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
      delete obj[prop];
      return true;
    } else {
      return false;
    }
}

console.log(`${pessoa.nome} ${pessoa.cidade}`) // Exibindo as props do objeto
console.log(removeProperty(pessoa, "cidade")) // retornado true, pq possui prop e foi passado como parâmetro.
console.log(pessoa.cidade) // propriedade removida
console.log(removeProperty(pessoa)) // retornando false, pq não passei a prop como parâmetro.