//Specialist JS-1-1
console.clear();

// if-else
console.log('//if-else');
// 1. Напишите программу для проверки рейтинга статьи.
// Рейтин может иметь значения от 1 до 5.
console.groupCollapsed('1. Проверка рейтинга статьи');
    let rating = 3
    if (rating >= 1 && rating <= 5) {
        console.log(`Рейтинг статьи: ${rating}`);
    } else {
        console.log('Некорректный рейтинг');
    }
console.groupEnd();

// 2. Циферблат разделен на 4 четверти по 15 минут.
// Напишите программу для проверки положения минутной стрелки по четвертям.
console.groupCollapsed('2. Проверка положения минутной стрелки по четвертям (minutes = 42)');
    let minutes = 42
    if (minutes >= 0 && minutes < 15) {
        console.log('Первая четверть');
    } else if (minutes >= 15 && minutes < 30) {
        console.log('Вторая четверть');
    } else if (minutes >= 30 && minutes < 45) {
        console.log('Третья четверть');
    } else if (minutes >= 45 && minutes < 60) {
        console.log('Четвертая четверть');
    } else {
        console.log('Некорректное значение');
    }
console.groupEnd();

// 3. Объявите переменную с количеством товаров в корзине.
// Если в корзине товаров нет, выведите в консоль что корзина пуста.
// Если в корзине есть товары, выведите их количество.
console.groupCollapsed('3. Корзина товаров (items = 142)');
    let items = 142; 
    if (items <= 0) {
        console.log('Корзина пуста');
    } else {
        console.log(`Количество товаров в корзине: ${items}`);
    }
console.groupEnd();

console.log();

// Циклы
console.log('//cycles');
// 1 Выведите в косоль числа от 3 до 56.
console.groupCollapsed('1. Числа от 3 до 56');
    for (let i = 3; i <= 56; i++) {
        console.log(i);
    }
console.groupEnd();

// 2 Выведите в косоль числа от 34 до -54 с шагом 2.
console.groupCollapsed('2. Числа от 34 до -54 с шагом 2');
    for (let i = 34; i >= -54; i -= 2) {
        console.log(i);
    }
console.groupEnd();

// 3 Выведите в косоль числа от 55 до 155 с шагом 5.
console.groupCollapsed('3. Числа от 55 до 155 с шагом 5');
    for (let i = 55; i <= 155; i += 5) {
        console.log(i);
    }
console.groupEnd();

// 4 Выведите в косоль четные числа от 0 до 150.
console.groupCollapsed('4. Четные числа от 0 до 150');
    for (let i = 0; i <= 150; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
console.groupEnd();

// 5 Выведите в косоль только четные числа. Диапазон перебираемых чисел от 3 до 100. 
// Предпологаю опечатка в условии и имелись ввиду "НЕчетные" судя по диапазону. 
console.groupCollapsed('5. Нечетные(?) числа от 3 до 100');
    for (let i = 3; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
console.groupEnd();

// 6 Выведите в косоль числа от 55 до 1 с шагом 7.
console.groupCollapsed('6. Числа от 55 до 1 с шагом 7');
    for (let i = 55; i >= 1; i -= 7) {
        console.log(i);
    }
console.groupEnd();

// 7 Напишите бесконечный цикл.
console.log('7. Бесконечный цикл: while (true) {}');

// 8 Напишите цикл, который не запускается.
console.log('8. Цикл, который не запускается: for (let i = 0; i > 42; i++) {}')

console.log();

console.log('//cycles*');
// 9* Напишите цикл, который считает сумму чисел от 1 до 10.
console.groupCollapsed('9*. Цикл, который считает сумму чисел от 1 до 10.');
    let sum = 0;
    console.groupCollapsed('Для наглядности:');
    for (let i = 1; i <= 10; i++) {
        sum += i;
        console.log(sum);     //для наглядности   
    }
    console.groupEnd();
console.log(`Сумма: ${sum}`);
console.groupEnd();

// 10* Создайте массив строк и выведите через цикл элементы массива обернутые в параграфы.
console.groupCollapsed('10*. Массив строк обернутый в параграф');
    console.groupCollapsed('Исходный массив:');
        let strings = ["Lorem", "Ipsum", "Dolor"];
        console.log(strings);
    console.groupEnd();    
        for (let i = 0; i < strings.length; i++) {
            console.log(`<p>${strings[i]}</p>`);
        }
console.groupEnd();

// 11* Создайте массив чисел и выведите через цикл элементы массива в кубе.
console.groupCollapsed('11*. Массив чиисел в кубе');
    console.groupCollapsed('Исходный массив:');
        let numbers = [1, 3, 5, 7, 9];
        console.log(numbers);
    console.groupEnd();
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i] ** 3);
    }
console.groupEnd();

// 12* Создайте массив чисел и выведите в консоль сумму элементов массива.
console.groupCollapsed('12*. Сумма чисел массива');
    console.groupCollapsed('Исходный массив:');
        let numbers2 = [2, 4, 6, 8, 10];
        console.log(numbers2);
    console.groupEnd();
    let sum2 = 0;
    for (let i = 0; i < numbers2.length; i++) {
        sum2 += numbers2[i];
    }
    console.log(sum2);
console.groupEnd();