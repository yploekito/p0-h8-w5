function sorting(arrNumber) {
    var left = []
    var right = []
    var pivot = arrNumber[0]
    for (var i = 1; i<arrNumber.length ; i++){
        if (arrNumber[i]< pivot){
            left.push(arrNumber[i])
        }else{
            right.push(arrNumber[i])
        }
    } //console.log("left",left)
    // console.log("right",right)
    if (arrNumber.length <= 1){
        return arrNumber
    }else{
        return (sorting(left).concat(arrNumber[0], sorting(right)))
    }
  }
  
  function getTotal(arrNumber) {
    var counter = 0
    var i = arrNumber.length-1
    if (arrNumber.length === 0){
        return ""
    }
    while(arrNumber[i] === arrNumber[arrNumber.length -1]){
        counter ++
        i --
    }return ("angka paling besar adalah " + arrNumber[arrNumber.length-1] +" dan jumlah kemunculan sebanyak " + counter +" kali")
    // if (arrNumber.length = 0)return 
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''