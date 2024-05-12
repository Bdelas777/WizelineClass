import { z } from "zod";

const IdentifiableSchema = z.object({
  id: z.number(),
});

const PlaceSchema = z.object({
  name: z.string(),
  url: z.string(),
});

const CharacterSchema = IdentifiableSchema.merge(
  z.object({
    name: z.string(),
    status: z.string(),
    species: z.string(),
    type: z.string(),
    gender: z.string(),
    origin: PlaceSchema,
    location: PlaceSchema,
    image: z.string().url(),
    episode: z.array(z.string()),
    url: z.string().url(),
    created: z.string(),
  }),
);

const ResponseInfoSchema = z.object({
  count: z.number(),
  pages: z.number(),
  next: z.string().optional(),
  prev: z.string().nullable(),
});

const ResponseSchema = z.object({
  info: ResponseInfoSchema,
  results: z.array(CharacterSchema),
});

export {
  IdentifiableSchema,
  PlaceSchema,
  CharacterSchema,
  ResponseInfoSchema,
  ResponseSchema,
};
