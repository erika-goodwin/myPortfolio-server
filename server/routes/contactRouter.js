const express = require("express");
const sendEmail = require("../utils/email/sendEmail");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Contact Form Get");
  res.json("Contact Form Get");
});

router.post("/send", async(req, res) => {
  console.log("Contact Form POST(send)");
  let { name, email, subject, message } = req.body;

  console.log("mail name:", name);
  console.log("mail email:", email);
  console.log("mail subject:", subject);
  console.log("mail message:", message);

  // ERROR CHECKING
  if (!email || !name || !message) {
    return res.status(400).json({ msg: "Not all fields have been entered." });
  }
  if (email.length < 5) {
    return res
      .status(400)
      .json({ msg: "The email needs to be at least 5 characters long." });
  }
  
  //will return true is mail is sent successfully
  const mailResult = await sendEmail(name, email, subject, message);

  // if(mailResult){
  //   return res.status(200).json({ success: true });
  // }

  if (mailResult) {
    return res.status(200).json({ success: "success" }); 
    //if you want to catch this string in client, axios return should be in res.data.success isnt it?
  } else {
    return res.status(422).json({ success: "fail" });
  }


});

module.exports = router;
