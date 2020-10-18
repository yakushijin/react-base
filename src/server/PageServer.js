//js拡張
import axios from "axios";

function pageServer(recData) {
  var resData;
  axios
    .post("/apiurl", {
      recData,
    })
    .then(function (response) {
      resData = response.data;
    });
  return resData;
}

export default pageServer;
