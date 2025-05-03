/**
Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.

*: Copo de nieve - Valor: 1
o: Bola de Navidad - Valor: 5
^: Arbolito decorativo - Valor: 10
#: Guirnalda brillante - Valor: 50
@: Estrella polar - Valor: 100
Normalmente se sumarían todos los valores de los adornos y ya está…

Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.

calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z es desconocido)
 */

/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    const ornamentsValues = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 }

    const ornamentArray = ornaments.split('');

    return ornamentArray.reduce((acc, currentOrnament, i, arr) => {
        const currentValue = ornamentsValues[currentOrnament];

        if (currentValue === undefined) return undefined;

        const nextOrnament = arr[i + 1];
        const nextValue = ornamentsValues[nextOrnament];

        if (nextValue !== undefined && nextValue > currentValue) {
            return acc - currentValue;
        } else {
            return acc + currentValue;
        }
    }, 0);
}