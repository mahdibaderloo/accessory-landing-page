import ProfileForm from "../user/ProfileForm";
import ProfileSidebar from "../user/ProfileSidebar";

function Profile() {
  return (
    <div className="w-full h-[90vh] flex mt-16 bg-zinc-50 rounded-4xl overflow-hidden">
      <ProfileSidebar />
      <ProfileForm />
    </div>
  );
}

export default Profile;
