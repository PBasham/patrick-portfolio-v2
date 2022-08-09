/*========================================
        Import Pages & Components
========================================*/
import { ProfilePage } from "../ProfilePage/ProfilePage.jsx"
/*========================================
        Import Styling
========================================*/
import "../../components/NavBar/NavBar.scss"

export default function App() {
  return (
    <div className="App">
        <ProfilePage />
    </div>
  );
}