import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <UserProvider>
      <RoutesMain />
    </UserProvider>
  );
};
