const args = process.argv.slice(2);

function sumNumbers(a, b) {
  return Number(a) + Number(b);
}

if (args.length !== 2) {
  console.log("Please provide exactly two numbers as command line arguments.");
} else {
  const num1 = args[0];
  const num2 = args[1];
  const result = sumNumbers(num1, num2);
  console.log(result);
}
