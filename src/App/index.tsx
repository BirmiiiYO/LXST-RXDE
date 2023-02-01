import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// eslint-disable-next-line import/order
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Modal } from 'components/Portal'
import { EPagePaths } from 'constants/router'
import { useAppDispatch } from 'hooks/Redux'
import useMobile from 'hooks/useMobile'
import { PageWidthSlice } from 'store/Slices/PageWidthSlice'

import { Container } from './styles'

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
  const dispatch = useAppDispatch()
  const { setWidth } = PageWidthSlice.actions
  // const { pathname } = useLocation()
  const isMoblie = useMobile()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dispatch(setWidth(isMoblie))
  }, [isMoblie])

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
    <>
      <Container>
        <Header setIsOpen={setIsOpen} />
        {/* <VideoBackground /> */}
        <Suspense fallback="Loading...">
          <Routes>
            <Route path={EPagePaths.HOME} element={<HomePage />} />
            <Route path={EPagePaths.SOLUTIONS}>
              <Route index element={<SolutionsPage />} />
            </Route>
            <Route path={EPagePaths.CONTACTS} element={<ContactsPage />} />
            <Route path={EPagePaths.ABOUT_US} element={<AboutUsPage />} />
            <Route path={EPagePaths.TEAM} element={<TeamPage />} />
            <Route path={EPagePaths.FAQ} element={<FAQPage />} />
            <Route path={EPagePaths.SERVICE} element={<ServicesPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Container>
      <Modal
        containerElement={document.body}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
      </Modal>
    </>
  )
}

export default App
