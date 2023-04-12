import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String861739' } },
    two: { data: { email: 'String2155664' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
