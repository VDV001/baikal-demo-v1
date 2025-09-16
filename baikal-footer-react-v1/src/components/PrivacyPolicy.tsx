import React from "react";

const policies = [
  "Политика Оператора ПДН ИЗРМВ",
  "Политика Оператора ПДН МБ",
  "Политика Оператора ПДН ОИ",
  "Политика Оператора ПДН БАЙКАЛ",
  "Политика Оператора ПДН СМ",
  "Политика Оператора ПДН ИДК",
];

const PrivacyPolicy: React.FC = () => (
  <div style={{ fontSize: 10, lineHeight: 1.2, marginTop: 16, fontWeight: 400, color: "#224a8a" }}>
    <strong style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>Политика обработки персональных данных</strong>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4px 20px" }}>
      {policies.map((policy, i) => (
        <span key={i}>{policy}</span>
      ))}
    </div>
  </div>
);

export default PrivacyPolicy;
