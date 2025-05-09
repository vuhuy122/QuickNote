import { Dimensions, PixelRatio } from "react-native";
import { StyleSheet as RNStyleSheet, Platform } from "react-native";

// Get the screen dimensions (width and height)
const { width: W, height: H } = Dimensions.get("screen");

// Get the pixel density of the device
const pixelDensity = PixelRatio.get();

// Function to calculate the approximate screen size in inches
const metricsNumber = () => {
  const density = pixelDensity * 160; // Convert pixel density to DPI
  const x = Math.pow((W * pixelDensity) / density, 2); // Calculate width in inches squared
  const y = Math.pow((H * pixelDensity) / density, 2); // Calculate height in inches squared
  const screenInches = Math.sqrt(x + y) + 1.6; // Calculate diagonal screen size in inches (with adjustment)

  return screenInches;
};

// Export screen width and height
export const width = W;
export const height = H;

// Export platform-specific flags
export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";

// Function to scale a number based on screen size and pixel density
export const scale = (number: number) => {
  const ratio = (metricsNumber() + pixelDensity) / 10; // Calculate scaling ratio
  const value = number * Number(ratio.toFixed(1)); // Scale the input number
  return Number(value.toFixed(1)); // Return the scaled value rounded to 1 decimal place
};
