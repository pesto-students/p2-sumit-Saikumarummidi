
let Name = {
    firstName: "Sai",
    lastName: "kumar",
   
    }

    printFullName = function (hometown, State) {
    console.log(this.firstName + " " + this.lastName +" from " + hometown + " , " + State);
    }

printFullName.call(Name, "Visakhapatnam", "Andhra Pradesh"); 

let Name2 ={
    firstName : "Venkatesh",
    lastName : "Regulpati",

}
printFullName.call(Name2, "Bangalore", "Karnataka");

printFullName.apply(Name, ["Hyderabad", "Telangana"]);

let printMyName = printFullName.bind(Name, "Visakhapatnam", "Andhra Pradesh"); 
    
console.log(printMyName);

printMyName();

