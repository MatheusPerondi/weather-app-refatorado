import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Header = styled.header`
    background-color: rgba(232,232,232,09);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 15px;

`;

export const HeaderTitle = styled.h3`
    color: #312d2d;
    font-weight: 900;
`;

export const HeaderBody = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Input = styled.input`
    width: 100%;
    border-radius: 10px;
    border: 0;
    padding: 10px;
`

export const Button = styled.button`
    background-color: #312d2d;
    color: #fff;
    border: 0;
    border-radius: 10px;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;
`;

export const Main = styled.main`
    display: flex;
    max-width: 2000px;
    justify-content: center;
    align-items: center;
    padding: 30px;
    flex-direction: row;
`;