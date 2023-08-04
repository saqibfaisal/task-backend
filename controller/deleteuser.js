const UserModel = require("../model/userSchema");

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
};

module.exports = deleteUser;
