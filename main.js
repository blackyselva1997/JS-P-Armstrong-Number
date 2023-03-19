let number = Number(prompt("enter a number"));
let a = number;
let calc = 0;

while (number > 0) {
    let sum = number % 10;
    number = (number-sum) / 10;
    calc += sum**3;
}

if (a == calc) {
    document.write("Armstrong Number");
} else {
    document.write("not Armstrong number")
}