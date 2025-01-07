import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import PropertyRating from "@/components/card/PropertyRating";
import Amentites from "@/components/properties/Amentites";
import BookingCalendar from "@/components/properties/booking/BookingCalendar";
import Breadcrumb from "@/components/properties/BreadCrumbs";
import Description from "@/components/properties/Description";
import ImageContainer from "@/components/properties/ImageContainer";
import PropertyDetails from "@/components/properties/PropertyDetails";
import ShareButton from "@/components/properties/ShareButton";
import UserInfo from "@/components/properties/UserInfo";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

import { fetchPropertyDetails } from "@/utils/actions";
import dynamic from "next/dynamic";

import { redirect } from "next/navigation";

const DynamicMap = dynamic(
  () => import("@/components/properties/PropertyMap"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />,
  },
);
async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");
  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };
  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;
  return (
    <>
      <section>
        <Breadcrumb name={property.name} />
        <header className="mt-4 flex items-center justify-between">
          <h1 className="text-4xl font-bold">{property.tagline}</h1>
          <div className="flex items-center gap-x-4">
            <ShareButton name={property.name} propertyId={property.id} />
            <FavoriteToggleButton propertyId={property.id} />
          </div>
        </header>
        <ImageContainer mainImage={property.image} name={property.name} />
      </section>
      <section className="mt-12 gap-x-12 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-x-4">
            <h1 className="text-xl font-bold">{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profile={{ profileImage, firstName }} />
          <Separator className="mt-4" />
          <Description description={property.description} />
          <Amentites amenities={property.amenities} />
          <DynamicMap countryCode={property.country} />
        </div>
        <div className="flex flex-col items-center lg:col-span-4">
          <BookingCalendar />
        </div>
      </section>
    </>
  );
}

export default PropertyDetailPage;
