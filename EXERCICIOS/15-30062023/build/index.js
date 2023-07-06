"use strict";
function validateRenovation(dateBirth, dateIssue) {
    let formatDateBirth = new Date(dateBirth);
    let dateBirthYear = formatDateBirth.getFullYear();
    let today = new Date();
    let currentYear = today.getFullYear();
    let formatDateIssue = new Date(dateIssue);
    let dateIssuYear = formatDateIssue.getFullYear();
    let age = currentYear - dateBirthYear;
    let issueYears = currentYear - dateIssuYear;
    console.log(age, issueYears);
    let result = false;
    if (age <= 20 && issueYears >= 10) {
        result = true;
    }
    else if (age > 20 && age <= 50 && issueYears >= 10) {
        return true;
    }
    else if (age > 50 && issueYears > 15) {
        result = true;
    }
    else {
        result = false;
    }
    return false;
}
console.log(validateRenovation('24/04/1993', '07/11/2015'));
//# sourceMappingURL=index.js.map