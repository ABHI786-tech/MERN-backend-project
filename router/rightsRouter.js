const express = require("express")
const router = new express.Router();
// const StaffController= require("../controller/staffController")
const rightController= require("../controller/rightController")



// router.post("/staff/create", StaffController.createStaff)
router.post("/addrights", rightController.createRight)
router.get("/rights/populate", rightController.employeeRights)
router.delete("/rights/:id", rightController.deleteRights)
router.put("/rights/:id", rightController.updateRights)
router.get("/rights/:id", rightController.getSingleRight)



module.exports = router;