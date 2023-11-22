function agePrompt() {
    let birthYear = prompt('Enter your year of birth');
    birthYear = Number(birthYear)

    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    let ageGroup;
    if (age < 18){
        ageGroup = 'minor';
    }else if(age > 18 && age < 36){
        ageGroup = 'youth';
    }else {
        ageGroup = 'Elder';
    }
    console.log(`You are now ${ageGroup}`);
}