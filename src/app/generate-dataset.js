const fs = require("fs");

const types = ["Electronics", "Furniture", "Stationary", "Sports"];
const statuses = ["Active", "Inactive", "Pending"];
const characteristics = [
  { name: "bandwidth", value: "1000 Mbps" },
  { name: "interfaceType", value: "1000 Base LX" },
  { name: "interfaceMode", value: "Auto Negotiation" },
  { name: "typeOfService", value: "Head" },
  { name: "typeOfPOP", value: "UNI" },
  { name: "popName", value: "TAS ELIZABETH 1G" },
  { name: "accessType", value: "Standard Single Access (99.90)" },
  { name: "isRedundant", value: "Y" },
  { name: "status", value: "Active" },
];

const generateRandomCharacteristics = () => {
  return characteristics.map((char) => ({
    name: char.name,
    value: char.value,
  }));
};

const generateRandomAddress = () => ({
  name: "Dummy",
  streetNumber: Math.floor(Math.random() * 100).toString(),
  streetName: "Elizabeth",
  streetType: "Street",
  locality: "Hobart",
  state: "TAS",
  esaId: "BTST",
  postCode: Math.floor(Math.random() * 10000),
  latitude: (Math.random() * 180 - 90).toFixed(10),
  longitude: (Math.random() * 360 - 180).toFixed(10),
});

const generateRandomPlace = (id) => ({
  id: id.toString(),
  address: generateRandomAddress(),
});

const generateRandomDataset = (id) => ({
  id: id.toString(),
  status: statuses[Math.floor(Math.random() * statuses.length)],
  type: types[Math.floor(Math.random() * types.length)],
  place: [generateRandomPlace(id)],
  characteristic: generateRandomCharacteristics(),
});

const generateData = (count) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push(generateRandomDataset(i));
  }
  return data;
};

const data = {
  data: {
    details: {
      data: generateData(1000), // Change the number to generate more or fewer records
    },
  },
};

fs.writeFileSync("dataset.json", JSON.stringify(data, null, 2));
console.log("Dataset generated and saved to dataset.json");
