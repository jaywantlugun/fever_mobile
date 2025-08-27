import { Content } from "@/types/Content";

export interface HomepageContent extends Content {
  title: string;
  subtitle: string;
  buttonText: string;
}

export const homepage: HomepageContent = {
  title: "Welcome",
  subtitle: "Explore our app",
  buttonText: "Get Started",
};
