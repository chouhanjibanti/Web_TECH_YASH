const express =require("express")
const router = express.Router();
const userController = require("../controllers/userController")


router.get("/",userController.showForm);
router.post("/add",userController.createUser)
router.get("/all",userController.getUsers)

module.exports = router;