import { Router } from "express";
import {
  acceptConnectionRequest,
  login,
  register,
  uploadProfilePicture, // Ensure this is defined in your controller
  updateUserProfile, // Ensure this is defined in your controller
  getUserAndProfile, // Ensure this is defined in your controller
  updateProfileData, // Ensure this is defined in your controller
  getAllUsersProfile, // Ensure this is defined in your controller
  downloadProfile, // Ensure this is defined in your controller
  sendConnectionRequest, // Ensure this is defined in your controller
  getMyConnectionRequests, // Ensure this is defined in your controller
  whatAreMyConnections, // Ensure this is defined in your controller
  getUserProfileAndUserBasedonUsername,
  
} from "../controllers/user.controller.js";  // Import all necessary functions

import multer from "multer";

const router = Router();

// Set up multer for file upload
const storage = multer.diskStorage({
  destination:  (req, file, cb) =>{
    cb(null, 'uploads/'); // Define the directory to store uploaded files
  },
  filename:  (req, file, cb) =>{
    cb(null, file.originalname); // Use original file name for saving
  }
});

const upload = multer({ storage: storage });

// Profile Picture Update Route (POST)
router.route('/update_profile_picture')
  .post(upload.single('profile_picture'), uploadProfilePicture);

// User registration route (POST)
router.route('/register')
  .post(register); // Use POST for registration

// User login route (POST)
router.route('/login')
  .post(login); // Use POST for login

// Update user profile route (POST)
router.route('/user_update')
  .post(updateUserProfile);

// Get user and profile route (GET)
router.route('/get_user_and_profile')
  .get(getUserAndProfile);

// Update profile data route (POST)
router.route('/update_profile_data')
  .post(updateProfileData);

// Get all users profiles route (GET)
router.route('/user/get_all_users')
  .get(getAllUsersProfile);

// Download profile route (GET)
router.route('/user/download_resume')
  .get(downloadProfile);

// Send connection request route (POST)
router.route('/user/send_connection_request')
  .post(sendConnectionRequest);

// Get connection requests route (GET)
router.route('/user/getConnectionRequest')
  .get(getMyConnectionRequests);

// Get specific user's connection request route (GET)
router.route('/user/user_connection_request')
  .get(whatAreMyConnections);

// Accept connection request route (POST)
router.route('/user/accept_connection_request')
  .post(acceptConnectionRequest);

router.route('/user/get_profile_based_on_username')
  .get(getUserProfileAndUserBasedonUsername);
export default router;
