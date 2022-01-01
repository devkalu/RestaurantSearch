import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 7q3Rc_rGPlIAUhfBJZ7iGc_TuT0i4slBZ38lZdfMXYhBs3zzh-9BsFoVXwaLnVipe-phgwhid0eiwS2_nUI1jVy79woLq2GRtJwQjN23p73soMPVa322hAYg6DHhXnYx",
  },
});
