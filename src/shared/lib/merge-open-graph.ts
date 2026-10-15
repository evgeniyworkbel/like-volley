import { Metadata } from "next";
import { seoMainTitle } from "../constants";
import { getServerSideURL } from "./get-server-side-url";

const defaultOpenGraph: Metadata["openGraph"] = {
  title: seoMainTitle,
  type: "website",
  url: getServerSideURL(),
  images: [{ url: "/logo.png", alt: "Логотип школы воллейбола LikeVolley" }],
};

export const mergeOpenGraph = (og?: Metadata["openGraph"]): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
