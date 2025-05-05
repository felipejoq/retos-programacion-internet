/**
¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5
Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales.
 */

/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    let acc = 0
    
    const processCode = (block) => {
        let i = 0;
        while (i < block.length) {
            const curr = block[i];

            if (curr === '+') {
                acc++;
            } else if (curr === '-') {
                acc--;
            } else if (curr === '[') {
                const end = block.indexOf(']', i);

                const newCode = block.slice(i + 1, end);
                while (acc !== 0) {
                    processCode(newCode);
                }
                i = end;
            } else if (curr === '{') {
                if (acc === 0) {
                    i = block.indexOf('}', i);
                }
            }
            i++;
        }
    };

    code = code.replaceAll('>', '');
    processCode(code);

    return acc
}

console.log(execute('+++')) // 3
// execute('+--') // -1
// execute('>+++[-]') // 0
// execute('>>>+{++}') // 3
// execute('+{[-]+}+') // 2
// execute('{+}{+}{+}') // 0
// execute('------[+]++') // 2
// execute('-[++{-}]+{++++}') // 5