var age = prompt("Enter your age: ");
if (age < 0) {
    console.log(Error);
}
else if (age == 21) {
    console.log("Happy 21st birthday!!");
}
else if (age % 2 == 1)
{
    console.log("Your age is odd");
}
else if (age % Math.sqrt(age) == 0) {
    console.log("Perfect square");
}

