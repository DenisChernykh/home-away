import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createProfileAction } from "@/utils/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function CreateProfilePage() {
  const user = await currentUser();
  console.log(user);
  if (user?.privateMetadata?.hasProfile) redirect("/");
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">New user</h1>
      <div className="rounded-md border p-8">
        <FormContainer action={createProfileAction}>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <FormInput
              placeholder="Enter your first name"
              name="firstName"
              type="text"
              label="first name"
            />
            <FormInput
              placeholder="Enter your last name"
              name="lastName"
              type="text"
              label="last name"
            />
            <FormInput
              placeholder="Enter your username"
              name="username"
              type="text"
              label="Username"
            />
          </div>
          <SubmitButton className="mt-8" text="Create Profile" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProfilePage;
