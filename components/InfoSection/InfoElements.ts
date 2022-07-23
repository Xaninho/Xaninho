import styled from 'styled-components'

export const Container = styled.div<{ lightBg: boolean | undefined }>`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? 'transparent' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const Row = styled.div<{ imgStart: boolean | undefined}>`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1' 'col1' 'col2' 'col2'`)};
    }
`

export const TextColumn = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const ImageColumn = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1<{ lightText: boolean | undefined }>`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Description = styled.p<{ darkText: boolean | undefined}>`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImageWrap = styled.div`
    max-width: 500px;
    height: 100%;
`

export const Image = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const Button = styled.button`
    border-radius: 50px;
    background: transparent;
    border: 2px solid #01bf71;
    padding: 10px 22px;
    color: #01bf71;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Philosopher', sans-serif;
    width: 200px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
        color: white;
    }
`