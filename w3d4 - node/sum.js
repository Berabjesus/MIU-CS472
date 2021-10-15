const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
 });

 const question = (collector) => {
  readline.question("Enter a number ", input  => {
    if (/^[0-9-]+$/.test(input)) collector += parseInt(input)
    if (input === "stop") {
      console.log(collector);
      readline.close();
    } else question(collector)
   })
  
 }

 question(0);

// console.log(/^[0-9]+$/.test("4"));