import express from 'express';
import { createUser, getAllUser, updateUser, deleteUser } from '../controller/userController.js';

const router = express.Router();

/**
 * @swagger
 * /getall:
 *   get:
 *     summary: Get all users
 *     description: Retrieve all users from the database table.
 *     responses:
 *       200:
 *         description: Successfully retrieved users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                   name:
 *                     type: string
 *                     description: The user's name.
 *                   email:
 *                     type: string
 *                     description: The user's email.
 *                   designation:
 *                     type: string
 *                     description: The user's designation.
 *                   empID:
 *                     type: integer
 *                     description: The user's employee ID.
 *       404:
 *         description: There is an issue with the server.
 */
router.get("/getall", getAllUser);

/**
 * @swagger
 * /createUser:
 *   post:
 *     summary: Creating a user
 *     description: Creating a user on the basis of unique empID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 nullable: false
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 nullable: false
 *                 unique: true
 *                 format: email
 *               designation:
 *                 type: string
 *                 description: The user's designation.
 *                 nullable: false
 *               empId:
 *                 type: string
 *                 description: The user's employee ID.
 *                 nullable: false
 *                 unique: true
 *     responses:
 *       200:
 *         description: User created successfully or user already exists.
 *       404:
 *         description: There is an issue with the server.
 */
router.post("/createUser", createUser);

/**
 * @swagger
 * /updateUser/{empId}:
 *   put:
 *     summary: Updating user data
 *     description: Update user data on the basis of unique empID.
 *     parameters:
 *       - in: path
 *         name: empId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique employee ID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated user's name.
 *                 nullable: true
 *               email:
 *                 type: string
 *                 description: The updated user's email.
 *                 nullable: true
 *                 unique: true
 *                 format: email
 *               designation:
 *                 type: string
 *                 description: The updated user's designation.
 *                 nullable: true
 *               empId:
 *                 type: string
 *                 description: The updated user's employee ID.
 *                 nullable: true
 *     responses:
 *       200:
 *         description: User updated successfully or user not found.
 *       404:
 *         description: There is an issue with the server.
 */
router.put("/updateUser/:empId", updateUser);

/**
 * @swagger
 * /deleteUser/{empId}:
 *   delete:
 *     summary: Deleting a user
 *     description: Delete a user based on employee ID.
 *     parameters:
 *       - in: path
 *         name: empId
 *         required: true
 *         schema:
 *           type: string
 *         description: The employee ID of the user to delete.
 *     responses:
 *       200:
 *         description: User deleted successfully or user not found.
 *       404:
 *         description: There is an issue with the server.
 */
router.delete("/deleteUser/:empId", deleteUser);

export default router;
