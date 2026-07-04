import { ContainerWithShadow } from "@/shared/ui/container-with-shadow";
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
  Reviews,
  Blog,
} from "@/widgets";

// todo: попробовать сделать все-таки роут статичным, но с инкрементальным рендерингом (чтобы после изменений в cms,
// изменения сразу отображались без запуска нового билда)
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <Hero />
      <ContainerWithShadow className="rounded-b-none">
        <Advantages />
        <Reviews />
        <Coaches />
        <Locations />
        <SignUpForWorkout />
        <GiftCertificates />
        <ContainerWithShadow className="rounded-b-none">
          <Blog />
          <Gallery />
          <Faq />
          <Banner />
        </ContainerWithShadow>
      </ContainerWithShadow>
    </div>
  );
}
