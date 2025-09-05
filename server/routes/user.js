// Import the required modules
const express = require("express")
const router = express.Router()
const { updateProfile } = require("../controllers/profile");
// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/Auth")
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/resetPassword")
const { updateDisplayPicture } = require("../controllers/profile")
const { auth } = require("../middleware/auth")
const { getAllUserDetails} = require("../controllers/profile");
// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

// Route for Changing the password
router.post("/changepassword", auth, changePassword)

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)
router.put("/updateDisplayPicture",auth,  updateDisplayPicture)
router.put("/updateProfile", auth, updateProfile);
router.get("/getAllUserDetails", auth, getAllUserDetails)
// Export the router for use in the main application
module.exports = router
