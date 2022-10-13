const Employee = require("./employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        
        getRole() {
            console.log("Intern");
            return "Intern";
        }
        
        getSchool() {
            console.log(this.school);
            return `${this.school}`;
        }
    
        
module.exports = Intern;