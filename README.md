## How to Run the App

### Using npm

1. Install dependencies:
   ```
   npm install
   ```
2. Start the Expo development server:
   ```
   npx expo start
   ```

### Using Yarn

1. Install dependencies:
   ```
   yarn install
   ```
2. Start the Expo development server:
   ```
   yarn expo start
   ```

3. Scan the QR code with the Expo Go app on your mobile device, or choose a simulator/emulator to run the app.

**Requirements:**  
- Node.js >= 16.x  
- npm >= 8.x or Yarn >= 1.22  
- Expo CLI installed globally (`npm install -g expo-cli` or `yarn global add expo-cli`)

---

## Libraries Used

- **React Native**: 0.79.2
- **Expo**: ~53.0.9
- **Redux Toolkit**: State management
- **react-redux**: Connects Redux to React
- **react-native-flash-message**: Displaying notifications
- **expo-image**: Image rendering
- **react-navigation**: Screen navigation
- **@react-native-async-storage/async-storage**: Local storage
- **@react-native-community/blur**: BlurView effect
- **TypeScript**: Static typing

## Features

- Create, edit, and delete notes quickly
- Delete all notes at once
- Modern UI with blur effects
- Persistent local storage for notes
- Custom notifications and feedback
- Settings screen with links to user agreement, privacy policy, and more