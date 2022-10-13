class Employee {
    constructor(name, id, email, role) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
    }
  //get info from employee
        getId() {
            Console.log(this.id);
            return '${this.name}';
          }

          getEmail() {
            console.log(this.email)
            return '${this.email}';
          } 
          getName() {
            console.log(this.name);
            return `${this.name}`;
          } 
            getRole() {
                console.log("Employee");
                return `Employee`;
            }
          



    printInfo()
     {
      console.log(`This Employee will have ${this.role}`)
    }
  }
  
  
  module.exports = Employee;