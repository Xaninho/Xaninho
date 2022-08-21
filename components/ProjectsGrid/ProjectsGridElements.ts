import styled from 'styled-components'

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    list-style: none;
    padding: 0;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const Card = styled.li`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const Icon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const Title = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-family: 'Philosopher', sans-serif;
    color: #313131;
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