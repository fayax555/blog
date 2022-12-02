import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

export const categoryRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      }
    }),
  getAll: publicProcedure.query(({ ctx: { prisma } }) => {
    return prisma.category.findMany()
  }),
})
