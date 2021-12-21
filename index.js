let date = new Date();
let user = {
    firstName: prompt('Your name is ->'),
    lastName: prompt('Your last name is ->'),
    year: prompt('Your year of birthday is ->'),
    month: prompt('Your month of birthday is ->'),
    day: prompt('Your birthday day is ->')
}

const calculateAge = function (user_month, user_day, user_year) {
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - user_year;

    if (today_month < (user_month - 1)) {
        age--;
    }
    if (((user_month - 1) == today_month) && (today_day < user_day)) {
        age--;
    }
    return age;
}

let default_user = document.getElementsByTagName('span');

for (let i = 0; i < default_user.length; i++) {
    switch (default_user[i].innerText) {
        case 'date':
            default_user[i].innerText = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} / ${date.getHours()} : ${date.getMinutes()}`
            break;

        case 'firstName':
            if (user.firstName !== null) {
                default_user[i].innerText = `${user.firstName}`
            }
            break;

        case 'lastName':
            if (user.lastName !== null) {
                default_user[i].innerText = `${user.lastName}`
            }
            break;

        case 'age':
            if (user.day !== null && user.year !== null && user.month !== null) {
                default_user[i].innerText = `${calculateAge(user.month, user.day, user.year)}`
            }
            break;

        default:
            break;
    }
}