import { SocialLinksData } from "../model/data";
import { SocialLink } from "./social-link";

export function Contacts() {
  return (
    <div className="flex gap-4">
      {SocialLinksData.map(({ src, href, alt }) => (
        <SocialLink key={href} src={src} alt={alt} href={href} />
      ))}
    </div>
  );
}
