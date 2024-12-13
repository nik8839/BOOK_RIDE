const axios = require("axios");
const captainModel = require("../models/captain.model");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GRAPHHOPPER_API_KEY;

  const query = new URLSearchParams({
    q: address,
    locale: "en",
    limit: "5",
    reverse: "false",
    debug: "false",
    point: "", // optional: leave empty if you're just doing address lookup
    provider: "default",
    key: apiKey,
  }).toString();

  const url = `https://graphhopper.com/api/1/geocode?${query}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    // Check if there are geocode results
    if (data.hits && data.hits.length > 0) {
      const location = data.hits[0].point;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to find coordinates for the provided address");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

module.exports.getDistanceAndTime = async (
  originAddress,
  destinationAddress
) => {
  // Step 1: Get coordinates for origin and destination
  const apiKey = process.env.GRAPHHOPPER_API_KEY;

  try {
    // Step 1: Get Coordinates for both the origin and destination
    const destination = await this.getAddressCoordinate(destinationAddress);
    const origin = await this.getAddressCoordinate(originAddress);

    let pt1 = [origin.lat, origin.lng];
    let pt2 = [destination.lat, destination.lng];
    //console.log("hi everyone")
    // console.log(pt1);
    // console.log(pt2);
    // Step 2: Construct the query for the GraphHopper Routing API
    const query = new URLSearchParams({
      profile: "car",
      point: `${origin.lat},${origin.lng}`, // Origin coordinates
      point: `${destination.lat},${destination.lng}`, // Destination coordinates

      curbside: "any",
      locale: "en",
      elevation: "false",
      details: "string",
      optimize: "false",
      instructions: "true",
      calc_points: "true",
      debug: "false",
      points_encoded: "true",
      "ch.disable": "false",
      heading: "0",
      heading_penalty: "300",
      pass_through: "false",
      algorithm: "round_trip",
      "round_trip.distance": "10000",
      "round_trip.seed": "0",
      "alternative_route.max_paths": "2",
      "alternative_route.max_weight_factor": "1.4",
      "alternative_route.max_share_factor": "0.6",
      key: apiKey,
    }).toString();

    // const query = new URLSearchParams();
    // query.append('profile', 'car');
    // query.append('locale', 'en');
    // query.append('instructions', 'true');
    // query.append('details', 'true');
    // query.append('key', apiKey);

    // // Add the origin and destination points using `append` to avoid overwriting
    // query.append('point', `${origin.lat},${origin.lng}`);  // Origin coordinates
    // query.append('point', `${destination.lat},${destination.lng}`);  // Destination coordinates

    // Step 3: Call the Routing API to get the route
    const routeUrl = `https://graphhopper.com/api/1/route?profile=car&key=${apiKey}&point=${origin.lat},${origin.lng}&point=${destination.lat},${destination.lng}`;

    // const routeUrl = `https://graphhopper.com/api/1/route?${query.toString()}`;
    const response = await axios.get(routeUrl);

    if (response.data.paths && response.data.paths.length > 0) {
      const route = response.data.paths[0]; // Get the first route (if multiple are available)

      // Extracting distance and time from the response
      const distance = route.distance; // Convert distance from meters to kilometers
      const time = route.time; // Convert time from milliseconds to minutes

      return {
        distance: distance/1000,
        time: time/1000/60,
      };
    } else {
      throw new Error("No route found");
    }
  } catch (error) {
    console.error("Error fetching route:", error);
    throw error;
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("query is required");
  }

  const apiKey = process.env.GRAPHHOPPER_API_KEY;
  const query = new URLSearchParams({
    q: input,
    locale: "en", // Locale can be adjusted as needed
    limit: "10", // Limit the number of suggestions
    reverse: "false",
    debug: "false",
    provider: "default", // Default provider, can be changed if needed
    key: apiKey,
  }).toString();

  const url = `https://graphhopper.com/api/1/geocode?${query}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    // Check if there are any suggestions
    if (data.hits && data.hits.length > 0) {
      // Map the results to a simple list of descriptions
      //   return data.hits.map((hit) => hit.name).filter((value) => value);
      return data.hits;
    } else {
      throw new Error("Unable to fetch autocomplete suggestions");
    }
  } catch (err) {
    console.error("Error fetching suggestions:", err);
    throw err;
  }
};

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    // radius in km

    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]
            }
        }
    });

    return captains;

}
