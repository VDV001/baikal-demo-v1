import React from "react";

interface FooterLinkProps {
  href: string;
  label: string;
  svgIcon: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label, svgIcon }) => (
  <a href={href} style={{ display: "flex", alignItems: "center", gap: 8, color: "#4173b0", fontWeight: 600, textDecoration: "none" }}>
    {svgIcon}
    {label}
  </a>
);

export default FooterLink;
