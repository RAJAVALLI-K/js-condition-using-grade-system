
// 2-A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A

let grade = parseInt(prompt('Enter a grade:'));
if (grade >= 80) {
    console.log('Grade A');
}
else if (grade < 80 && grade >= 60) {
    console.log('Grade B');
}

else if (grade < 60 && grade >= 50) {
    console.log('Grade C');
}

else if (grade < 50 && grade >= 45) {
    console.log('Grade D');
}
else if (grade < 45 && grade >= 25) {
    console.log('Grade E');
}
else {
    console.log('Grade F');
}
