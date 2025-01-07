import AmenitiesInput from "@/components/form/AmenitiesInput";
import { SubmitButton } from "@/components/form/Buttons";
import CategoriesInput from "@/components/form/CategoriesInput";
import CounterInput from "@/components/form/CounterInput";
import CountriesInput from "@/components/form/CountriesInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createPropertyAction } from "@/utils/actions";

function CreateProperty() {

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">
        Create property
      </h1>
      <div className="rounded-mb border p-8">
        <h3 className="mb-4 text-lg font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="mb-4 grid gap-8 md:grid-cols-2">
            <FormInput
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
              name="name"
              type="text"
            />
            <FormInput
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here! "
              name="tagline"
              type="text"
            />
            <PriceInput />
            <CategoriesInput />
            <TextAreaInput
              name="description"
              labelText="Description (10 - 1000 words)"
            />
          </div>
          <div className="mb-4 grid gap-8 sm:grid-cols-2">
            <CountriesInput />
            <ImageInput />
          </div>
          <h3 className="mb-4 mt-8 text-lg font-medium">
            Accommodation Details
          </h3>
          <CounterInput detail="guests" />
          <CounterInput detail="bedrooms" />
          <CounterInput detail="beds" />
          <CounterInput detail="baths" />
          <div>
            <h3 className="mb-6 mt-10 text-lg font-medium">Amenities</h3>
            <AmenitiesInput />
          </div>
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProperty;
