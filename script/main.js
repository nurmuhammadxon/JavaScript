// NUMBER

/*Sonlar oralig'i ichidagi barcha tub sonlarni toping.
  Masalan: 1 dan 50 gacha bo'lgan tub sonlar.*/
/*
let tubSonlar = [];

for (let i = 2; i <= 50; i++) {
  let tekshirish = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      tekshirish = false;
      break;
    }
  }
  if (tekshirish) {
    tubSonlar.push(i);
  }
}

console.log(tubSonlar);

/*Sonni revers qilib, u o'zgarmaydigan palindrom sonmi yoki yo'qligini tekshiring.
  Masalan: 121 - palindrom, 123 - emas. */
/*
 let son = prompt("Ixtiyoriy son kiriting: ");
let teskariSon = son.split('').reverse().join('');

if (teskariSon == son) {
  console.log(son + " palindrom");
} else {
  console.log(son + " palindrom emas");
}

/* Ikkita raqamning eng katta umumiy bo'luvchisini (EKUB) toping.
  Masalan: 36 va 60 uchun EKUB. */
/*
let a = 12;
let b = 20;
let minSon = 0
let ekubSon;

if (a > b) {
  minSon = b;
} else {
  minSon = a;
}

for (let i = 1; i <= minSon; i++) {
  if (a % i === 0 && b % i === 0) {
    ekubSon = i;
  }
}

console.log("EKUB " + ekubSon);

// Ekukni hisoblash
let ekukSon = (a * b) / ekubSon;

console.log("EKUK " + ekukSon);

/* Sonning raqamlarining o'rta arifmetik qiymatini hisoblang.
  Masalan: 12345 raqamining o'rta arifmetigi 3. */
/*
let num = prompt("Son kiriting: ");
let sum = 0;
num = Number(num);

for (let i = num; i > 0; i = Math.floor(i / 10)) {
  sum += i % 10;
}

let ortaArifmetik = sum / num.toString().length

console.log(ortaArifmetik);

/* Berilgan sonning faktorialini hisoblang.
  Masalan: 5! = 120. */
/*
let factarialSon = prompt("Son kiriting:");
let factarial = 1;

for (let i = 1; i <= factarialSon; i++) {
  factarial*=i;
}

console.log(factarialSon + '! = ' + factarial);

/* Berilgan ikkita son oralig'ida juft va toq sonlar sonini hisoblang.
  Masalan: 10 dan 20 gacha. */
/*
let birinchioraliq = prompt("Number Start: ");
let ikkinchioraliq = prompt("Number Finsh: ");
let juftsonlar = [];

for (let i = Number(birinchioraliq); i <= Number(ikkinchioraliq); i++) {
  if (i % 2 === 0) {
    juftsonlar.push(i)
  }
}

console.log(juftsonlar);

/* Sonning binary shaklida nechta 1 borligini aniqlang.
  Masalan: 9 -> 1001 (2 ta 1). */
/*
let enterSon = Number(prompt("Son kiriting: "));
let binarySon = enterSon.toString(2);
let summa = 0;

for (let i = 0; i <= binarySon.length; i++) {
  if (binarySon[i] === '1') {
    summa++;
  }
}

console.log(summa);


/*Kvadrat ildizning butun qismiga yaqin sonni toping.
  Masalan: 17 uchun natija 4. */
/*
  let ixtiyoriySon = prompt("Ixtiroyoriy son kiriting: ");
  ixtiyoriySon = Number(ixtiyoriySon);

  if (isNaN(ixtiyoriySon)) {
      console.log("Bu son emas, qaytadan kiriting.");
  } else {
      let kv_ildiz = Math.floor(Math.sqrt(ixtiyoriySon));
      console.log(kv_ildiz);
  }

/* Sonning barcha raqamlarining ko'paytmasini hisoblang.
  Masalan: 123 -> 1 * 2 * 3 = 6. */
