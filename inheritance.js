function Employee(){

    this.Name="";
    this.DoWork= function(){

        alert("Basic Work");
    }

    this.attendance = function(){

        alert("Attendance successful");
    }

}

function Manager(){

    this.Cabin ="";
    this.DoWork = function(){

        alert("Manages Team");
    }
}

var emp=new Employee();
Manager.prototype = emp;

var man=new Manager();
man.Name="Mayuu";
man.attendance();
man.DoWork();
