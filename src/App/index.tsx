import React, { Suspense, lazy, useMemo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// eslint-disable-next-line import/order
import { Header } from 'components/Header'

import {} from './styles'
import { EPagePaths } from 'constants/router'

const HomePage = lazy(() => import('pages/Home'))
const ContactsPage = lazy(() => import('pages/Contacts'))
const AboutUsPage = lazy(() => import('pages/AboutUs'))
const TeamPage = lazy(() => import('pages/OurTeam'))
const FAQPage = lazy(() => import('pages/FAQs'))
const ServicesPage = lazy(() => import('pages/Services'))
const SolutionsPage = lazy(() => import('pages/Solutions'))
// const ServicePage = lazy(() => import('pages/Service'))
// const SolutionPage = lazy(() => import('pages/Solution'))
const BlogPage = lazy(() => import('pages/Blog'))

const App = () => {
  const { pathname } = useLocation()

  // const shouldRenderSubSections = useMemo(() => {
  //   switch (pathname) {
  //     case EPagePaths.CONTACTS:
  //       return null
  //     case EPagePaths.TEAM:
  //     case EPagePaths.ABOUT_US:
  //     case EPagePaths.SOLUTIONS:
  //       return <SubscribeSection />
  //     default:
  //       return (
  //         <>
  //           <HelperSection />
  //           <SubscribeSection />
  //         </>
  //       )
  //   }
  // }, [pathname])

  return (
    <Suspense fallback="Loading...">
      <Header />
      {/* <VideoBackground /> */}
      <>
        <Routes>
          <Route path={EPagePaths.HOME} element={<HomePage />} />
          <Route path={EPagePaths.SOLUTIONS}>
            <Route index element={<SolutionsPage />} />
          </Route>
          <Route path={EPagePaths.CONTACTS} element={<ContactsPage />} />
          <Route path={EPagePaths.ABOUT_US} element={<AboutUsPage />} />
          <Route path={EPagePaths.TEAM} element={<TeamPage />} />
          <Route path={EPagePaths.FAQ} element={<FAQPage />} />
          <Route path={EPagePaths.SERVICES}>
            <Route index element={<ServicesPage />} />
          </Route>
        </Routes>
      </>
    </Suspense>
  )
}

export default App
