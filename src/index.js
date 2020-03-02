 module.exports = function check(str, bracketsConfig) {
    console.log (arguments)
    
    for (let i = 0; i < bracketsConfig.length;) { 
       if (str.includes(bracketsConfig[i].join(''))) { // если элемент str содержит (метод .includes) приведенный к строчному (.join('')) i-й элемент bracketsConfig, то
        str = str.replace(bracketsConfig[i].join(''), '');//из str методом (.replace) удаляем этот элемент, помещая пустую строкую Начинаем проверку с начала (i=0)
        i=0;
        } 
        else {
        i=i+1; //иначе начинаем проверять следующий элемент
        }
    }
    if (str.length) {//если str не пустой (длина str не равна 0) - выводим falce, если пустой - true 
      return false
    }
    return true
    }

