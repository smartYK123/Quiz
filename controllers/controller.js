import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers ,convertToLetters} from "../database/data.js";
import User from "../models/staffSchema.js"
// const User = require('../models/User');

export async function authenticateUser(req, res) {
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
  }

// export async function authenticateUser(req, res) {
//     const { portalId } = req.body;

//     try {
//         let user = await User.findOne({ portalId });

//         // If user does not exist, create a new user with the provided portalId
//         if (!user) {
//             user = new User({ portalId });
//             await user.save();
//         }

//         return res.json({ success: true, message: 'Authentication successful' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// }
/** get all questions */
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions, answers,convertToLetters }, function (err, data) {
      res.json({ msg: "Data Saved Successfully...!" });
    });
  } catch (error) {
    res.json({ error });
  }
}

/** Delete all Questions */
export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

/** get all result */
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

export async function storeResult(req, res) {
  try {
    // Destructure the required fields from the request body
    const {
      username,
      title,
      result,
      dept,
      kingsId,
      staffId,
      attempts,
      num,
      points,
      achived,
    } = req.body;

    // Check if the required fields are provided
    if (
      !username ||
      !title ||
      !result ||
      !dept ||
      !kingsId ||
      !staffId ||
      !result ||
      !num
    ) {
      throw new Error("Incomplete data provided");
    }

    // Check if there is an existing entry with the same kingsId and staffId
    const existingResult = await Results.findOne({ kingsId, staffId });

    // If an existing entry is found, respond with a message indicating that the entry already exists
    if (existingResult) {
      return res
        .status(400)
        .json({
          error: "Entry with the same kingsId and staffId already exists",
        });
    }

    // Create a new document in the Results collection
    await Results.create({
      username,
      title,
      result,
      dept,
      kingsId,
      staffId,
      attempts,
      num,
      points,
      achived,
    });

    // Respond with success message
    res.json({ msg: "Result saved successfully" });
  } catch (error) {
    // Handle any errors and respond with an error message
    res.status(400).json({ error: error.message });
  }
}

/** delete all result */
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
