import Icon from "@mdi/react";
import { mdiCopyright } from "@mdi/js";

function Footer() {
   return (
      <footer>
         <div className="page-footer">
            <p><Icon path={mdiCopyright} size={0.6} />Copyright 2024</p>
         </div>
      </footer>
   );
};

export default Footer;