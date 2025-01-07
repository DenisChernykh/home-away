import Image from "next/image";

type UserInfoProps = {
  profile: {
    profileImage: string;
    firstName: string;
  };
};
function UserInfo({ profile: { profileImage, firstName } }: UserInfoProps) {
  return (
    <article className="grid-cols-[auto,1fr] gap-4 mt-4 grid">
      <Image
        src={profileImage}
        alt={firstName}
        width={50}
        height={50}
        className="h-12 w-12 rounded-md object-cover"
      />
      <div>
        <p>
          Hosted by <span className="font-bold">{firstName}</span>
        </p>
        <p className="font-light text-muted-foreground">
          Superhost &middot; 2 years hosting
        </p>
      </div>
    </article>
  );
}

export default UserInfo;
