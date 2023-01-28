import React from 'react'

import { AboutUs } from 'pages/AboutUs'
import { Blog } from 'pages/Blog'
import { Contacts } from 'pages/Contacts'
import { FAQs } from 'pages/FAQs'
import { Home } from 'pages/Home'
import { OurTeam } from 'pages/OurTeam'
import { Services } from 'pages/Services'
import { Solutions } from 'pages/Solutions'

export const routes = [
  {
    name: 'AboutUs',
    path: '/aboutus',
    element: <AboutUs />,
  },
  {
    name: 'Blog',
    path: '/blog',
    element: <Blog />,
  },
  {
    name: 'Contacts',
    path: '/contacts',
    element: <Contacts />,
  },
  {
    name: 'FAQs',
    path: '/faqs',
    element: <FAQs />,
  },
  {
    name: 'Home',
    path: '/home',
    element: <Home />,
  },
  {
    name: 'OurTeam',
    path: '/ourteam',
    element: <OurTeam />,
  },
  {
    name: 'Services',
    path: '/services',
    element: <Services />,
  },
  {
    name: 'Solutions',
    path: '/solutions',
    element: <Solutions />,
  },
]
