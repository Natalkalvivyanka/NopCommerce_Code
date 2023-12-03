export default class UserData{

    constructor(){
        this.newUser = new NewUser(
            'female',
            'Nativida',
            'Zahayska',
            '7',
            '8',
            '1989',
            'nativida.zahayska@gmail.com',
            'beast',
            'Newspage@1234mipo'
        )
    }

}

class NewUser{
    constructor(gender, firstName, lastName, birthDay, birthMonth, birthYear, email, company, password){
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
        this.email = email;
        this.company = company;
        this.password = password;
    }
}