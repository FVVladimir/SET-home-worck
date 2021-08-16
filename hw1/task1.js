const generateRandom = (from, to) => {

    return Math.floor(Math.random() * (to - from + 1)) + from;

};

const LOG_MIN_LEN = 2;
const LOG_MAX_LEN = 20;
const LOG_SYM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const LOG_SYM_LEN = LOG_SYM.length - 1;
let LOGIN = '';

const logInLen = generateRandom(LOG_MIN_LEN, LOG_MAX_LEN);

// console.log(logInLen);

for (i = 0; i < logInLen; i += 1) {

    const rand = generateRandom(0, LOG_SYM_LEN);
    // console.log(rand);
    LOGIN = `${LOGIN}${LOG_SYM[rand]}`;

}
LOGIN.toLowerCase();
console.log(LOGIN);
console.log(LOGIN[0])