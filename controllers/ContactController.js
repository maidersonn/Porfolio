const contactController = (req, res) => {
  res.render("layout", { title: "Contact", contact: true });
};

module.exports = contactController;
