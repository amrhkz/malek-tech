import React from "react";
import "./footer.css";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="copy-right">
        © 2025 All rights reserved. Designed by Malek Technology department
      </div>
      <div className="links">
        <Link href={"/terms"}>Terms and Privacy</Link>
      </div>
    </div>
  );
}

export default Footer;
