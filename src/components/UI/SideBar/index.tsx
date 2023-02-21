import React, { useState } from 'react'

import { TabIcon } from 'assets/index'

import { CustomSideBar } from './styles'
import { ISideBarProps } from './types'
import { Text } from '../Text'

export const SideBar = ({
  children,
  color = 'black',
  elements,
}: ISideBarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const changeVisibility = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <CustomSideBar onClick={changeVisibility} color={color}>
        {children}
        <TabIcon />
      </CustomSideBar>
      {isOpen &&
        elements?.map(element => (
          <Text typography="RParagraph2" margin="2px 5px">
            {element}
          </Text>
        ))}
    </>
  )
}
