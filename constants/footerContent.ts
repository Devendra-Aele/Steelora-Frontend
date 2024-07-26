import { iconAssets } from "@/public/assets/icons";
import {
  ContactInfoData,
  FooterDescription,
  NavigationTexts,
  SocialMediaIcons,
} from "@/types/footerContent.types";

// Example data
const socialMediaIcons: SocialMediaIcons = [
  {
    src: iconAssets.linkedin,
    alt: "LinkedIn",
    url: "https://www.linkedin.com/company/steelora?originalSubdomain=in",
  },
  {
    src: iconAssets.instgram,
    alt: "Instagram",
    url: "https://www.instagram.com/steelorasteel/",
  },
  {
    src: iconAssets.facebook,
    alt: "Facebook",
    url: "https://www.facebook.com/Steelora/",
  },
  {
    src: iconAssets.pinterest,
    alt: "Twitter",
    url: "https://in.pinterest.com/Steelora/",
  },
];

const navigationTextsHome: NavigationTexts = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Request Samples",
    url: "/request-samples",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
];

const navigationTextsRailing: NavigationTexts = [
  {
    name: "Railings",
    url: "/railings",
  },
  {
    name: "SS PVD Sheets",
    url: "/stainless-steel-pvd-sheets",
  },
  {
    name: "SS PVD Profiles",
    url: "/stainless-steel-pvd-profiles",
  },
  {
    name: "Mesh",
    url: "/mesh",
  },
  {
    name: "Facade",
    url: "/facade",
  },
];

const contactInfo: ContactInfoData = {
  address1:
    // "Steelora, 100 Sunrise House, First Floor, Opp. Madhav Baug Temple, Charni Road East, Mumbai: 400004.",
    "Off No 7A & 8, Ground Floor,",
  address2: "A To Z Estate, Next to Peninsula Business Park, Lower Parel West,",
  address3: "Mumbai 400013(INDIA)",
  phone1: "+91-22-6743 9190/7887",
  // phone2: "9152300777",
};

const footerDescription: FooterDescription =
  "Steelora: Let Ideas Meet Steel. Building a Stronger Future through Innovation and Ingenuity.";

export const footerData = {
  socialMediaIcons,
  navigationTextsHome,
  navigationTextsRailing,
  contactInfo,
  footerDescription,
};
