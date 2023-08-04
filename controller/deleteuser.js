const UserModel = require("../model/userSchema");

const deleteUser = async (req, res) => {
  const emailToDelete = req.params.email;
  try {
    const deletedUser = await UserModel.findOneAndDelete({
      email: emailToDelete,
    });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
};

module.exports = deleteUser;