/*
let son__ixtiyoriy = prompt("Ixtiyoriy son kiriting: ");
son__ixtiyoriy = Number(son__ixtiyoriy);
let summ = 1

for (let i = son__ixtiyoriy; i > 0; i = Math.floor(i / 10)) {
  summ *= i % 10;
}

console.log(summ);

/* Sonni foydalanuvchi kiritgan raqam bo'yicha aylantiring (shift qiling).
  Masalan: 1234 ni 2 raqam bilan shift qiling -> 3412. */
/*
let ozgaruvchiSon = prompt("ixtiyoriy son kiriting: ");
let shiftRaqam = prompt("Shift raqamini kiriting: ");

let yangiSon = ozgaruvchiSon.slice(shiftRaqam) + ozgaruvchiSon.slice(0, shiftRaqam);

console.log(yangiSon);

// STRING

/* Berilgan stringda barcha so'zlarni teskari qilib chiqaring.
  Masalan: "Hello World" -> "olleH dlroW". */
/*
let text = prompt("ixtiyoriy matn kiritng: ");
text = text.split('').reverse().join('')

console.log(text);

/*String ichidagi barcha unlilarni o'chiring.
Masalan: "javascript" -> "jvscrpt". */
/*
let soz = prompt("Ixtiyoriy matn kiriting: ");
let undoshlar = "";
for (let i = 0; i < soz.length; i++) {
  let char = soz[i];
  if (!"aouie".includes(char)) {
    undoshlar += char;
  }
}

console.log(undoshlar);

/*Stringda har bir so'zning bosh harfini katta qilib chiqaring.
  Masalan: "hello world" -> "Hello World". */
/*
let text__ixtiyoriy = prompt("ixtiyoriy soz: ");
let words = text__ixtiyoriy.split(' ');
let result = '';

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  if (i < words.length - 1) {
    result += ' ';
  }
}

console.log(result);

/*Berilgan string palindrome ekanligini tekshiring.
  Masalan: "madam" - palindrom, "hello" - emas. */
/*
let soz_ = prompt("So'z kiriting: ");
let polindromSoz = soz_.split('').reverse().join('');

if (polindromSoz == soz_) {
  console.log(soz_ + " => Palindrome so'z");
} else {
  console.log(soz_ + " => Palindrome so'z emas");
}


/*Stringdagi raqamlarni ajratib oling va ularni son sifatida hisoblang.
  Masalan: "abc123def45" -> 123 + 45 = 168. */
/*
let str = prompt("soz kiriting: ");
let str__num = str.split('');
let raqamlar = [];
let yigindi = 0
for (let i = 0; i < str.length; i++) {
  let char_num = str__num[i]
  if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char_num)) {
    raqamlar.push(char_num);
  }
}

for (let j = 0; j < raqamlar.length; j++) {
  yigindi += Number(raqamlar[j]);
}

console.log(yigindi);

/* Stringning har bir belgisi nechta marta takrorlanganini hisoblang.
  Masalan: "mississippi" -> m: 1, i: 4, s: 4, p: 2. */
// ?

/*Stringni berilgan uzunlikda kesib oling va qolgan qismini ... bilan almashtiring.
  Masalan: "JavaScript is fun", uzunlik 10 -> "JavaScript...". */
/*
let text__ = prompt("Matn kiriting: ");
let kesilishi = prompt("Kesilishi kerak bo'lgan indexni kiriting: ");
kesilishi = Number(kesilishi);

natija = text__.slice(0, kesilishi) + "...";

console.log(natija);

/* Berilgan stringdagi faqat katta harflarni chiqarib bering.
  Masalan: "JaVaScrIpt" -> "JVSI". */
/*
let matn__ = prompt("matin kiritng:");
console.log(matn__.toUpperCase());

/* Stringdagi har bir raqamni ikki marta ko'paytirib qaytaring.
  Masalan: "a1b2c3" -> "a2b4c6". */

