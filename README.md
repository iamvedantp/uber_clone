# Uber Clone App

This is a **React Native Uber Clone** app, created using **Expo CLI**. The app mimics key features of Uber's interface, focusing on the user interface and functionality.

## Features

- **React Native**: Cross-platform app development for Android and iOS.
- **Expo**: Simplified workflow with Metro Bundler for development.
- **Tailwind-like Styling**: Utilizes utility-first styling for UI (can be configured with libraries like `nativewind` or `twrnc`).
- **Map Integration** (upcoming): Will integrate maps to simulate ride request functionalities.

## Getting Started

To get the project up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (Version 16 is recommended for Expo CLI compatibility)
- **Expo CLI** (Installed locally via `npx expo`)

### Installation

1. Clone the repository:

   git clone https://github.com/your-username/uber-clone.git
   cd uber-clone

2. Install the dependencies:

   npm install

3. Start the development server:

   npx expo start

4. Run the app on an emulator or your mobile device:

   - For Android: Run `a` in the terminal
   - For iOS: Run `i` in the terminal
   - Alternatively, use the **Expo Go** app to scan the QR code.

### File Structure

```bash
├── assets/             # Assets like images, icons, etc.
├── components/         # Reusable UI components
├── navigation/         # App navigation setup
├── screens/            # Screen components (e.g., HomeScreen)
├── App.tsx             # Entry point of the app
├── babel.config.js     # Babel configuration
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
└── tailwind.config.js  # Tailwind configuration (if using nativewind or twrnc)
```

### Troubleshooting

If you encounter issues related to Babel or Expo CLI:

- Make sure you're using **Node.js version 16** (recommended for Expo).
- If you’re using the **global Expo CLI** and experiencing issues, uninstall it and use the local CLI via `npx`:

  npm uninstall -g expo-cli
  npx expo start

- Clear Metro Bundler cache if needed:

  npx expo start -c

### Upcoming Features

- **Map Integration**: Add Google Maps for ride booking.
- **Geolocation**: User's current location and destination tracking.
- **Ride Request Simulation**: Request rides with real-time updates.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
