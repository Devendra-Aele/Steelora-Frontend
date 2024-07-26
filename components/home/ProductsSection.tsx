
import React from "react";
import ProductSectionCard from "../reusables/ProductSectionCard";

type Props = {};

const ProductsSection = (props: Props) => {
  const data = [
    {
      id: 1,
      title: "Railings",
      link: "/railings",
      isExternal: false,
      description:
        "Railings play a crucial role in residential and commercial projects, offering safety, support, and visual appeal to staircases, balconies, and decks. With the backing of  the esteemed Sunrise Group, Steelora has earned a reputation as a trusted name  across India. As the nation's largest railing company, we prioritize top-notch quality  and durability in every piece we offer. When selecting the ideal railing material,  stainless steel and aluminium emerge as popular choices due to their reliability and  versatility.",
      image: "/assets/home/products/railing.png",
      isImagePlacedRight: true,
      buttonText: "Explore",
    },
    {
      id: 2,
      title: "SS PVD Sheets",
      link: "/stainless-steel-pvd-sheets",
      isExternal: false,
      description:
        "When it comes to stainless steel, the possibilities are far beyond just silver. Through the Physical Vapor Deposition (PVD) process, a rainbow of color opportunities emerges. While the stainless steel's original texture and structure remain unchanged, PVD not only enhances the product's longevity but also reduces maintenance needs. Steelora's SS PVD sheets offer a multitude of benefits, including an attractive finish, heightened resistance to wear and tear, non-toxicity, and more. PVD sheets stand as a fantastic option for long-lasting, high-quality stainless steel solutions",
      image: "/assets/home/products/ss-pvd-sheet.jpg",
      isImagePlacedRight: false,
      buttonText: "Explore",
    },
    {
      id: 3,
      title: "SS PVD Profiles",
      link: "/stainless-steel-pvd-profiles",
      isExternal: false,
      description:
        "Stainless steel PVD profiles/trims are available in different sizes and types to suit various applications, from flooring to ceilings. They come in T, U, L, J, and skirting shapes, and we also offer special profiles like SS box, transition, edge, and customized profiles. Using these profiles enhances surface durability and requires minimal maintenance.",
      image: "/assets/home/products/ss-pvd-profiles.jpg",
      isImagePlacedRight: true,
      buttonText: "Explore",
    },
    {
      id: 4,
      title: "Mesh",
      link: "/mesh",
      isExternal: false,
      description:
        "Stainless steel decorative mesh is a versatile and aesthetically pleasing material widely used in architectural and interior design applications. Whether used as cladding for building facades, partitions within interior spaces, or artistic elements in landscaping, stainless steel decorative mesh adds a touch of sophistication and elegance. Furthermore, its durability ensures longevity, making it suitable for both indoor and outdoor applications. Overall, stainless steel decorative mesh not only enhances the aesthetic appeal of architectural and interior designs but also contributes to their functionality and durability.",
      image: "/assets/home/products/mesh.jpg",
      isImagePlacedRight: false,
      buttonText: "Explore",
    },
    {
      id: 5,
      title: "Facade",
      link: "/facade",
      isExternal: false,
      description:
        "Revitalize your building's exterior with Steelora's exceptional facade solutions. Our innovative facade designs and premium materials ensure both durability and visual appeal. Choose from a diverse range of styles and finishes, giving you the flexibility to match any architectural vision. Steelora's facade solutions are engineered for long-lasting performance, providing reliable protection while enhancing the overall look of your property.",
      image: "/assets/home/products/facade.png",
      isImagePlacedRight: true,
      buttonText: "Explore",
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center gap-14  section-y-padding">
      <h4>Products</h4>
      <div className="flex flex-col  justify-between items-center ">
        {data.map((item) => (
          <ProductSectionCard
            buttonText={item.buttonText}
            description={item.description}
            imageSrc={item.image}
            isImageOnRight={item.isImagePlacedRight}
            navigationLinks={item.link}
            title={item.title}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
