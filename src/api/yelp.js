import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer nKfx_NIkkBVPtv06Q0UgTnW4FwFwuLT-HjCiE-QbiP_V8LVR48UQ8qi9n-RrORt984qBXdzEUIdVX1pyzqD63t8wi9oXvpMqye1LDtHL1278hgjNmLl0oadkWB3TYXYx",
  },
});
