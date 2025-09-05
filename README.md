# Studynotion - The Edtech Project

Welcome to the **Studynotion** repository! This project is an educational technology (Edtech) website built using the MERN stack (MongoDB, Express.js, React, Node.js). Studynotion aims to provide a comprehensive platform for students and educators to manage and access educational content efficiently.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User Authentication: Secure login and registration for students and educators.
- Course Management: Create, update, and manage courses.
- Content Delivery: Stream video lectures and provide downloadable resources.
- Interactive Quizzes: Conduct quizzes with instant feedback.
- Progress Tracking: Monitor student progress and performance.
- Discussion Forums: Engage in topic-specific discussions.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- MongoDB (>=4.x)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/studynotion.git
   cd studynotion
   ```

2. **Install server dependencies:**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**

   ```bash
   cd ../client
   npm install
   ```

4. **Create environment variables:**

   - Create a `.env` file in the `server` directory and add your MongoDB URI and other necessary configurations.
   
     ```env
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

5. **Run the development server:**

   - Start the backend server:

     ```bash
     cd server
     npm start
     ```

   - Start the frontend development server:

     ```bash
     cd ../client
     npm start
     ```

  - Or just import project and perform``` npm i``` or ```npm install```
    then to start : ```npm run dev```
    Here this command will run frontend and backend simultaneously
    This is possible with the help of https://www.npmjs.com/package/concurrently .

6. **Open your browser:**

   Navigate to `http://localhost:3000` to see the application in action.

## Usage

Once the project is up and running, you can:

- Register as a new user (student or educator).
- Log in with your credentials.
- Explore and enroll in available courses.
- Educators can create and manage courses.
- Track your progress.
- Engage in discussions in the forums section.

## Technologies Used

- **Frontend:**
  - React
  - Redux (for state management)
  - React Router (for navigation)
  - Axios (for HTTP requests)
  - Tailwind-CSS ( for styling )
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose for object modeling)
  - JWT (for authentication)
  

## Folder Structure

```
studynotion/
├── client/         # React frontend
│   ├── public/     
│   └── src/        # React components, redux, etc.
├── server/         # Express backend
│   ├── config/     # Configuration files
│   ├── controllers/ # Route controllers
│   ├── models/     # Mongoose models
│   ├── routes/     # Express routes
│   └── utils/      # Utility functions
├── .gitignore
├── README.md
└── package.json
```

## Contributing

We welcome contributions to improve Studynotion! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

## Contact

If you have any questions or suggestions, feel free to reach out to us at [sidjiyani2003@gmail.com].

Happy learning!

