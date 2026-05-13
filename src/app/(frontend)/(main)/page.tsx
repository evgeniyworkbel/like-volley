import { OverlapContainer } from "@/shared/ui/overlap-container";
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
      <OverlapContainer>
        <Advantages />
        <Locations />
        <SignUpForWorkout />
        <Coaches />
      </OverlapContainer>
      <Faq />
      <GiftCertificates />
      <Banner />
      <Gallery />
    </div>
  );
}
