/*========================================
        Import Pages & Components
========================================*/
import { ProfilePage } from "../ProfilePage/ProfilePage.jsx"
/*========================================
        Import Styling
========================================*/
import "../../components/NavBar/NavBar.css"

export default function App() {
  return (
    <div className="App">
        <ProfilePage />
    </div>
  );
}