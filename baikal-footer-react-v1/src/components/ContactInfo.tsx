import React from "react";

const ContactInfo: React.FC = () => (
  <div style={{ maxWidth: 400, display: "flex", flexDirection: "column", gap: 14, fontWeight: 600, fontSize: 16, color: "#224a8a" }}>
    <p>Задать вопрос по почте<br />
      <a href="mailto:112@baikal-sea.com" style={{ color: "#224a8a", textDecoration: "none" }}>112@baikal-sea.com</a>
    </p>
    <p>Горячая линия<br />
      <a href="tel:88003331616" style={{ color: "#224a8a", textDecoration: "none" }}>8 800 333-16-16</a>
    </p>
  </div>
);

export default ContactInfo;
