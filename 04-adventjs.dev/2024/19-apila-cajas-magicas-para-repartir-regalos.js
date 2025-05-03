/**
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

distributeWeight(1)
// Devuelve:
//  _
// |_|

distributeWeight(2)
// Devuelve:
//  ___
// |___|

distributeWeight(3)
// Devuelve:
//  _
// |_|_
// |___|

distributeWeight(4)
// Devuelve:
//  ___
// |___|
// |___|

distributeWeight(5)
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.
 */

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    const boxRepresentations = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    const boxes = [10, 5, 2, 1]
    const numBoxes = []
    let rest = weight

    for (const box of boxes) {
        const q = Math.floor(rest / box)
        rest = rest % box

        if (q) {
            for (let i = 0; i < q; i++) {
                numBoxes.unshift(box)
            }
        }
    }

    const result = []
    let i = 0

    while (i < numBoxes.length) {
        const tmpBox = boxRepresentations[numBoxes[i]]

        if (numBoxes[i + 1] && numBoxes[i] < numBoxes[i + 1]) {
            let last = tmpBox.at(-1)
            if (numBoxes[i + 1] === 2) {
                last = last.padEnd(4, '_')
            } else if (numBoxes[i + 1] === 5) {
                last = last.padEnd(6, '_')
            } else {
                last = last.padEnd(10, '_')
            }

            tmpBox[tmpBox.length - 1] = last
            const nBox = (i === 0)
                ? tmpBox.slice()
                : tmpBox.slice(1)

            result.push(...nBox)

        } else if (i === 0) {
            result.push(...tmpBox)
        } else {
            const [, ...rest] = tmpBox
            result.push(...rest)
        }

        i++
    }

    return result.join('\n');
}