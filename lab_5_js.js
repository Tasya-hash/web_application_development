/*Задача 1*/
/*1. Вернуть число в обратном порядке (123 → 321)*/
function reverseNumber(num) {
    return parseInt(String(num).split('').reverse().join(''));
}

/*console.log(reverseNumber(123));

/*2. Вернуть число без повторяющихся цифр (111333456 → 13456)*/
function removeDuplicates(num) {
    let str = String(num);
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    
    return Number(result);
}

/*console.log(removeDuplicates(111333456));

/*3. Посчитать, сколько раз цифра встречается в числе (1355567, 5) → 3*/
function countDigit(num, digit) {
    let count = 0;
    let str = String(num);
    let targetDigit = String(digit);
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === targetDigit) {
            count++;
        }
    }
    
    return count;
}

/*console.log(countDigit(1355567, 5));

/*4. Самая длинная последовательность нулей/единиц в двоичной записи*/
function longestSequence(num) {
    let binary = num.toString(2);
    let maxZeros = 0;
    let maxOnes = 0;
    let currentZeros = 0;
    let currentOnes = 0;
    
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            currentZeros++;
            currentOnes = 0;
            maxZeros = Math.max(maxZeros, currentZeros);
        } else {
            currentOnes++;
            currentZeros = 0;
            maxOnes = Math.max(maxOnes, currentOnes);
        }
    }
    
    return {
        binary: binary,
        longestZeros: maxZeros,
        longestOnes: maxOnes,
        longest: Math.max(maxZeros, maxOnes)
    };
}

/*console.log(longestSequence(25)); // 25 в двоичной = 11001

/*Задача 2*/
/*1. Найти самый первый неповторяющийся символ в строке*/
function firstUniqueChar(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

/*console.log(firstUniqueChar('фывфавыапрс'));

/*2. Сгенерировать строку заданной длины из случайных символов*/
function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    
    return result;
}

/*console.log(generateRandomString(5));

/*3. Вернуть только уникальные символы строки*/
function getUniqueChars(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    
    return result;
}


