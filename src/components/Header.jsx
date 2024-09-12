import Icon from "@mdi/react";
import { mdiFileDocumentOutline } from "@mdi/js";
import './Header.css';

function Header() {
   return (
      <header>
         <div className="page-heading">
            <h1><Icon path={mdiFileDocumentOutline} size={2} />CV Builder</h1>
         </div>
      </header>
   );
};

export default Header;