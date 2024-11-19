import styled from "styled-components";



export const Container = styled.div`
    background-color: rgba(232,232,232,09);
    position: relative;
    width: 100%;
    max-width: 1080px;
    height: 320px;
    border-radius: 40px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px;
    margin-left: 20px;    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    overflow-x: auto;
    background-clip: padding-box;
    overflow-x: auto; 
    scrollbar-width: thin; 
    scrollbar-color: #978f8f transparent;
`;

export const ForecastContainer = styled.div`

`;

export const ForeCastCardContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MaxTempContainer = styled.div`
    width: 20%;
    max-height: 30%;
    background-color: rgba(36, 33, 33, 0.2);
    border-radius: 20px;
    display: flex;
    color: black;
    font-size: 62px;
    padding: 15px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const MaxTempTitle = styled.h3`
    font-size: 15px;
`;

export const MaxTempContent = styled.h3`
    
`;

export const MinTempContainer = styled.div`
    color: black;
    width: 20%;
    max-height: 30%;
    background-color: rgba(36, 33, 33, 0.2);
    border-radius: 20px;
    display: flex;
    font-size: 62px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const MinTempTitle = styled.h3`
    font-size: 15px;
`;

export const MintempContent = styled.h3`

`;

export const TableContainer = styled.div`

`;

export const Table = styled.table`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-collapse: collapse;
    background-color: rgba(36, 33, 33, 0.2);
    padding: 10px;
    min-width: 100%; 
    width: fit-content; 
    table-layout: auto; 
    border-radius: 20px;
    
`;

export const THead = styled.thead`
    display: table-row-group;
`;

export const TR = styled.tr`

`;

export const TH = styled.th`
    color: black;
    background-color: rgba(252, 252, 252, 0.671);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 5px;
`;

export const TBody = styled.tbody`
    display: flex;
    margin-left: 20px;
`;

export const TrTBody = styled.tr`

`;

export const TdTbody= styled.td`
    color: black;
    text-align: center;
    display: flex;
    flex-direction: row;
    margin-right: 50px;
    margin-bottom: 10px;
    padding: 5px;
    background-color: rgba(36, 33, 33, 0.2);
    border-radius: 5px;
    justify-content: center;
`;
