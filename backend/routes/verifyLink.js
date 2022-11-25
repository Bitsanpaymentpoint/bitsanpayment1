const express = require("express");
const router = express.Router();
const verifyLink = require("../schema/paymentLink");
const user = require("../schema/user");

router.post("/", (req, res) => {
  const { title, userId } = req.body;

  console.log(title, userId);

  verifyLink
    .findOne({ userId, title })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: "user not found",
        });
      }

      if (data.title != title) {
        return res.status(500).send({
          message: "Invalid link",
        });
      }

      user
        .findById(data.userId)
        .then((userData) => {
          if (data.status != "disabled") {
            res.send({
              address: userData.address,
              email: userData.email,
              fullName: userData.fullName,
              businessName: userData.businessName,
              userId: userData._id,
              linkData: data,
              status: data.status,
            });
          } else {
            res.send({
              status: data.status,
              linkData: {
                title: data.title,
              }
            });
          }
        })
        .catch((err) => res.send({ err }));
    })
    .catch((error) => console.log("error ", error));
});

module.exports = router;
