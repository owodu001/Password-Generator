// prompt('Please enter your password criteria. Choose from the following options: Special Characters; Numeric Characters; Upper Case Characters; Lower Case Characters');

function generatePassword() {
    const lowerC = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const numbers = '123456789'.split('');
    const specialC = '!@#$%^&*(-+;/?><~[{,'.split('');
    const upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const mixedC = {
        lowerC: 'abcdefghijklmnopqrstuvwxyz'.split('');
        numbers: '123456789'.split('');
        specialC: '!@#$%^&*(-+;/?><~[{,'.split('');
        upperC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    };
    const randomPw = '';

    for (pw = 0; pw < lowerC.length; pw++) {
        const randomIndex = Math.floor(Math.random() * lowerC.length);
        console.log(lowerC[randomIndex] + numbers.slice(randomIndex) + randomPw + randomIndex);
        // const newPass = randomPw + randomIndex;

    }
}


generatePassword()

// const pwgenerator = {
// numbers: '123456789'.split(''),
//     lowerC: 'abcdefghijklmnopqrstuvwxyz'.split(''),


// };

// function getRandom(arr, n) {
// var result = new Array(n),
//     len = arr.length,
//     taken = new Array(len);
// if (n > len)
//     throw new RangeError("getRandom: more elements taken than available");
// while (n--) {
//     var x = Math.floor(Math.random() * len);
//     result[n] = arr[x in taken ? taken[x] : x];
//     taken[x] = --len in taken ? taken[len] : len;
// }
// return result;