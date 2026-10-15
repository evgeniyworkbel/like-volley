import { getServerSideURL, mergeOpenGraph } from "@/shared/lib";
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
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  const pageDescription =
    "Школа волейбола для детей и взрослыx. Профессиональные тренировки в Минске и Бресте Тренируем юных чемпионов и прокачиваем любителей любого уровня";

  return {
    description: pageDescription,
    openGraph: mergeOpenGraph({
      description: pageDescription,
    }),
    alternates: {
      canonical: getServerSideURL(),
    },
  };
}

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
