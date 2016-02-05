/*
** Create a Model called PhoneModel that contains:
** the following properties:
**   - types which is an array of strings; cisco, yealink, polycom
**   - instances - a reference to all instances created; can be an array or an object you choose
** the following methods:
**   - createInstance - private - will create a new javascript object with a unique ID - just use timestamp
**   - getInstance - will return a new instance (dont forget to keep reference )
**   - destroyInstance - will remove reference from instances
**   - getInstanceCount - will return you the number of valid instances
*/
//make Model, wrapped in a function to prevent the variables it uses internally from polluting the global scope

var PhoneModel = (function(){
  //make the properties of said model
  var types = ["Cisco", "Yealink", "Polycom"];
  //instances array will store myInstances
  var instances = [];
  //let's make some Methods
    //1.createInstance myObj with id set to new Date obj
      //with getTime method as reference
  var createInstance = function(){
    //this is how we will  create most objects
    var myInstaObj = new Object();
    myInstaObj.id=(new Date()).getTime();

    return myInstaObj ;
  };

    //2.getInstance: function myInstance returns new object by calling createInstance function and pushing onto instances array
  this.getInstance = function(){
    var myInstance = createInstance();
    instances.push(myInstance);

    return myInstance;
  };

  //3. counts instances by using .length method on instances array
  this.getInstanceCount = function(){

    return instances.length;
  };

  //4. removes references to instance filtering the instances(myInstance) in instance array
  this.destroyInstance = function(myInstance){
    //filtering instances array then setting to instance array
    instances = instances.filter(function(phone){
      //console.log(myInstance.id, phone.id);
      return myInstance.id !== phone.id;
    });
  };

  return this;
}).call({});

//sets PhoneModel.getInstance function to variable
var PM = PhoneModel.getInstance();

//log out the variable
console.log(PM); //object w/timestamp id


PhoneModel.destroyInstance(PM);

PM = PhoneModel.getInstance();

 console.log(PhoneModel.getInstanceCount());
