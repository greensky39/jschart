// fetch('http://localhost:8000/data?size=30&page=1')//
fetch('http://ip-api.com/json') //
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => console.log("error:", error));