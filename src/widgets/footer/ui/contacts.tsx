import { socialLinkData } from "../model/data";
import { SocialLink } from "./ social-link";

export function Contacts() {
  return (
    <div className="flex gap-4">
      {socialLinkData.map(({ src, href, alt }) => (
        <SocialLink key={src} src={src} alt={alt} href={href} />
      ))}
    </div>
  );
}
