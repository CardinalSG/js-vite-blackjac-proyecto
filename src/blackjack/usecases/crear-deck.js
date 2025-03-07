import _ from "underscore";
/**
 * Esta funcion crea un nuevo deck
 * @param {array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {array<String>} tiposEspeciales Ejempli: ["A", "J", "Q", "K"]
 * @returns {array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw Error("tiposDeCarta es obligatorio como un arreglo de string");
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw Error("tiposEspeciales es obligatorio como un arreglo de string");
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
