// generatepassのボタンが押された時

const lowerCaseLetterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"];
const upperCaseLetterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let resultList = [];
let pwdList = [];

document.getElementById("generatepwd").onclick = function passwordGenarate() {
	// lowerCaseLetter
	const lowerCaseLetterFlg = document.form1.lowercaseletterflg;
	// upperCaseLetter
	const upperCaseLetterFlg = document.form1.uppercaseletterflg;
	// number
    const numberFlg = document.form1.numberflg;
    // numberOfDigits
    const numberOfDigits = document.form2.numberofdigits;

    if (lowerCaseLetterFlg.checked) {
        resultList = resultList.concat(lowerCaseLetterList);
    }
    if (upperCaseLetterFlg.checked) {
        resultList = resultList.concat(upperCaseLetterList);
    }
    if (numberFlg.checked) {
        resultList = resultList.concat(numberList);
    }
    for (let i = 0; i < numberOfDigits.value; i++) {
        pwdList = pwdList.concat(resultList[Math.floor(Math.random() * resultList.length)]);
    }
    const pwd = pwdList.join('');
    document.getElementById("copyTarget").value = pwd;
    pwdList = []
    resultList = [];
};