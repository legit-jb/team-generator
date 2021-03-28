class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return `Name: ${this.name}`
    }

    getId () {
        return `Id: ${this.id}`
    }
    
    getRole () {
        return `Employee`
    }
}

module.exports = Employee