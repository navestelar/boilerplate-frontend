import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}