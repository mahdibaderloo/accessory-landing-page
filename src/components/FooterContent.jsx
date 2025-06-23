import FooterLinks from "./FooterLinks";
import Subscribe from "./Subscribe";

function FooterContent() {
  return (
    <div className="bg-zinc-800 flex justify-between items-center">
      <Subscribe />
      <FooterLinks />
    </div>
  );
}

export default FooterContent;
