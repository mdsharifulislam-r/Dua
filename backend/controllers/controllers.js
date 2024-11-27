const { query } = require("../database/database");

//get catagories
exports.getCat = (req, res) => {
  try {
    const rows = query("SELECT * FROM category");
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Something went wrong",
    });
  }
};

//get subcats
exports.getSubCat = (req, res) => {
  try {
    const id = req.params.id;
    const rows = query(`SELECT * FROM sub_category WHERE cat_id=${id}`);
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Something went wrong",
    });
  }
};

//get duas

exports.getDuas = (req, res) => {
  try {
    const id = req.params.id;
    const rows = query(`SELECT * FROM dua WHERE subcat_id=${id}`);
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Something went wrong",
    });
  }
};
