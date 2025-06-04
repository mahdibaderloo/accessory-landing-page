import ProfileForm from "../user/ProfileForm";
import ProfileSidebar from "../user/ProfileSidebar";

function Profile() {
  return (
    <div className="w-full h-screen flex mt-16 bg-zinc-50">
      <ProfileSidebar />
      <ProfileForm />
    </div>
  );
}

export default Profile;
