import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET;

export const createTokenForUser = (user) => {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };
    return JWT.sign(payload, secretKey, { expiresIn: '1h' });
};

export const validateToken = (token) => {
    const payload = JWT.verify(token, secretKey);
    console.log("Valid Token:", payload);
    return payload;
};
