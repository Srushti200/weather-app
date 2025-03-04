// key = f8b22bc62cd40e6b1d109dc1be06f097

// http://api.weatherstack.com/current? access_key = f8b22bc62cd40e6b1d109dc1be06f097& query = New York







function sendReq() {
    const promise = fetch(
        "http://api.weatherstack.com/current?access_key=f8b22bc62cd40e6b1d109dc1be06f097&query=NewYork"
    );

  promise
    .then((res) => res.json())
    .then((data) => {
      // show this data on front end
      console.log(data);
    })
    .catch((err) => console.log(err));
}