const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main()
  .then(() => console.log("✅ Connected to DB"))
  .catch((err) => console.error("❌ DB connection error:", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map(obj => ({
  ...obj,
  owner: "683cf8c5f816fdc178216851",
}));
  await Listing.insertMany(initData.data);
  console.log(`✅ Data initialized: ${initData.data.length} listings inserted`);
};

initDB();
