import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

export const articleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      }
    }),
  getAll: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const articleRes = await prisma.article.findMany({
      include: { category: true, author: true },
    })

    return articleRes.map((a) => ({
      ...a,
      category: a.category.name,
      author: a.author.name,
      status: a.status as 'Draft' | 'Published',
    }))
  }),
})
