import { siteMarkup } from "@/components/siteMarkup";
import SiteScripts from "@/components/SiteScripts";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: siteMarkup }} />
      <SiteScripts />
    </>
  );
}
