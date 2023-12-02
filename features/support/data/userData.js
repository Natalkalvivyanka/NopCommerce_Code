export default class UserData{

    constructor(){
        this.newUser = new NewUser(
            'female',
            'Nataliya',
            'Zahayska',
            '7',
            '8',
            '1989',
            'simba.zahayska@testdevlab.com',
            'best',
            'Newspage@1234simba'
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
        this.password = password
    }
}