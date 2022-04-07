/**
 * 犬の情報が格納された配列 dogs があります。
 * dogs に対して操作を行う下の4問に回答してください。
 */
var dogs = [
    {
        id: 1,
        type: "toyPoodle",
        weight: 4
    },
    {
        id: 2,
        type: "husky",
        weight: 20
    },
    {
        id: 3,
        type: "pug",
        weight: 7.5
    },
];
// 例題: 全ての犬の type を順番にconsoleに出力してください。
// Answer:
dogs.forEach(function (dog) {
    console.log(dog.type);
});
// 問題1: dogsからweightが8未満の対象を取り除いた配列をconsoleに出力してください。
// Answer:
dogs.filter(function (dog) { return dog.weight >= 8; }).forEach(function (dog) { return console.log(dog); });
// 問題2: dogsからidが3のDogオブジェクトを取得してconsoleに出力してください。
// Answer:
dogs.filter(function (dog) { return dog.id === 3; }).forEach(function (dog) { return console.log(dog); });
// 問題3: dogs内の全Dogオブジェクトに isCat: false を追加した配列をconsoleに出力してください。
// Answer:
// 問題4: dogs 内の全ての weight を合計した値を返却する関数を作成してください。
// Answer:
var sumWeight = dogs.reduce(function (acc, dog) { return acc + dog.weight; }, 0);
console.log(sumWeight);
