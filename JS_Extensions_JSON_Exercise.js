
/*
The below is a User Model that contains one function called getData.
This model handles caching, etc for user stuff.

Do NOT modify any code in the model
*/

var UserModel = (function(){
  var cache = {};
  var data = {
    "data": [
      {
        "id":1,
        "first_name": "Tom",
        "last_name": "Athens",
        "email": "tathens@star2star.com",
        "ahPhone": "555-555-1212",
        "active": true,
        "customer_id": 81,
        "status": 0,
        "locations": [{"id":635, "name": "Donut Hole"}, {"id": 1905, "name": "James Office"}],
        "extensions":[{"id":23, "number": 171, "callerId": "Tom Athens"},{"id":121, "number": 191, "callerId": "Tom Athens 2"} ],
        "featurePermissions":[
          {"appKey": "orion_app_messages", "enabled": true, "id": 4, "mask": 8, "starlet": true, "name": "Activity"},
          {"appKey": "orion_app_starcotnact", "enabled": true, "id": 172, "mask": 3554432, "starlet": true, "name": "StarContact"},
          {"appKey": "orion_app_starchat", "enabled": true, "id": "122", "mask": 1048576, "starlet": true, "name": "StarChat"},
          {"appKey": "orion_app_starscope2", "enabled": true, "id": 1, "mask": 0, "starlet": true, "name": "StarScope2"}
        ]
      },
      {
        "id":2,
        "first_name": "Duncan",
        "last_name": "Neal",
        "email": "dneal@star2star.com",
        "ahPhone": "555-555-1212",
        "active": true,
        "customer_id": 81,
        "status": 0,
        "locations": [{"id":635, "name": "Donut Hole"}, {"id": 1905, "name": "James Office"}],
        "extensions":[{"id":12, "number": 171, "callerId": ""},{"id":111, "number": 111, "callerId": "Duncan"} ],
        "featurePermissions":[
          {"appKey": "orion_app_messages", "enabled": true, "id": 4, "mask": 8, "starlet": true, "name": "Activity"},
          {"appKey": "orion_app_starcotnact", "enabled": true, "id": 172, "mask": 3554432, "starlet": true, "name": "StarContact"},
          {"appKey": "orion_app_starchat", "enabled": true, "id": "122", "mask": 1048576, "starlet": true, "name": "StarChat"},
          {"appKey": "orion_app_starscope2", "enabled": true, "id": 1, "mask": 0, "starlet": true, "name": "StarScope2"}
        ]
      },
      {
        "id":3,
        "first_name": "Kassey",
        "last_name": "Nichols",
        "email": "knichols@star2star.com",
        "ahPhone": "555-555-1212",
        "active": true,
        "customer_id": 81,
        "status": 0,
        "locations": [{"id":635, "name": "Donut Hole"}, {"id": 1905, "name": "James Office"}],
        "extensions":[{"id":11, "number": 119, "callerId": ""},{"id":222, "number": 222, "callerId": ""} ],
        "featurePermissions":[
          {"appKey": "orion_app_messages", "enabled": true, "id": 4, "mask": 8, "starlet": true, "name": "Activity"},
          {"appKey": "orion_app_starcotnact", "enabled": true, "id": 172, "mask": 3554432, "starlet": true, "name": "StarContact"},
          {"appKey": "orion_app_starchat", "enabled": true, "id": "122", "mask": 1048576, "starlet": true, "name": "StarChat"},
          {"appKey": "orion_app_starscope2", "enabled": true, "id": 1, "mask": 0, "starlet": true, "name": "StarScope2"}
        ]
      },
      {
        "id":4,
        "first_name": "James",
        "last_name": "Schimmoeller",
        "email": "jschimmoeller@star2star.com",
        "ahPhone": "555-555-1212",
        "active": true,
        "customer_id": 81,
        "status": 0,
        "locations": [{"id":635, "name": "Donut Hole"}, {"id": 1905, "name": "James Office"}],
        "extensions":[{"id":0, "number": 198, "callerId": "James James James"},{"id":544, "number": 544, "callerId": "James Mobile"} ],
        "featurePermissions":[
          {"appKey": "orion_app_messages", "enabled": true, "id": 4, "mask": 8, "starlet": true, "name": "Activity"},
          {"appKey": "orion_app_starcotnact", "enabled": true, "id": 172, "mask": 3554432, "starlet": true, "name": "StarContact"},
          {"appKey": "orion_app_starchat", "enabled": true, "id": "122", "mask": 1048576, "starlet": true, "name": "StarChat"},
          {"appKey": "orion_app_starscope2", "enabled": true, "id": 1, "mask": 0, "starlet": true, "name": "StarScope2"}
        ]
      }
    ]
  };

var extensions = { 0: 	{  addressID: 0,
                          agentAwayToggle: 1,
                          agentID: 0,
                          agentPin: false,
                          agentStation: false,
                          availabilityStatus: "Available",
                          cac: false,
                          callerId: "Legitimate",
                          createdAt: 1307482148000,
                          customDevice: 0,
                          deleted: false,
                          dial411: true,
                          dial900: false,
                          directoryHide: false,
                          dst: true,
                          email: "walt@gallantrygroup.com",
                          expansion_module: 0,
                          extension: "102",
                          extensionId: 10383,
                          fax: false,
                          faxNumber: "",
                          firstname: "Walter",
                          framework_hide: false,
                          fwPermanent: false,
                          fxsDevice: 0,
                          fxsDevicePort: 0,
                          id: 10383,
                          incoming_calls: true,
                          international_calls: false,
                          intracompany_calls: true,
                          ip: "",
                          ipei: "",
                          lastname: "Emerick",
                          ld_calls: true,
                          lineAppearances: 6,
                          local_calls: true,
                          locationId: 570,
                          mac: "44e4d945454e",
                          needsProvision: false,
                          numLines: 6,
                          operatorMode: false,
                          outbound_ac: "941"
                          },
	                  11: {	addressID: 0,
                          agentAwayToggle: 1,
                          agentID: 0,
                          agentPin: false,
                          agentStation: false,
                          availabilityStatus: "Available",
                          cac: false,
                          callerId: "SIP-T26P",
                          createdAt: 1426862670000,
                          customDevice: 0,
                          dial411: true,
                          dial900: false,
                          directoryHide: false,
                          dst: true,
                          expansion_module: 0,
                          extension: "219",
                          extensionId: 86196,
                          fax: false,
                          faxNumber: "",
                          framework_hide: false,
                          fwPermanent: false,
                          fxsDevice: 0,
                          fxsDevicePort: 0,
                          id: 86196,
                          incoming_calls: true,
                          international_calls: false,
                          intracompany_calls: true,
                          ip: "",
                          ipei: "",
                          ld_calls: true,
                          lineAppearances: 3,
                          local_calls: true,
                          locationId: 570,
                          mac: "00156547ef37",
                          needsProvision: false,
                          numLines: 3,
                          operatorMode: false,
                          outbound_ac: "941"
                        },
	                  12: { addressID: 2749,
                          agentAwayToggle: 1,
                          agentID: 0,
                          agentPin: false,
                          agentStation: false,
                          availabilityStatus: "Available",
                          cac: false,
                          callerId: "Evan Rimes",
                          createdAt: 1429040013000,
                          customDevice: 0,
                          deleted: false,
                          dial411: true,
                          dial900: false,
                          directoryHide: false,
                          dst: true,
                          email: "bfletcher@star2star.com",
                          expansion_module: 0,
                          extension: "334",
                          extensionId: 86277,
                          fax: false,
                          faxNumber: "",
                          firstname: "Ben",
                          framework_hide: false,
                          fwPermanent: false,
                          fxsDevice: 0,
                          fxsDevicePort: 0,
                          id: 86277,
                          incoming_calls: true,
                          international_calls: false,
                          intracompany_calls: true,
                          ip: "",
                          ipei: "",
                          lastname: "Fletcher",
                          ld_calls: true,
                          lineAppearances: 1,
                          local_calls: true,
                          locationId: 570,
                          mac: "",
                          needsProvision: false,
                          numLines: 1,
                          operatorMode: true,
                          outbound_ac: "941",
                        },
                    23: { addressID: 3282,
                          agentAwayToggle: 1,
                          agentID: 0,
                          agentPin: false,
                          agentStation: false,
                          availabilityStatus: "Available",
                          cac: false,
                          callerId: "Ben's Fluffy",
                          createdAt: 1447689712000,
                          customDevice: 0,
                          deleted: false,
                          dial411: true,
                          dial900: false,
                          directoryHide: false,
                          dst: true,
                          email: "bfletcher@star2star.com",
                          expansion_module: 0,
                          extension: "243",
                          extensionId: 87372,
                          fax: false,
                          faxNumber: "",
                          firstname: "Ben",
                          framework_hide: false,
                          fwPermanent: false,
                          fxsDevice: 0,
                          fxsDevicePort: 0,
                          id: 87372,
                          incoming_calls: true,
                          international_calls: false,
                          intracompany_calls: true,
                          ip: "",
                          ipei: "",
                          lastname: "Fletcher",
                          ld_calls: true,
                          lineAppearances: 1,
                          local_calls: true,
                          locationId: 570,
                          mac: "",
                          needsProvision: false,
                          numLines: 1,
                          operatorMode: true,
                          outbound_ac: "941"
                        }
    };

  this.getUserData = function(){
    return new Promise(function(resolve, reject){
      !!cache && (cache = data);
      resolve(cache);
    });
  };

this.getExtensionData = function(){
  return !!extensions ? extensions : {};
};
  return this;

}).call({});

//extObj returns first
  var extObj = UserModel.getExtensionData();

  //promise returned after extObj runs
UserModel.getUserData().then(function(usersData){
    //users varible placeholder for usersData.data
  var users = usersData.data;
      //got users data

    //allData is the array we are populating, let's define it
  var allData = users.map(function(user){

    //create new object for extensions
  var bigObj = {};

    //assign to an appropriately descriptive variable name
  var firstUserExtensionID = user.extensions[0].id;

    //get keys for extensions obj, iterate over extensions
    Object.keys(extObj[firstUserExtensionID]).map(function(extension){
      bigObj[extension] = extObj[firstUserExtensionID][extension];
      });
    Object.keys(user).map(function(uInfo){
      bigObj[uInfo] = user[uInfo];
          //console.log(firstUserExtensionID);
      });
        return bigObj;
  });
    console.log(allData);
});

/*
	Your assignment is to  get the data for users and extensions from userModel, then merge each user object with the extension object corresponding to the first extension Id for each user.

If a key exists in both user and extension objects then use the value from the user object.  Result should be an array with 4 large objects.

Hint:  Try to use Object.keys
*/
