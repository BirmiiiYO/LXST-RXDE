import React, { FC, FunctionComponent, SVGProps } from 'react'
import { useTranslation } from 'react-i18next'

import { PlayerIcon } from 'assets'
import WhiteLogo from 'assets/images/Logo.png'
import { Navigation } from 'components/Navigation'
import { IModalProps } from 'components/Portal/types'
import { Button } from 'components/UI/Button'
import { Container } from 'components/UI/Container'
import { Menu } from 'components/UI/Menu'
import { Text } from 'components/UI/Text'
import { useAppSelector } from 'hooks/Redux'

import { Logo, Row } from './styles'

type IHeaderProps = Required<Pick<IModalProps, 'setIsOpen'>>

export const Header: FC<IHeaderProps> = ({ setIsOpen }) => {
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)
  const { t } = useTranslation('translation')

  return (
    <Container background="secondary">
      <Row>
        <Logo src={WhiteLogo} alt="logo" />
        {!isMobile ? (
          <>
            <Navigation />{' '}
            <Button
              padding="10px 14px"
              primary={false}
              icon={
                (<PlayerIcon />) as unknown as FunctionComponent<
                  SVGProps<SVGSVGElement>
                >
              }
              onClick={() => setIsOpen(true)}
            >
              <Text typography="SBHeadline7" maxWidth="600px">
                {t('base.watchDemo')}
              </Text>
            </Button>
          </>
        ) : (
          <Menu />
        )}
      </Row>
    </Container>
  )
}
