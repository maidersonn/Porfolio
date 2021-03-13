const homeController = (req, res) => {
  res.render("layout", {
    title: "Home",
    home: true,
  });
};

module.exports = homeController;
