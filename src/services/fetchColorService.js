import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  axiosWithAuth()
    .get("/colors")
    .then((res) => {
      const colors = res.data;
      console.log('These are fetch colors:',colors);
      return colors
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchColorService;
