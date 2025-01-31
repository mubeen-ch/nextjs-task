import { UserModel } from "../postgres/postgres.js";

export const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        
        if (users.length === 0) {
            return res.status(200).json({ message: "No users to display as for now..." });
        }
        
        return res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "There is an issue with the server" });
    }
};

export const createUser = async (req, res) => {
    const {name , email , designation , empId} = req.body;
    try {
        const isuser = await UserModel.findOne ({where: {empId: empId}})
        if (!isuser) { 
            await UserModel.create(req.body);
            return res.status(200).json({ message: "New user is created" })
        }
        return res.status(200).json({ message: "Employee already exsist" })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "There is an issue with the server" });
    }
};

export const updateUser = async (req, res) => {
    const empId = req.params.empId;

    try {
        const isUser = await UserModel.findOne({ where: { empId: empId } });

        if (!isUser) {
            return res.status(404).json({ message: "Employee does not exist" });
        }
        await UserModel.update(req.body, { where: { empId: empId } });
        return res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "There is an issue with the server" });
    }
};

export const deleteUser = async (req, res) => {
    const empId = req.params.empId;

    try {
        const user = await UserModel.findOne({ where: { empId: empId } });

        if (!user) {
            return res.status(404).json({ message: "user does not exist" });
        }
        await user.destroy();
        return res.status(200).json({ message: "User data removed successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "There is an issue with the server" });
    }
};