import {
  Hero,
  Advantages,
  SignUpForWorkout,
  Faq,
  GiftCertificates,
  Banner,
  Gallery,
  Coaches,
  Locations,
} from "@/widgets";

// todo: попробовать сделать все-таки роут статичным, но с инкрементальным рендерингом (чтобы после изменений в cms,
// изменения сразу отображались без запуска нового билда)
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <Hero />
      <Advantages />
      <Locations />
      <SignUpForWorkout />
      <Coaches />
      <Faq />
      <GiftCertificates />
      <Banner />
      <Gallery />
    </div>
  );
}
