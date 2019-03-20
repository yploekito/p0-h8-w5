function kaliTerusRekursif(angka){
    // angka = Number(angka)
    angkaString = angka + ""
    if( angkaString.length  === 1){
        return angka
    }else{
        var hasilKali = 1
        for(var i = 0; i<angkaString.length ; i++){
            hasilKali = hasilKali * Number(angkaString[i])
        }return kaliTerusRekursif(hasilKali)
    }

}console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6