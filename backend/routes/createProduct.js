const express = require("express");
const router = express.Router();
const ProductSchema = require("../schema/product");
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req, res) => {
  const { description, prodName, price, redirectUrl, paymentLink, userId } =
    req.body;

  console.log(description, prodName, price, redirectUrl, paymentLink, userId);

 

  

  //   app.post('/image',  function (req, res) {
  //     res.json({})
  //   })

  //   console.log(req)

  //   ProductSchema.findOne({ productName:prodName }).then((data) => {
  //     if (data) {
  //       res.send({
  //         err_message: "Product name already exists",
  //       });
  //     } else {
  //       let newPaymentLink = new ProductSchema({
  //         userId,
  //         description,
  //         productName:prodName,
  //         price,
  //         paymentLink,
  //       });

  //       try {
  //         newPaymentLink.save().then((paymentLink) => {
  //           res.status(200).json({
  //             message: `Payment Link saved successfully`,
  //             paymentLink,
  //           });
  //           console.log(paymentLink);
  //         });
  //       } catch (error) {
  //         console.log("saving payment link error ", error);
  //       }
  //     }
  //   });
});

module.exports = router;
