import "./index.css";
import { Logo } from "./ui/components/Logo";
import { Navigation } from "./ui/components/Navigation";
import {
  BrowserRouter as NavBar,
  Routes,
  Route
} from "react-router-dom";
import MerchandiseList from "./ui/components/MerchandiseList";
import SystemProvider from "./ui/contexts/SystemProvider";
import PlayerProvider from "./ui/contexts/PlayerProvider";
import PropertiesList from "./ui/components/PropertiesList";
import ResourceList from "./ui/components/ResourceList";
import { PopupDialog } from "./ui/components/PopupDialog";
import StatusBar from "./ui/components/StatusBar";

function App() {

  return (
    <div>
      <Logo />
      <SystemProvider>
        <PlayerProvider>
          <NavBar>
            <Navigation />
            <Routes>
              <Route
                path="/"
                element={<MerchandiseList/>}
              />
              <Route
                path="/possession"
                element={<PropertiesList/>}
              />
              <Route
                path="/warehouse"
                element={<ResourceList/>}
              />
            </Routes>
          </NavBar>
          <StatusBar/>
          <PopupDialog/>
        </PlayerProvider>
      </SystemProvider>
    </div>
  );
}

export default App;
