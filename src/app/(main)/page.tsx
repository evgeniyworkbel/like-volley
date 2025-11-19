import {
  Hero,
  Advantages,
  SignUpForWorkout,
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
      <SignUpForWorkout />
      <Coaches />
      <Faq />
      <Banner />
      <Gallery />
    </div>
  );
}
