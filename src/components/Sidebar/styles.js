import styled from 'styled-components'

export const StyleSidebar = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(189, 205, 255, 0.71);
    width: 200px;
    height: 100vh;
    padding: 60px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 20;
    transition: 1s;
    left: -200px;
    &:hover{
        left: 0;
    }
    &:before{
        position: absolute;
        left: 100%;
        content: "";
        width: 38px;
        height: 38px;
        background-color: #fff;
        z-index: 30;
        // border-radius: 0 50% 50% 0;
        // border-right: 1px solid #000;
        // border-top: 1px solid #000;
        // border-bottom: 1px solid #000;
        display: flex;
        font-weight: bold;
        font-size: 20px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transform: rotate(45deg) translateX(-27px);
    }
`;

export const StyleSidebarImageWrapper = styled.div`
    width: 100%;
    text-align: center;
`;

export const StyleSidebarFlag = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 80px;
    height: 50px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyleSidebarFlagImage = styled.img`
    display: inline-block;
`;

export const StyleSidebarFlagText = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    padding-left: 4px;
`;