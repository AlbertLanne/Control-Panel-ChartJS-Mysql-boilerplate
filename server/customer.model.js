const sql = require("./db.js");

// constructor
const producttable = function(producttable) {
  this.salesid = producttable.salesid;
  this.quantity = producttable.quantity;
  this.date = producttable.date;
};

producttable.create = (newproducttable, result) => {
  sql.query("INSERT INTO producttables SET ?", newproducttable, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created producttable: ", { id: res.insertId, ...newproducttable });
    result(null, { id: res.insertId, ...newproducttable });
  });
};

producttable.findById = (producttableId, result) => {
  sql.query(`SELECT * FROM producttables WHERE id = ${producttableId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found producttable: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found producttable with the id
    result({ kind: "not_found" }, null);
  });
};

producttable.getAll = result => {
  sql.query("SELECT * FROM producttables", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("producttables: ", res);
    result(null, res);
  });
};

producttable.updateById = (id, producttable, result) => {
  sql.query(
    "UPDATE producttables SET salesid = ?, quantity = ?, date = ? WHERE id = ?",
    [producttable.salesid, producttable.quantity, producttable.date, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found producttable with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated producttable: ", { id: id, ...producttable });
      result(null, { id: id, ...producttable });
    }
  );
};

producttable.remove = (id, result) => {
  sql.query("DELETE FROM producttables WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found producttable with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted producttable with id: ", id);
    result(null, res);
  });
};

producttable.removeAll = result => {
  sql.query("DELETE FROM producttables", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} producttables`);
    result(null, res);
  });
};

module.exports = producttable;
