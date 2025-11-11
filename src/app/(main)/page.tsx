import {
  Hero,
  Advantages,
  ContactForm,
  Faq,
  Banner,
  Gallery,
  Coaches,
  Locations,
} from "@/widgets";

// @todo: add lazy loading for all widgets
export default function Home() {
  return (
    <div>
      <Hero />
      <Advantages />
      <Locations />
      <ContactForm />
      <Coaches />
      <Faq />
      <Banner />
      <Gallery />
    </div>
  );
}
