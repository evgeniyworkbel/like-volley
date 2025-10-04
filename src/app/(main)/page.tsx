import {
  Hero,
  Advantages,
  ContactForm,
  Faq,
  Banner,
  Gallery,
  Coaches,
} from "@/widgets";

export default function Home() {
  return (
    <div>
      <Hero />
      <Advantages />
      <ContactForm />
      <Coaches />
      <Faq />
      <Banner />
      <Gallery />
    </div>
  );
}
