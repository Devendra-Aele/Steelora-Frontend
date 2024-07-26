"use client";

import React, { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import { ourClients } from "@/constants/ourClients";

const ClientsDesktop = () => {
  const [redCardIndices, setRedCardIndices] = useState<number[]>([]);

  useEffect(() => {
    const shuffle = () => {
      const cardIndices = Array.from({ length: 22 }, (_, index) => index);
      const shuffledIndices = cardIndices.sort(() => Math.random() - 0.5);
      setRedCardIndices(shuffledIndices.slice(0, 4));
    };

    shuffle();
    const intervalId = setInterval(shuffle, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const isCardActive = (id: number) => redCardIndices.includes(id);

  return (
    <div className="hidden lg:flex lg:justify-center w-full gap-2">
      {[0, 3, 6, 9, 13, 16, 19].map((startIdx, idx) => (
        <div key={idx} className={idx % 2 === 0 ? "mt-5" : ""}>
          {ourClients.slice(startIdx, startIdx + 3).map((item) => (
            <ClientCard
              key={item.id}
              img={item.img}
              isActive={isCardActive(item.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ClientsDesktop;
