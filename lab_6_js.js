/*Задача 1*/
/*1. Найти максимальную разницу между элементами массива*/
function maxDifference(arr) {
    if (arr.length < 2) return 0;
    return Math.max(...arr) - Math.min(...arr);
}

console.log(maxDifference([10, 2, 7, 1, 15]));

/*2. Вернуть массив без повторяющихся элементов*/
function removeDuplicates(arr) {
    return [...new Set(arr)];
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

/*3. Вернуть только объекты с isDone: true*/
function filterDone(arr) {
    return arr.filter(item => item.isDone === true);
}

const tasks = [
    {id: 1, isDone: true}, 
    {id: 2, isDone: false},
    {id: 3, isDone: true}
];

console.log(filterDone(tasks)); 

/*Задача 2*/
/*1. Найти элементы массива, которые больше указанного числа*/
function greaterThan(arr, num) {
    return arr.filter(item => item > num);
}

console.log(greaterThan([1, 4, 6, 3, 2], 2));

/*2. Сделать "плоский" массив из многомерного*/
function flattenArray(arr) {
    let result = [];
    
    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }
    
    return result;
}

console.log(flattenArray([1, 4, [34, 1, 20], [6, [6, 12, 8], 6]]));

/*Задача 3: Найти количество пар чисел, дающих в сумме 0*/
function countZeroSumPairs(arr) {
    let count = 0;
    let used = new Array(arr.length).fill(false);
    
    for (let i = 0; i < arr.length; i++) {
        if (used[i]) continue;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (used[j]) continue;
            
            if (arr[i] + arr[j] === 0) {
                count++;
                used[i] = true;
                used[j] = true;
                break;
            }
        }
    }
    
    return count;
}

function countZeroSumPairsEfficient(arr) {
    let count = 0;
    let map = new Map();

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    let used = new Set();
    
    for (let num of arr) {
        if (used.has(num)) continue;
        
        let opposite = -num;
        
        if (num === 0) {
            // Для нуля: количество пар = C(n, 2) = n*(n-1)/2
            let zeroCount = map.get(0) || 0;
            count += Math.floor(zeroCount * (zeroCount - 1) / 2);
            used.add(0);
        } else if (map.has(opposite) && !used.has(opposite)) {
            count += Math.min(map.get(num), map.get(opposite));
            used.add(num);
            used.add(opposite);
        }
    }
    
    return count;
}