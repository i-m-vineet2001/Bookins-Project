import User from "../models/user.model.js";

export const helloWorld = (req, res) => {
    res.send("Hello World from Express");
}

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    if (username == '' && email == '' && password == '') {
        return res.json({ error: "Enter required Details" });
    }
    //check if user exist
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.json({ error: 'Email Already Taken' });
        }
        await User.create({
            username,
            email,
            password
        });
    } catch (error) {
        console.log(error)
        return res.json({ error: "Email / Username Already Taken" })
    }

    try {
        const token = await User.matchPasswordandGenerateToken(email, password);
        // return res.status(200).send("successful")
        return res.cookie("token", token).json({ message: 'User Successfully Registered' })
    } catch (error) {
        console.log(error)
        res.json({ error: error });
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (email == '' && password == '') {
        return res.json({ error: "Invalid Data" });
    }
    try {
        const token = await User.matchPasswordandGenerateToken(email, password);
        console.log(token);
        return res.cookie("token", token).json({ message: 'Login Successfull' });
    } catch (error) {
        console.log(error)
        return res.json({ error: error });
    }
}
