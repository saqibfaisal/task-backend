const jwt = require("jsonwebtoken");
const util = require("util");

const verifyJwt = util.promisify(jwt.verify);

const logout = async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    // Extract the token without the "Bearer" prefix
    const token = authHeader.split(" ")[1];

    try {
        console.log("Received token:", token);

        // Verify the token
        const decoded = await verifyJwt(token, "your_secret_key");

        console.log("Decoded token payload:", decoded); // Log the decoded payload

        // If additional checks are needed, perform them here
        // For example, check if the user is still active in your system

        res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        console.error("Token verification error:", err.message);
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = logout;
