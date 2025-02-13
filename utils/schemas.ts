import { count, error } from "console";
import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  // firstNam: z.string().max(5, { message: "max length is 5" }),
  firstName: z.string().min(2, {
    message: "first name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "last name must be at least 2 characters",
  }),
  username: z.string().min(2, {
    message: "username must be at least 2 characters",
  }),
});

export function validatedWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown,
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less than 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, {
      message: "Name must be less than 100 characters",
    }),
  tagline: z
    .string()
    .min(2, { message: "TagLine must be at least 2 characters." })
    .max(100, {
      message: "TagLine must be less than 100 characters.",
    }),
  price: z.coerce.number().int().min(0, {
    message: "Price must be a positive number",
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "Description must be between 10 and 1000 words",
    },
  ),
  country: z.string(),
  guests: z.coerce
    .number()
    .int()
    .min(0, { message: "Guest amount must be a positive number" }),
  bedrooms: z.coerce.number().int().min(0, {
    message: "Bedrooms amount must be a positive number",
  }),
  beds: z.coerce.number().int().min(0, {
    message: "Beds amount must be a positive number",
  }),
  baths: z.coerce.number().int().min(0, {
    message: "Baths amount must be a positive number",
  }),
  amenities: z.string(),
});
