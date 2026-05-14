const fs = require("fs");

const raw = fs.readFileSync("./day2/mock_policies.json");

const data = JSON.parse(raw);

// Total premium by LOB
const totals = data.reduce((acc, p) => {
  acc[p.lob] = (acc[p.lob] || 0) + p.premium;
  return acc;
}, {});

console.log("Premium Totals By LOB:");
console.log(totals);

// Catastrophic exposure policies
const catastrophic = data.filter(
  p => p.exposureLevel === "Catastrophic"
);

console.log("\nCatastrophic Policies:");
console.log(catastrophic);
