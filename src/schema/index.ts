import { z } from "zod"

export const AddArticleSchema = z.object({
  title: z.string(),
  content: z.string(),
  categoryId: z.number(),
  authorId: z.string(),
  status: z.enum(['Draft', 'Published']),
})