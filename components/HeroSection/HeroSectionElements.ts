import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom : 0;
    left: 0;
    width: 100%;
    height: 100% ;
    overflow: hidden;
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1000px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: row-reverse;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const AboutMe = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 40px;
    font-family: 'Philosopher', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Description = styled.p`
    color: #fff;
    font-size: 24px;
    text-align: right;
    max-width: 650px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const DownloadButton = styled.button`
    border-radius: 50px;
    background: transparent;
    border: 2px solid white;
    padding: 10px 22px;
    color: white;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Philosopher', sans-serif;
    width: 200px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Image = styled.img`
    width: 75%;
    border-radius: 50%;
    margin: auto;
`

