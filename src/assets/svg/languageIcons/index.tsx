import React from 'react'

import { ReactComponent as RussiaIcon } from './russia.svg'
import { ReactComponent as GermanyIcon } from './germany.svg'
import { ReactComponent as FranceIcon } from './france.svg'
import { ReactComponent as EnglandIcon } from './england.svg'

export const languageIcons = [
  { lng: 'ru', component: <RussiaIcon /> },
  { lng: 'de', component: <GermanyIcon /> },
  { lng: 'fr', component: <FranceIcon /> },
  { lng: 'en', component: <EnglandIcon /> },
]
