/*========================================
        Import Pages & Components
========================================*/
import { ProfilePage } from "../ProfilePage/ProfilePage.jsx"
/*========================================
        Import Styling
========================================*/
import "../../sass/styles.scss"

export default function App() {
  return (
    <div className="App">
        <ProfilePage />
    </div>
  );
}