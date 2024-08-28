import { defineCollection, z } from "astro:content";

const trainingCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    category: z.string(),
    date_from: z.date(),
    date_to: z.date(),
    is_online: z.boolean(),
    price: z.object({
      price_before: z.number(),
      price_after: z.number(),
      discount: z.number(),
    }),
  }),
});

const galleryCollection = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image()
  })
})

export const collections = {
  trainings: trainingCollection,
  gallery: galleryCollection
}