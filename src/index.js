// src/index.js
import dotenv from "dotenv";
import expressService from "./services/express.service.js";
import sequelizeService from "./services/sequelize.service.js";
import awsService from "./services/aws.service.js";

dotenv.config();

const services = [expressService, awsService, sequelizeService];

(async () => {
  try {
    for (const service of services) {
      await service.init();
    }
    console.log("Server initialized.");
    // PUT ADDITIONAL CODE HERE.
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
