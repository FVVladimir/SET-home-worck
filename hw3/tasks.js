// ===========================================task1========================================================

let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
let ss = s.toUpperCase();
console.log(ss.split(';'));

// =============================================task2==========================================================

let chairs = [
    ['xxx', 3],
    ['xxxx', 5],
    ['xx', 8],
    ['xxxxx', 8]
];

const meeting = (arr, need) => {
    let freeChair = [];

    for (i = 0; i < arr.length; i += 1) {
        freeChair.push(arr[i][1] - arr[i][0].length);
        console.log(freeChair);

    }
    let result = freeChair.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);
    console.log(result);
};

meeting(chairs);


