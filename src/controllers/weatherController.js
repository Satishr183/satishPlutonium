let axios = require("axios");

let getWeather = async function (req, res) {
  try {
    let cityName = req.query.q;
    let id = req.query.appid;
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${id}`,
    };
    let output = await axios(options);
    let newData = output.data;

    res
      .status(201)
      .send({ location: newData.name,temp:newData.main.temp, status:true});
  } catch (err) {
    res.send({ error: err });
  }
};

let getSortedData = async function (req, res) {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let newWeatherData = [];
    for (let ele of cities) {
      let obj = { city: ele };//{city:bangalore}
      let output = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ele}&appid=0800ee0fc36b4f6ad5985ffe225244d6`);
      obj.temp = output.data.main.temp;//{city:bang ,tem:302}
      newWeatherData.push(obj);
      console.log(newWeatherData);
    }
  let sorted = newWeatherData.sort(function(a,b){return a.temp-b.temp})
    res.send({ data: sorted });
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports.getWeather = getWeather;
module.exports.getSortedData = getSortedData;
