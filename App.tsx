import { LogBox } from "react-native";
import MainApp from "./src";
import { enableFreeze } from "react-native-screens";

enableFreeze(true);
export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return <MainApp />;
}
