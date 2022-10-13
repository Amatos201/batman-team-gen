const Employee = require("./employee");
class Engineer extends Employee {

  constructor(name, id, email, github) {
  }
  getGitHub() {
    console.log(this.github);
    return `${this.github}`;
  }

  getRole() {
    console.log("Engineer");
    return "Engineer";
  }

  
  
module.exports = Engineer;
