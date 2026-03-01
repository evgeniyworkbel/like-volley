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
import fs from "fs";
// todo: попробовать сделать все-таки роут статичным, но с инкрементальным рендерингом (чтобы после изменений в cms,
// изменения сразу отображались без запуска нового билда)
export const dynamic = "force-dynamic";

export default function Home() {
  console.group("envs at server");
  console.log("process.env.IS_CUSTOM_VPS=", process.env.IS_CUSTOM_VPS);
  console.log(
    "process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID=",
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID,
  );
  console.groupEnd();

  //todo: удалить
  fs.writeFileSync(`/tmp/${new Date()}/debugenv.json`, JSON.stringify(process.env, null, 2));
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
