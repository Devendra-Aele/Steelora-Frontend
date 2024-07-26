import React from "react";
import FounderCard from "./FounderCard";
import Image from "next/image";

type Props = {};

function Founder({}: Props) {
  const founders = [
    {
      id: 1,
      title: "Ruchit Shah",
      designation: "Founder",
      describe: `Ruchit Shah, a visionary entrepreneur, has significantly impacted India's stainless steel industry. With extensive experience at India's largest stainless steel manufacturer, he gained a 360-degree understanding of production, management, and strategic planning. His pioneering spirit was evident as he spearheaded India's first stainless steel arc division. Drawing on over 4 years at the Sunrise Group, Ruchit founded Steelora, an architecture firm specializing in high-quality stainless steel products for the architecture, building, and construction sectors. On April 2nd, 2015, he launched www.steelora.com, a portal dedicated to the architecture and design community, showcasing stainless steel's potential in architectural applications. Ruchit's commitment to innovation, quality, and customer satisfaction continues to drive Steelora forward.`,
      // describe: "Transforming the stainless steel landscape, I pioneered 'STEELORA', a cutting-edge architecture firm revolutionizing the industry. With 4 years of comprehensive experience at India's premier stainless steel manufacturer, Sunrise Group, I cultivated an unparalleled understanding of the entire value chain. Our expertise spans from raw material acquisition to design integration, client servicing, and beyond. We boast personal connections with over 100 top-line Indian architects. At STEELORA, we specialize in crafting high-quality stainless steel products tailored for Architecture, Building, and Construction sectors. On April 2nd, 2015, we unveiled our groundbreaking web portal, www.steelora.com , a haven for architects, builders, and designers seeking stainless steel excellence. Explore exclusive stainless steel creations and elevate your projects with STEELORA's innovation.",
      image: "/assets/aboutus/ruchit-shah.jpg",
      linkedin:
        "https://www.linkedin.com/in/ruchit-shah-42627b42/?originalSubdomain=in",
      instagram: "https://www.instagram.com/ruchit1985/",
      isImageRight: true,
    },
    {
      id: 2,
      title: "Bhumika Shah",
      designation: "Founder",
      describe: `Bhumika Shah is a pivotal force behind Steelora's success, leveraging her profound expertise in business development and deep understanding of the stainless steel industry. With a strong foundation in managing start-up operations and the entire value chain—from raw material generation to design integration, client servicing, and marketing—she has shaped Steelora's strategic direction and operational efficiency. Bhumika's extensive network, including personal relationships with over 100 top-line Indian architects, underscores her ability to forge meaningful connections within the architecture and design community. Before co-founding Steelora, she gained invaluable insights at the Sunrise Group, enhancing her holistic approach to entrepreneurship. In 2015, she co-founded Steelora, dedicated to creating high-quality stainless steel products for the architecture, building, and construction sectors. Under her leadership, Steelora has become a beacon of innovation and excellence in the industry.`,
      // describe: "Stepping into the heart of stainless steel innovation, I've crafted the blueprint of 'STEELORA' from the ground up, revolutionizing the landscape of architectural design. With a comprehensive grasp of the stainless steel value chain, spanning from raw material procurement to client servicing, I've honed a 360-degree expertise. My journey began at India's premier stainless steel conglomerate, Sunrise Group, where I pioneered the nation's first stainless steel arc division. This experience granted me unparalleled insights into production, management, and strategic planning. Drawing from this wealth of knowledge, I launched 'STEELORA' in 2015, a trailblazing architecture firm specializing in high-quality stainless steel solutions for Architecture, Building, and Construction sectors. Our crowning achievement, www.steelora.com , stands as a digital beacon for architects and designers, showcasing exclusive stainless steel products. Join us in redefining the boundaries of stainless steel craftsmanship.",
      image: "/assets/aboutus/bhumika-shah.jpg",
      linkedin: "https://in.linkedin.com/in/bhumika-shah-5138a3b6?original_referer=https%3A%2F%2Fwww.google.com%2F",
      instagram: "https://www.instagram.com/shahbhumika/",
      isImageRight: false,
    },
  ];
  return (
    <section className="founders  section-y-padding ">
      {founders.map((founder, index) => (
        <>
          <FounderCard
            key={founder.id}
            title={founder.title}
            describe={founder.describe}
            image={founder.image}
            linkedin={founder.linkedin}
            instagram={founder.instagram}
            isImageRight={founder.isImageRight}
            designation={founder.designation}
          />
          {index !== founders.length - 1 && (
            <>
              <div className="w-full md:my-5 lg:my-9 ">
                <Image
                  src={"/assets/aboutus/aboutus-line.svg"}
                  alt="line"
                  className="w-full"
                  width={1440}
                  height={2}
                />
              </div>
            </>
          )}
        </>
      ))}
    </section>
  );
}

export default Founder;
