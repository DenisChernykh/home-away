import { fetchProfileImage } from "@/utils/actions";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <img src={profileImage} className="h-6 w-6 rounded-full object-cover" />
    );
  }
  return <LuUser2 className="h-6 w-6 rounded-full" />;
}

export default UserIcon;
