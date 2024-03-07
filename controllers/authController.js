
import User from "../models/staffSchema.js"
exports.authenticateUser = async (req, res) => {
  const { portalId } = req.body;

  try {
    const user = await User.findOne({ portalId });
    if (user) {
      return res.json({ success: true, message: 'Authentication successful' });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid portal ID' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

