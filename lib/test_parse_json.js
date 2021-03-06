const axios = require("axios");

const getLocation = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    const returnData = {
      city: `${data.results[0].formatted_address}`,
      latitude: `${data.results[0].geometry.location.lat}`,
      longitude: `${data.results[0].geometry.location.lng}`
    };

    return returnData;

  } catch (error) {
    console.log(error);
  }
};



(function (root) {
  // Defines the name of the local variable the passwordGenerator library will use
  // this is specially useful if window.passwordGenerator is already being used
  // by your application and you want a different name. For example:
  //    // Declare before including the passwordGenerator library
  //    var localPasswordGeneratorLibraryName = 'pass';

  var localName = "test_parse_json";

  var test_parse_json = function() {
    const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
    const mypromise = getLocation(url);

    return mypromise;
  };



	// exports['test_parse_json'] = func
	// or this['test_parse_json'] = func 
  ((typeof exports !== 'undefined') ? exports : root)[localName] = test_parse_json;

	// no exports
	// then we use module
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = test_parse_json;
    }
  }

  // Establish the root object, `window` in the browser, or `global` on the server.
}(this));

