import { Amenity } from "@/utils/amenities";
import Title from "./Title";
import { LuFolderCheck } from "react-icons/lu";

function Amentites({ amenities }: { amenities: string }) {
  const amenitiesList: Amenity[] = JSON.parse(amenities as string);
  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);
  if (noAmenities) return null;
  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid gap-x-4 md:grid-cols-2">
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) return null;
          return (
            <div key={amenity.name} className="flex items-center gap-x-4">
              <LuFolderCheck className="h-6 w-6 text-primary" />
              <span className="text-sm font-light capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Amentites;
