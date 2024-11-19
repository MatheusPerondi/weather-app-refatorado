import styled from "styled-components";
import { WeatherDataCurrentProps } from "../../App";

interface WeatherProp{
    condition?: WeatherDataCurrentProps;
}

export const Container = styled.div<WeatherProp>`
    background-color: rgba(232,232,232,09);
    position: relative;
    width: 520px;
    height: 320px;
    border-radius: 40px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px;
`;

export const LocationContainer = styled.div`
    width: 100%;
    background-color: rgba(36, 33, 33, 0.2);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 0;
`;

export const LocationTitle = styled.h1`
    color: black ;
    font-size: 20px;
`;

export const Date = styled.h4`
    color: black;
    font-size: 12px;
`;

export const DegreeContainer = styled.div`
    background-color: rgba(36, 33, 33, 0.2);
    border-radius: 20px;
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
`;

export const DegreeTitle = styled.h2`
    color: black;
    font-size: 76px;
`;

export const ConditionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: rgba(36, 33, 33, 0.2);
    border-radius: 20px;
    padding: 10px;
    margin-top: 10px;
`;

export const ConditionTitle = styled.h2`
    color: black;
`;

export const ConditionImage = styled.img`
    
`;

