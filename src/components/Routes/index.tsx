import React, { Suspense, lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'

import { Loader } from 'components/UI/Loader'
import { EPagePaths } from 'constants/router'

const HomePage = lazy(() => import('pages/Home'))
const ContactsPage = lazy(() => import('pages/Contacts'))
const AboutUsPage = lazy(() => import('pages/AboutUs'))
const TeamPage = lazy(() => import('pages/OurTeam'))
const FAQPage = lazy(() => import('pages/FAQs'))
const ServicesPage = lazy(() => import('pages/Services'))
const SolutionsPage = lazy(() => import('pages/Solutions'))
const BlogPage = lazy(() => import('pages/Blog'))

export const Routing = () => {
  const { t } = useTranslation('translation')
  const links = t('links', { returnObjects: true })

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path={EPagePaths.HOME} element={<HomePage />} /> */}
        <Route path={EPagePaths.SOLUTIONS} element={<SolutionsPage />} />
        <Route path={EPagePaths.CONTACTS} element={<ContactsPage />} />
        <Route path={EPagePaths.ABOUT_US} element={<AboutUsPage />} />
        <Route path={EPagePaths.OUR_TEAM} element={<TeamPage />} />
        <Route path={EPagePaths.FAQ} element={<FAQPage />} />
        <Route path={EPagePaths.SERVICES} element={<ServicesPage />} />
        <Route path={EPagePaths.HOME} element={<BlogPage />} />
      </Routes>
    </Suspense>
  )
}
