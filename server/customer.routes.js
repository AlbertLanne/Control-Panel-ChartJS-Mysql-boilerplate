module.exports = app => {
  const customers = require("./producttable.controller.js");

  // Create a new Customer
  app.post("/producttable", customers.create);

  // Retrieve all Customers
  app.get("/producttable", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/producttable/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/producttable/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/producttable/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/producttable", customers.deleteAll);
};
