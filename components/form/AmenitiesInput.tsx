"use client";

import { amenities, Amenity } from "@/utils/amenities";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

function AmenitiesInput({ defaultValue }: { defaultValue?: Amenity[] }) {
  const [selectedAmenities, setSelectedAminities] = useState<Amenity[]>(
    defaultValue || amenities,
  );
  const handleChange = (amenity: Amenity) => {
    setSelectedAminities((prev) => {
      return prev.map((a) => {
        if (a.name === amenity.name) {
          return { ...a, selected: !a.selected };
        }
        return a;
      });
    });
  };
  return (
    <section>
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => (
          <div key={amenity.name} className="flex items-center space-x-2">
            <Checkbox
              id={amenity.name}
              checked={amenity.selected}
              onCheckedChange={() => handleChange(amenity)}
            />
            <Label
              htmlFor={amenity.name}
              className="flex items-center gap-x-2 text-sm font-medium capitalize leading-none"
            >
              {amenity.name}
              <amenity.icon className="h-4 w-4" />
            </Label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AmenitiesInput;
