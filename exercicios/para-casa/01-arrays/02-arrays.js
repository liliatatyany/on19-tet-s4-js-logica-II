// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// Imprima o terceiro item da array e a primeira letra maiúscula
console.log(arrayExercicio[2].replaceAll("u", "U"))
// Imprima o penúltimo item da array e a última letra minúscula
console.log(arrayExercicio[5])
// Imprima o penúltimo item da array e a última letra maiúscula
let fruta2= arrayExercicio[5]
console.log(fruta2.replace("i", "I"))
// Imprima o item do meio da array e a primeira e a última letras maiúscula
let fruta = arrayExercicio[3]
console.log(fruta.replace("maça", "MaçA") )
// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
console.log(`Eu gosto mais de ${arrayExercicio[2].toUpperCase()} do que de ${arrayExercicio[4].replaceAll("go", "GO")}`)