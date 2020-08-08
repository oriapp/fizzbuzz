function fizzBuzz(first, until) {
    if (first > until || typeof first != `number` || typeof until != `number`) return;


    if (first % 5 == 0 && first % 3 == 0) console.log(`Fizz Buzz`)
        
    else if (first % 5 == 0) console.log(`Fizz`)
        
    else if (first % 3 == 0) console.log(`Buzz`)
        
    else console.log(first)

    fizzBuzz(first + 1, until) 
}
  


fizzBuzz(0,100)
