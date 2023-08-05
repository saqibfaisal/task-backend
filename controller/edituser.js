const UserModel = require("../model/userSchema");

const editUser = async (req, res) => {
  const { id } = req.params;
  const newData = req.body; // Assuming you'll send updated data in the request body

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, newData, { new: true });
    
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
};

module.exports = editUser;
