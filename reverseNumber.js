function reverseNum(num1) {

  if(num1>=0 && num1<=9){

    return num1;
  }

    let reversed_num = 0; 

    
    while (num1 != 0) {
        let rightmost = num1 % 10;   
        reversed_num = reversed_num * 10 + rightmost;   
        num1 = Math.floor(num1 / 10);   
    }

    
   // console.log("Reversed number is: " + reversed_num);
   return reversed_num;
   

}


reverseNum(2578);

console.log("Reversed number is: " + reverseNum(2578));
