const UserModel = require("../model/userSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Required fields are missing" });
    }

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        bcryptjs.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Password comparison error" });
            }

            if (!result) {
                return res.status(401).json({ message: "Incorrect password" });
            }

            const token = jwt.sign(
                {
                    username: user.username,
                    email: user.email,
                },
                "your_secret_key",
                {
                    expiresIn: "24h",
                }
            );

            return res.status(200).json({
                username: user.username,
                email: user.email,
                userType: user.userType,
                token: token,
            });
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "An error occurred during login" });
    }
};

module.exports = login;
