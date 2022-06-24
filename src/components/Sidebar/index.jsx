import React from 'react'
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer'
import {
    StyleSidebar,
    StyleSidebarImageWrapper,
    StyleSidebarFlag,
    StyleSidebarFlagImage,
    StyleSidebarFlagText
} from './styles'

export default function Sidebar() {
  return (
    <StyleSidebar open={true}>
        <div>
            <StyleSidebarImageWrapper>
                <img alt="logo image1" src={require('../../images/logo.png')}/>
            </StyleSidebarImageWrapper>
            <TemporaryDrawer/>
        </div>
        <div>
            <StyleSidebarImageWrapper>
                <img alt="logo image1" src={require('../../images/bottom_image.png')}/>
            </StyleSidebarImageWrapper>
            <StyleSidebarFlag>
                <StyleSidebarFlagImage src={require('../../images/flag1.png')}/>
                <StyleSidebarFlagText>Uz</StyleSidebarFlagText>
            </StyleSidebarFlag>
        </div>
    </StyleSidebar>
  )
}
