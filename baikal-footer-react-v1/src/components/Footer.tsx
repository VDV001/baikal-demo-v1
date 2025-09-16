import React from "react";
import FooterLink from "./FooterLink";

const footerLinks = [
  {
    href: "#",
    label: "BAIKALSEA Company",
    svgIcon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" stroke="#224A8A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={4} y={4} width={12} height={12} rx={3} />
        <path d="M7 7L13 13" />
        <path d="M13 7L7 13" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "BAIKALSK",
    svgIcon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" stroke="#224A8A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={4} y={4} width={12} height={12} rx={3} />
        <path d="M7 7L13 13" />
        <path d="M13 7L7 13" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "NASH BAIKAL",
    svgIcon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" stroke="#224A8A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={4} y={4} width={12} height={12} rx={3} />
        <path d="M7 7L13 13" />
        <path d="M13 7L7 13" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => (
  <footer style={{
    display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 80px",
    backgroundColor: "transparent", fontSize: 14, color: "#687eab", borderTop: "1px solid #a7c6e7", boxSizing: "border-box"
  }}>
    <nav style={{ display: "flex", gap: 40 }}>
      {footerLinks.map(({ href, label, svgIcon }, i) => (
        <FooterLink key={i} href={href} label={label} svgIcon={svgIcon} />
      ))}
    </nav>
    <div style={{ fontWeight: 500, color: "#687eab", whiteSpace: "nowrap" }}>
      © 2025 BAIKALSEA Company
    </div>
  </footer>
);

export default Footer;
