const map = new Map();

map.set(0, 'A');
map.set(1, 'B');
map.set(2, 'C');
map.set(3, 'D');
map.set(4, 'E');
map.set(5, 'F');
map.set(6, 'G');
map.set(7, 'H');
map.set(8, 'I');
map.set(9, 'J');
map.set(10, 'K');
map.set(11, 'L');
map.set(12, 'M');
map.set(13, 'N');
map.set(14, 'O');
map.set(15, 'P');
map.set(16, 'Q');
map.set(17, 'R');
map.set(18, 'S');
map.set(19, 'T');
map.set(20, 'U');
map.set(21, 'V');
map.set(22, 'W');
map.set(23, 'X');
map.set(24, 'Y');
map.set(25, 'Z');
map.set(26, 'a');
map.set(27, 'b');
map.set(28, 'c');
map.set(29, 'd');
map.set(30, 'e');
map.set(31, 'f');
map.set(32, 'g');
map.set(33, 'h');
map.set(34, 'i');
map.set(35, 'j');
map.set(36, 'k');
map.set(37, 'l');
map.set(38, 'm');
map.set(39, 'n');
map.set(40, 'o');
map.set(41, 'p');
map.set(42, 'q');
map.set(43, 'r');
map.set(44, 's');
map.set(45, 't');
map.set(46, 'u');
map.set(47, 'v');
map.set(48, 'w');
map.set(49, 'x');
map.set(50, 'y');
map.set(51, 'z');
map.set(52, '0');
map.set(53, '1');
map.set(54, '2');
map.set(55, '3');
map.set(56, '4');
map.set(57, '5');
map.set(58, '6');
map.set(59, '7');
map.set(60, '8');
map.set(61, '9');
map.set(62, '+');
map.set(63, '/');
map.set(64, '=');


console.log("Palavra a ser encodada: Code \n")
const binary = textToBinary('Code')
console.log("Binário referente a essa palavra:", binary ,"\n")
const binarySplited = splitBySix(binary)
console.log("Binário separado de 6 em 6:", binarySplited, "\n")
const arrayOfDecimals = getDecimals(binarySplited)
console.log("Decimais resultantes da sequencia de 6 bits:", arrayOfDecimals, "\n")
const arrayOfChars = arrayOfDecimals.map(element => map.get(element)).join('') 
console.log("Caracteres referentes aos decimais na tabela de Base64:", arrayOfChars)





















function textToBinary(string) {
  return string.split('').map(function (char) {
    let a = char.charCodeAt(0)
      return byteToString(a);
  }).join('');
}

function byteToString(n) {
  if (n < 0 || n > 255 || n % 1 !== 0) {
      throw new Error(n + " does not fit in a byte");
  }
  return ("000000000" + n.toString(2)).substr(-8)
}









function splitBySix(binary){
  let arrayOfArrays = []
  let arrayOfSix = []
  let j = 0

  for (let i = 0; i< binary.length; i++){
    if(j == 6){
      arrayOfArrays.push(arrayOfSix)
      arrayOfSix = []
      arrayOfSix.push(binary[i])
      j = 1
    } else {
      arrayOfSix.push(binary[i])
      j++
    }
  }

  // Se sobrar algum array quebrado, adiciona-se ao geral mesmo que tenha menos de 6 numeros
  if(arrayOfSix.length!=0){
    arrayOfArrays.push(arrayOfSix)
  }

  return arrayOfArrays
}

function getDecimal (array) {
  let decimal = 0
  for(let i = 0; i< array.length; i++){
    if(array[i] == '1'){
      if(i == 0){
        decimal += 32
      }
      if(i == 1){
        decimal += 16
      }
      if(i == 2){
        decimal += 8
      }
      if(i == 3){
        decimal += 4
      }
      if(i == 4){
        decimal += 2
      }
      if(i == 5){
        decimal += 1
      }
    }
  }
  return decimal
}

function getDecimals (array) {
  let result = [] 
  array.map(element => {
    result.push(getDecimal(element))
  })
  return result
}