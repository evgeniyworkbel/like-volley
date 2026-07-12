import { ContainerWithShadow } from "@/shared/ui";
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
  MainPosts,
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
          <MainPosts />
          <Gallery />
          <Faq />
          <Banner />
        </ContainerWithShadow>
      </ContainerWithShadow>
    </div>
  );
}
