const sendEmail = require("../mailer/Mailer");
const contactController = (req, res) => {
  res.render("layout", { title: "Contact", contact: true });
};

const postController = (req, res) => {
  sendEmail(
    "New message from contact form at Porfolio",
    `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  )
    .then((success) => {
      res.render("layout", {
        title: "Contact",
        success: true,
      });
      console.log(success);
    })
    .catch((error) => {
      res.render("layout", {
        title: "Contact",
        error: true,
      });
      console.log(error);
    });
};

module.exports = {
  contactController,
  postController,
};
