import React, { Suspense, useEffect, useState } from 'react'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Modal } from 'components/Portal'
import { Routing } from 'components/Routes'
import { Container } from 'components/UI/Container'
import { Loader } from 'components/UI/Loader'
import { YoutubeVideo } from 'components/YoutubeVideo'
import { useAppDispatch } from 'hooks/Redux'
import useMobile from 'hooks/useMobile'
import { PageWidthSlice } from 'store/Slices/PageWidthSlice'

const App = () => {
  const dispatch = useAppDispatch()
  const { setWidth } = PageWidthSlice.actions
  const isMoblie = useMobile()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dispatch(setWidth(isMoblie))
  }, [dispatch, isMoblie, setWidth])

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container flex="column">
          <Header setIsOpen={setIsOpen} />
          <ErrorBoundary>
            <Routing />
          </ErrorBoundary>
          <Footer />
        </Container>
      </Suspense>
      <Modal
        containerElement={document.body}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        width="80vw"
        height="90vh"
      >
        <YoutubeVideo url="https://www.youtube.com/embed/dQw4w9WgXcQ" />
      </Modal>
    </>
  )
}

export default App
