import React, { useEffect, useState } from 'react'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Modal } from 'components/Portal'
import { Routing } from 'components/Routes'
import { Container } from 'components/UI/Container'
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
      <Container flex="column">
        <Header setIsOpen={setIsOpen} />
        <ErrorBoundary>
          <Routing />
        </ErrorBoundary>
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
