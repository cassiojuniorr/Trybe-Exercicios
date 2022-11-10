export default class Person {
    constructor(private _name: string, private _birthDate: Date) {
        // this.name = name;
        // this.birthDate = birthDate;
        this.validations()

    }

    validations() {
        if(this._name.length < 3) {
            throw new Error('INVALID_NAME');
        }
        const nowTime = new Date().getTime();

        if(this._birthDate.getTime() > nowTime) {
            throw new Error('INVALID_FUTURE_DATE');
        }
        const age = this.getAge(this._birthDate);

        if (age > 120) {
            console.log('age', age);
            throw new Error('INVALID_AGE');
        }
    }

    get name() {
        return this._name;
    }

    getBirthDate() {
        return this._birthDate;
    }

    getAge(value: Date) {
        const age = new Date().getTime() - value.getTime();

        return age;
    }

    set name(name: string){
        this._name = name;
    }

    setBirthDate(date: Date) {
        this._birthDate = date;
    }

}