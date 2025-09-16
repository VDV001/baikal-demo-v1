import React from "react";
import Bottle from "./Bottle";
import ContactInfo from "./ContactInfo";
import PrivacyPolicy from "./PrivacyPolicy";
import Footer from "./Footer";

const Page: React.FC = () => (
  <section style={{ maxWidth: 1440, margin: "0 auto", padding: "48px 32px 64px", display: "flex", flexDirection: "column", gap: 48 }}>
    <div style={{ display: "flex", gap: 80, paddingLeft: 80, alignItems: "center" }}>
      <div style={{ display: "flex", gap: 100, alignItems: "flex-end" }}>
        <Bottle imageSrc="/Irk_06L.png" altText="Бутылка 0.6л" volume="0,6 л" width={80} />
        <Bottle imageSrc="/irk_1,25L.png" altText="Бутылка 1.25л" volume="1,25 л" width={110} />
        <Bottle imageSrc="/Irk_2L.png" altText="Бутылка 2л" volume="2 л" width={144} />
      </div>
      <div>
        <ContactInfo />
        <PrivacyPolicy />
      </div>
    </div>

    <Footer />
  </section>
);

export default Page;
