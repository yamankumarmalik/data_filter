const fs = require("fs");

const types = ["Electronics", "Furniture", "Stationary", "Sports"];
const largeDataset = [];

for (let i = 0; i < 100000; i++) {
  let item = {
    id: i,
    name: `Product ${i + 1}`,
    price: Math.random() * 1000,
    type: types[Math.floor(Math.random() * types.length)],
  };
  largeDataset.push(item);
}

fs.writeFileSync("dataset.json", JSON.stringify(largeDataset, null, 2));
console.log("Dataset generated and saved to dataset.json");
