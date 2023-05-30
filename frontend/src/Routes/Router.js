import { createBrowserRouter } from "react-router-dom";
import AboutUsScreen from "../Screens/AboutUsScreen";
import LandingContainer from "../Screens/LandingContainer";
import { LandingScreen } from "../Screens/LandingScreen/LandingScreen";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingContainer />,
      children: [
        {
          path: "/",
          element: <LandingScreen />,
        },
        {
          path: "/aboutUs",
          element: <AboutUsScreen />,
        },
      ],
    },
  ]);