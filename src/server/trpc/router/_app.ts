import { router } from '../trpc'
import { articleRouter } from './article'
import { authorRouter } from './author'
import { categoryRouter } from './category'
import { exampleRouter } from './example'

export const appRouter = router({
  example: exampleRouter,
  article: articleRouter,
  author: authorRouter,
  category: categoryRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
