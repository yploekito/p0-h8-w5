function totalDigitRekursif(angka){
    angka = Number(angka)
    angkaString = angka +""
    // console.log("angkanya", angka)
    // console.log("typeof", typeof(angka))
    if(angkaString.length === 1){
        return angka
    }else{
        // console.log(typeof(angka))
        var firstDigit = Number(angkaString[0])
        return (firstDigit + totalDigitRekursif(angkaString.substring(1)))
        
    }

}
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
// var string= "123456"
// // string.substring(1,2)
// console.log(string.substring(1))
// string = Number(string)
// console.log(typeof(string))
// console.log(string.splice(1))