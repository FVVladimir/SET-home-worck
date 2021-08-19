// ===========================================task1========================================================

let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// ==================================================-1-===============================================================
console.log(s.split(';')
    .map(n => n.split(':').reverse().join(':'))
    .sort()
    .map(n => `(${n.split(':')[0]}, ${n.split(':')[1]})`.toUpperCase())
    .join(``));


// ====================================================-2-=======================================================
// const s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//   return s.toUpperCase().split(';')
//           .map(name => name.split(':').reverse())
//           .sort()
//           .reduce((accumulator, name) => ( accumulator += `(${name[0]}, ${name[1]})`), "");

// =============================================task2==========================================================

let chairs = [
    ['xxx', 3],
    ['xxxx', 5],
    ['xx', 8],
    ['xxxxx', 8]
];

const meeting = (arr, need) => {
    let freeChair = [];
    let result = 0;
    for (i = 0; i < arr.length; i += 1) {
        freeChair.push(arr[i][1] - arr[i][0].length);
        console.log(freeChair);
        result = freeChair.reduce(function (sum, elem) {
            return sum + elem;
        }, 0);
        if (result >= need) break;
    }

    console.log(result);
};

meeting(chairs, 7);