//?

/*Berilgan stringdagi so'zlarni alfavit tartibida qaytaring.
  Masalan: "banana apple cherry" -> "apple banana cherry". */
/*
let sozlar = prompt("Meva nomlarini kiritng: ");
sozlar = sozlar.split(' ').sort().join(' ');

console.log(sozlar);

// ARRAY

/*Massiv ichidagi eng katta va eng kichik qiymatni toping.
  Masalan: [2, 5, 7, 1, 9] -> eng katta: 9, eng kichik: 1. */
/*
let sonlar__royxati = [2, 3, 4, 5, 6, 7, 8, 2, 43, 4, 2,200];
let kattaSon = sonlar__royxati[0]
for (let i = 0; i <= sonlar__royxati.length; i++) {
  if(sonlar__royxati[i]>kattaSon){
    kattaSon = sonlar__royxati[i];
  }
}

console.log(kattaSon);

/*Berilgan massivda qiymatlarning o'rtacha arifmetigini toping.
  Masalan: [2, 4, 6, 8] -> o'rtacha: 5. */
/*
let arrNum = [2, 4, 6, 8];
let arrsum = 0;

for (let i = 0; i < arrNum.length; i++) {
  arrsum += arrNum[i];
}

console.log(arrsum /arrNum.length );

/* Massiv ichidagi barcha qiymatlarni unikal qilib qaytaring (takrorlanuvchilarni olib tashlang).
  Masalan: [1, 2, 2, 3, 4, 4] -> [1, 2, 3, 4]. */
/*
let arrNums = [1, 2, 2, 3, 4, 4];
let newarr = [...new Set(arrNums)];

console.log(newarr);

/* Massiv ichidagi barcha elementlarning ko'paytmasini hisoblang.
  Masalan: [2, 3, 4] -> 24. */
/*
let arrson = [2, 4, 6];
let arrkopaytma = 1;

for (let i = 0; i < arrson.length; i++) {
  arrkopaytma *= arrson[i];
}

console.log(arrkopaytma);

/* Berilgan sonning massivda nechta marta uchraganligini toping.
  Masalan: [1, 2, 3, 2, 2, 4] -> 2 raqami 3 marta. */
// ?

/*Massiv ichidagi juft va toq sonlarni alohida ajratib oling.
  Masalan: [1, 2, 3, 4] -> juft: [2, 4], toq: [1, 3]. */
/*
let sonlarArr = [1, 2, 3, 4, 5];
let toqSonlar = [];
let juftSonlar = [];

for (let i = 0; i <= sonlarArr.length; i++) {
  if(sonlarArr[i] % 2 ==0){
    juftSonlar.push(sonlarArr[i])
  } else {
    toqSonlar.push(sonlarArr[i])
  }
}

console.log("Juft sonlar ro'yxati " + juftSonlar);
console.log("Toq sonlar ro'yxati " + toqSonlar);

/* Massivni teskari qilib chiqaring.
  Masalan: [1, 2, 3] -> [3, 2, 1]. */
/*
let massiv = [1, 3, 4, 5];
let teskariMAssiv = massiv.reverse();

console.log(teskariMAssiv);

/*  Massiv ichida qidiruv qiymatini topish (binary search usuli bilan).
  Masalan: [1, 2, 3, 4, 5] ichida 3 ni toping.*/

//?

/*Massivni alfavit tartibida saralang (agar string massiv bo'lsa).
  Masalan: ["apple", "banana", "cherry"] -> ["apple", "banana", "cherry"]. */
/*
let massivMevalar = ["banana", "apple", "cherry"];
massivMevalar = massivMevalar.sort();

console.log(massivMevalar);

/* Berilgan massiv elementlarini o'ngga va chapga siljitib qaytaring.
  Masalan: [1, 2, 3] o'ngga -> [3, 1, 2], chapga -> [2, 3, 1]. */

//?