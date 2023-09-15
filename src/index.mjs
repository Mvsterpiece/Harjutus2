import "./styles.css";

const myjson = [
  {
    Car: {
      Color: "Rose red",
      "Tinted Windows": true,
      Wheels: "4",
      "Roof Cargo": null,
      Entertainment: ["FM Radio","MP3, MP4 and MKV player","harman/kardon speakers"],
      Accessories: ["satnav", "cruise control"]
    },
    Car1: {
      Color: "Rose red",
      "Tinted Windows": false,
      Wheels: "4",
      "Roof Cargo": "Thule",
      Entertainment: ["FM Radio","Apple CarPlay/Android Auto","Bowers & Wilkins Premium Sound speakers"],
      Accessories: ["self drive system", "luggage cover"]
    }
  }
];


document.getElementById("app").innerHTML = `
<div id="json">
  <h1> Car properties </h1>
  <p>Color: ${myjson[0].Car.Color}</p>
  <p>Tinted windows: ${myjson[0].Car["Tinted Windows"]}</p>
  <p>Wheels: ${myjson[0].Car["Wheels"]}</p>
  <p>Roof Cargo: ${myjson[0].Car["Roof Cargo"]}</p>
  <p>Entertainment: ${myjson[0].Car.Entertainment}</p>
  <p>Accessories: ${myjson[0].Car.Accessories}</p>
</div>
`;

const table = `
<div id="myjson">
    <table border=1>
        <thead>
            <tr>
                <th>Property</th>
                <th>Car</th>
                <th>Car 1</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Color</td>
                <td>${myjson[0].Car.Color}</td>
                <td>${myjson[0].Car1.Color}</td>
            </tr>
            <tr>
                <td>Tinted Windows</td>
                <td>${myjson[0].Car["Tinted Windows"]}</td>
                <td>${myjson[0].Car1["Tinted Windows"]}</td>
            </tr>
            <tr>
                <td>Wheels</td>
                <td>${myjson[0].Car.Wheels}</td>
                <td>${myjson[0].Car1.Wheels}</td>
            </tr>
            <tr>
                <td>Roof Cargo</td>
                <td>${myjson[0].Car["Roof Cargo"]}</td>
                <td>${myjson[0].Car1["Roof Cargo"]}</td>
            </tr>
            <tr>
                <td>Entertainment</td>
                <td>${myjson[0].Car.Entertainment.join(', ')}</td>
                <td>${myjson[0].Car1.Entertainment.join(', ')}</td>
            </tr>
            <tr>
                <td>Accessories</td>
                <td>${myjson[0].Car.Accessories.join(', ')}</td>
                <td>${myjson[0].Car1.Accessories.join(', ')}</td>
            </tr>
        </tbody>
    </table>
</div>
`;
document.getElementById("app").innerHTML = table;
