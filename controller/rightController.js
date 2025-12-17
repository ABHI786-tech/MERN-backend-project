const mongoose = require("mongoose")
const rightSchema = require("../models/rightModel")

/// create a right
async function createRight(req, res) {

    // staff_id or right jo likhna hai 
   
        const right = await rightSchema.create({
            employee_id:req.body.employee_id,
            right:req.body.right
        })
       
        const RightData = await right.save()
        return res.send(RightData)
    }


    // get a rights
   async function employeeRights(req, res) {
      const employee_id = req?.query;
      console.log(req?.query,"nkjn")
   const Data = await rightSchema.find(employee_id).populate("employee_id")

   res.send(Data)
   }

//delete rights
 async function deleteRights(req, res) {
      const {id} = req.params;
    //   console.log(req?.query,"nkjn")
   const Data = await rightSchema.findByIdAndDelete(id)

   res.send(Data)
   }


   //edit Rights
   async function updateRights(req, res) {
      const {id} = req.params;
   const Data = await rightSchema.findByIdAndUpdate(id, req.body)

   res.send(Data)
   }

//    get single rights 
   async function getSingleRight(req, res) {
       const { id } = req.params;
       const singleData = await rightSchema.findById(id);
    //    console.log(singleData)
       res.send(singleData)
    }

module.exports = {
     createRight, employeeRights, deleteRights,updateRights, getSingleRight
     }