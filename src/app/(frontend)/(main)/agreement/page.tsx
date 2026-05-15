import { getPayloadClient } from "@/shared/cms";
import { RichText, defaultJSXConverters } from "@payloadcms/richtext-lexical/react";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import type { JSXConverters } from "@payloadcms/richtext-lexical/react";
import type { SerializedBlockNode } from "@payloadcms/richtext-lexical";

type customFieldNode = {
  htmlCode: string;
};

type customRawHtmlTableBlock = SerializedBlockNode<customFieldNode>;

export default async function Offer() {
  const payload = await getPayloadClient();
  const agreement = await payload.findGlobal({ slug: "agreement" });

  const { title, description, appendices } = agreement;

  const converters: JSXConverters = {
    ...defaultJSXConverters,
    blocks: {
      ...defaultJSXConverters.blocks,
      rawHtmlTable: ({ node }) => {
        const { htmlCode } = (node as customRawHtmlTableBlock).fields;

        return (
          <div
            className="clear-both my-4 w-full overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: htmlCode }}
          />
        );
      },
    },
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <div className="text-left text-sm leading-5 md:text-justify [&_p]:indent-6">
        {description && (
          <div dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: description }) }} />
        )}

        {appendices && (
          <div className="border-t pt-6 [&_table]:block [&_table]:border-collapse [&_table]:overflow-x-auto [&_table]:border md:[&_table]:table [&_td]:border [&_td]:p-2 [&_th]:border [&_th]:p-2 [&_th]:font-semibold">
            <RichText data={appendices} converters={converters} />
          </div>
        )}
      </div>
    </article>
  );
}
