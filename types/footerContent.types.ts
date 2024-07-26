// Define types
type Icon = {
  src: string;
  alt: string;
  url: string;
};

type NavigationItem = {
  name: string;
  url: string;
};

type ContactInfo = {
  address1: string;
  address2: string;
  address3: string;
  phone1: string;
  phone2?: string;
};

// Example data types
export type SocialMediaIcons = Icon[];

export type NavigationTexts = NavigationItem[];

export type ContactInfoData = ContactInfo;

export type FooterDescription = string;
