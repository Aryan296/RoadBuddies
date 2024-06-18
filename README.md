## Hi there 👋

# Carpooling App

Welcome to the Carpooling App repository! This project is a mobile application built with React Native that facilitates carpooling. The app leverages Google APIs for location services, mapping, and other features to provide a seamless experience for users looking to share rides.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and profile management
- Search and join carpool groups
- Create and manage your own carpool routes
- Real-time location tracking using Google Maps API
- Distance and time estimation for carpool routes
- Push notifications for carpool updates

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (latest)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- A Google API key with enabled services for Maps and Places

### Steps

1. Clone the repository:

```bash
git clone https://github.com/Aryan296/Aryan296.git
change directory to the main file

2. Install dependencies

npm install

3. Create a .env file in the root directory and add your Google API key:
GOOGLE_API_KEY=your_google_api_key_here

4. Link the Google Maps package (if not automatically linked):
npx react-native link react-native-maps

5. Run the app:

For iOS:

npx pod-install
npx react-native run-ios

For Android:

npx expo start

Usage
Open the app on your device.
Sign up or log in to your account.
Browse existing carpool groups or create a new one.
Join a carpool group to see the route and participants.
Enjoy a shared ride!
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
Please make sure your code follows the project's coding style and includes relevant tests.


Contact
If you have any questions or suggestions, feel free to reach out!

Email: aryankaushik2020@gmail.com
GitHub: Aryan296
