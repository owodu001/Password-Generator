// prompt('Please enter your password criteria. Choose from the following options: Special Characters; Numeric Characters; Upper Case Characters; Lower Case Characters');

function generatePassword() {
    const lowerC = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const numbers = '123456789'.split('');
    const specialC = '!@#$%^&*(-+;/?><~[{,'.split('');
    const upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const mixedC = {
        lowerC: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        numbers: '123456789'.split(''),
        specialC: '!@#$%^&*(-+;/?><~[{,'.split(''),
        upperC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    };

    const empty = [];
    const array = ["lowerC", "numbers", "specialC", "upperC"];
    for (i = 0; i < mixedC.length; i++) {
        const randomPw = Math.floor(Math.random() * mixedC.length);
        console.log(mixedC[randomPw]);
        // nothing is showing up in the console anymore and not sure which change broke the code.
        // console.log(mixedC)
    }

    // for (pw = 0; pw < mixedC.length; pw++) {
    //     const randomPw = Math.floor(Math.random() * mixedC.length);
    //     const random = array[randomPw];
    //     // const m = empty.push(mixedC[randomPw]);
    //     // let p = " ";
    //     // console.log(mixedC[random]);
    //     console.log(empty)

    // }




    // document.getElementById("password").innerHTML = p;


    // console.log(empty + randomPw)

    // for (pw = 0; pw < mixedC.length; pw++) {
    //         const randomIndex = Math.floor(Math.random() * mixedC.length);
    //         console.log()

    //         // const newPass = randomPw + randomIndex;
    //     }
    //     for (pw = 0; pw < numbers.length; pw++) {
    //         const randomNumbers = Math.floor(Math.random() * numbers.length);
    //         console.log(numbers[randomNumbers] + lowerC[randomIndex] + '')
    //     }
    // window.generatePassword = generatePassword;
}



generatePassword()

// const pwgenerator = {
// numbers: '123456789'.split(''),
//     lowerC: 'abcdefghijklmnopqrstuvwxyz'.split(''),


// };