import CopyRight from "./CopyRight";
import FooterLinks from "./FooterLinks";
import Subscribe from "./Subscribe";

function FooterContent() {
  return (
    <>
      <div className="bg-zinc-800 flex justify-between items-center pb-4">
        <Subscribe />
        <FooterLinks />
      </div>
      <CopyRight />
    </>
  );
}

export default FooterContent;
