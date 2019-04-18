// 2.0 Event Emitter

//Import events package
const EventEmiiter = require("events");
//Get an EventEmitter Object
const eventEmitter = new EventEmiiter();

/**
 * Attach a listenere to the EventEmitter Object using on method
 * arg0 => String/Number : event identifier 
 * arg1 => a method to be called when the event occurs (anonymous method used here)
 */
eventEmitter.on("tutorial",()=>{
    console.log("Event name : tutorial");
});
//Emit a 'tutorial' event
eventEmitter.emit("tutorial");

//Passing arguments to event listener
eventEmitter.on("sum",(n1,n2)=>{
    console.log("Sum : " + (n1+n2));
});
//Emit a 'sum' event
eventEmitter.emit("sum",2,3);