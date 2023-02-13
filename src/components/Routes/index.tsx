import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PayPal } from 'components/PayPal'
import { Loader } from 'components/UI/Loader'
import { EPagePaths } from 'constants/router'

const HomePage = lazy(() => import('pages/Home'))
const ContactsPage = lazy(() => import('pages/Contacts'))
const AboutUsPage = lazy(() => import('pages/AboutUs'))
const TeamPage = lazy(() => import('pages/OurTeam'))
const BlogPage = lazy(() => import('pages/Blog'))
const FAQPage = lazy(() => import('pages/FAQs'))
const ServicesPage = lazy(() => import('pages/Services'))
const SolutionsPage = lazy(() => import('pages/Solutions'))
const Service = lazy(() => import('pages/Service'))
const Solution = lazy(() => import('pages/Solution'))
const NotFoundPage = lazy(() => import('pages/NotFoundPage'))
const TeamMemberPage = lazy(() => import('pages/TeamMember'))

export const Routing = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path={EPagePaths.HOME} element={<HomePage />} />

      <Route path={EPagePaths.CONTACTS} element={<ContactsPage />} />
      <Route path={EPagePaths.ABOUT_US} element={<AboutUsPage />} />
      <Route path={EPagePaths.OUR_TEAM} element={<TeamPage />} />
      <Route path={EPagePaths.BLOG} element={<BlogPage />} />
      <Route path={EPagePaths.FAQ} element={<FAQPage />} />
      <Route path={EPagePaths.SERVICES} element={<ServicesPage />} />
      <Route path={EPagePaths.SOLUTIONS} element={<SolutionsPage />} />
      <Route path={EPagePaths.SERVICE} element={<Service />} />
      <Route path={EPagePaths.SOLUTION} element={<Solution />} />
      <Route path={EPagePaths.TEAM_MEMBER} element={<TeamMemberPage />} />
      <Route path={EPagePaths.ERROR} element={<NotFoundPage />} />
      <Route path="/paypal" element={<PayPal name="zxc" value="1000" />} />
    </Routes>
  </Suspense>
)
