import pencilIcon from "../../data/images/pencil.svg";
import image from "../../data/images/ads-image.jpg";

function ProfileForm() {
  return (
    <form action="">
      <section>
        <div className="relative">
          <img src={image} alt="" className="w-20 h-20 rounded-full" />
          <label
            htmlFor="changeImage"
            className="bg-white rounded-full p-1 shadow-sm absolute bottom-1 left-14 z-20"
          >
            <img src={pencilIcon} alt="pencil" className="w-4" />
          </label>
          <input
            type="file"
            accept="Image/*"
            id="changeImage"
            className="hidden"
          />
        </div>
      </section>
    </form>
  );
}

export default ProfileForm;
