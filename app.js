
      //  assignment
      //  name
       var  name='huzaifa';
       console.log (name);

       var age=47;
       document.write(`im ${age} years old`);

      // sum
       var num1=23
       var num2=21
       var Sum= num1 + num2;
       console.log(Sum);
       
       //area of Rectriangle
       areaOfRecTriangle=(lenght,width)=>{
         let area=lenght*width;
         return area};
      let width=34;
       let lenght=23;
       let result= areaOfRecTriangle(lenght,width)
        console.log(result);

        // avrage of number
        averageOfNumber=(num1,num2,Sum)=>{
          let average=Sum/2;
          return average; }
          let average=averageOfNumber(num1,num2,Sum);
          console.log(average);

          //taxcalculator
          taxCalculator=(income)=>{
            let incometax=income*0.10;
            return incometax;
             }
             let income=322000;
             let incometax=taxCalculator(income);
             console.log(incometax);
 
             //even odd number
              evenOddNumber=(num)=>{
                if(Number=num%2==0){
                  Number='EVEN NUMBER';
                }
                else{
                  Number='ODD NUMBERR'
                }
                return Number;
              }
              let num=2;
              console.log(evenOddNumber(num));

          
          leapYear=(yeardays)=>{
            if(yeardays==366){
              return'leapyear';
            }
            if (yeardays==365) {
              return'normal year';
         }
          }
        let yeardays=2009;
        console.log(leapYear(yeardays));
        
       Grades=(marks)=>{
        if(marks>=70){
          return'A';
        }
        if (marks>=60) {
          return'B';
          }
          if(marks>=40){
            return'C'
          }
          else{
            return'FAIL';
          }
         }
         let marks=35;
         console.log(Grades(marks));
 
       Counting=()=>{
        let i=0;
         for(i ;i<=10;i++)
         {
          console.log('number is',i);
        }
        return i;
             }
      console.log(Counting());

      Reverse=()=>{
        let i = 10;
        while(i>=0){
        console.log ('the number is',i)
         i-- };
          
          console.log(i);
        }
        
     Reverse();


    //  GuessNumber=()=>{
    //   for(i){}
    //  }

   Greet=(name)=>{
    return name;
   }
   console.log('hello',name);

   let number=3;

   let square= number**2;

   console.log(`the square of ${number} is ${square}` );


    iSPrime=()=>{
      if (numbe % 2==0 ) {
        return true;
      }
      else{
           return false;
     
          }
              }
              
      let numbe=2
      console.log(iSPrime(number));
   
      Fruits=()=>{
        let fruit=['apple', 'potatto','tomatao','orange'];
        let flen=fruit.length;
        for( let i=0;i<flen;i++){
          console.log ("The fruits are",fruit[i]);
        }   
           return flen;
       }
      
       document.write(Fruits());
   

       FindLargestNumber=(numbers)=>{
         
         if(numbers.length ===0){
          return undefined;
         }
         let LargestNumber=numbers[0];
         for(let i=1; i<numbers.length; i++){
        if (numbers[i]> LargestNumber){
        LargestNumber = numbers[i]
        };
      }
      return LargestNumber
       };
       const numbersarray=[1,23,34,56,77,87];
         console.log(FindLargestNumber(numbersarray));

         Reverse=()=>{
          let array=[1,3,4,5,6,7,8,8];
          const reversed=array.reverse();
          return reversed;
         }
         console.log(Reverse());

         function countWords(sentence){
          let wordArray = sentence.split(/\s+/);
          return wordArray.length;
         }

         function Words(){
          const sentence = 'I am a student';
          const wordCount = countWords(sentence);
          return wordCount;
         }
            console.log(Words());

            function isPalindrome(word) {
              // Remove non-alphanumeric characters and convert to lowercase
              const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            
              // Compare the cleaned word with its reverse
              const reversedWord = cleanWord.split('').reverse().join('');
            
              return cleanWord === reversedWord;
            }
            
            // Example usage:
            const inputWord = "racecar";
            const isPalindromic = isPalindrome(inputWord);
            
            console.log(`Is it a palindrome? ${isPalindromic}`);
            
            