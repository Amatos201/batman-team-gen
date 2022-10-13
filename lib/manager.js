const Employee = require("./employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role=this.getRole();
  }
    getRole() {
        console.log("Manager");
        return "Manager";
      };
      getOffice() {
        console.log(this.officeNumber);
        return `${this.officeNumber}`;
      };
    }

module.exports = Manager;