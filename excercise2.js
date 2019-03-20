function changeVocals (str) {
    var output =""
    vokal = {
        a :"b",
        i: "j",
        u : 'v',
        e : 'f',
        o : 'p',
        A : 'B',
        I : 'J',
        U : 'V',
        E : 'F',
        O : 'P'
    }
    for (var i = 0; i<str.length ; i++){
        if (vokal[str[i]] !== undefined){
            output = output + vokal[str[i]]
        } else{
            output = output + str[i]
        }
    }return output
}
  
function reverseWord (str) {
    var output =""
    for (var i = str.length-1; i >=0 ; i--){
        output = output + str[i]
    }return output
}
  
function setLowerUpperCase (str) {
    var output = ""
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i<str.length; i++){
        if (lowerCase.includes(str[i])){
            output = output + str[i].toUpperCase()
            // console.log("lowercase")
        }else if(upperCase.includes(str[i])){
            output = output + str[i].toLowerCase()
            // console.log("uppercase", str[i].toLowerCase())
        }else{
            output = output + str[i]
            // console.log("heh")
        }//console.log(output)
    }return output
}
  
function removeSpaces (str) {
    output = str.split(" ").join("")
    return output
}
  
function passwordGenerator (name) {
    var output1= changeVocals(name)
    // console.log("ganti vokal :", output1)
    var output2= reverseWord(output1)
    // console.log("direverse :", output2)
    var output3 = setLowerUpperCase(output2)
    // console.log("loweruppercase :", output3)
    var output4 = removeSpaces(output3)
    // console.log("remove spaces :", output4)
    return output4

}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'