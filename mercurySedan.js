//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(maker, model, year, color, mileage) {
        super(maker, model, year, color, mileage);
        this.maxPassengers = 5;
        this.Passengers = 0;
        this.wheelNumber = 4;
        this.maxSpeed = 160;
        this.Fuel = 10;
        this.scheduleService = false;
    }

    checkScheduleService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        } 
    }

    start () {
        if (this.fuel > 0) {
            console.log("Engine started");
            return this.started = true
        } else {
            console.log("Engine empty, refuel");
            return this.started = false
        }
    }

    loadPassenger () {
        if (this.passenger < this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log("This vehicle does not have enough space");
        }
    } else {
        console.log("This car is full");
    }
        }
}


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
