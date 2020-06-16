 
a =  "11011" //17
b = "101011" //7

function addBinary(first, second){
return (parseInt(first, 2) + parseInt(second, 2)).toString(2)
};


function addBinaryXOR(first, second){
    let carry = 0
    let sum = ''
    i = first.length-1
    j = second.length-1 
    while (i >= 0 || j >= 0){
        let f = first[i] ? first[i] : '0'
        let s = second[j] ? second[j] : '0'
        sum = String(f ^ s ^ carry) + sum
        if(f===s && f!== String(carry)){
            carry = Number(!carry)
        }
        i--
        j--
    }
    return carry ? String(carry) + sum : sum 
}

console.log(addBinary(a, b))
console.log(addBinaryXOR(a, b))