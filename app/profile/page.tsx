import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from "@/utils/actions";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";

async function ProfilePage() {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">Update user</h1>
      <div className="rounded-md border p-8">
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.username}
          action={updateProfileImageAction}
          text="Update Profile Image"
        />
        <FormContainer action={updateProfileAction}>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <FormInput
              placeholder="Enter your first name"
              name="firstName"
              type="text"
              label="first name"
              defaultValue={profile.firstName}
            />
            <FormInput
              placeholder="Enter your last name"
              name="lastName"
              type="text"
              label="last name"
              defaultValue={profile.lastName}
            />
            <FormInput
              placeholder="Enter your username"
              name="username"
              type="text"
              defaultValue={profile.username}
              label="Username"
            />
          </div>
          <SubmitButton className="mt-8" text="Update Profile" />
        </FormContainer>
      </div>
    </section>
  );
}

export default ProfilePage;
