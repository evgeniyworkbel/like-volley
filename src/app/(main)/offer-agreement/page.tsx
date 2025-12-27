import { redirect } from "next/navigation";

const storedFileUrl =
  "https://drive.google.com/file/d/1ZdlR_LDV34NT8yXPjZya7Bhw6H5zmHIB/view?usp=sharing";

export default function OfferAgreement() {
  redirect(storedFileUrl);
}
