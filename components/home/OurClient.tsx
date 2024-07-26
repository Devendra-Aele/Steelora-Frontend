import React from "react";
import dynamic from "next/dynamic";

const ClientsDesktop = dynamic(() => import("./clients/ClientsDesktop"), {
  ssr: false,
});
const ClientsTablet = dynamic(() => import("./clients/ClientsTablet"), {
  ssr: false,
});
const ClientsMobile = dynamic(() => import("./clients/ClientsMobile"), {
  ssr: false,
});

const OurClient = () => {
  return (
    <section>
      <div className="section-x-padding section-y-padding ">
        <h2 className="section-heading mb-3">Our Clients</h2>
        <div className="w-full mx-auto mb-8">
          <p className="para text-center">
            Steelora is the newest entrant in the luxury market backbone by the
            pioneer of stainless steel production. With adopting experience, in
            parting skills and manufacturing excellence- these describe Steelora
            and its existence best.
          </p>
        </div>

        <div>
          <ClientsDesktop />
          <ClientsTablet />
          <ClientsMobile />
        </div>
      </div>
    </section>
  );
};

export default OurClient;
