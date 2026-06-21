const { searchGoogle } = require("../agent/browser");

exports.openGoogle = async (req, res) => {
  try {
    const { query } = req.body;

    const results = await searchGoogle(query);

    res.status(200).json({
      success: true,
      searched: query,
      results,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};