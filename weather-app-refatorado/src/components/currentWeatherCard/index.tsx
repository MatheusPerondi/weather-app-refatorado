import { WeatherDataCurrentProps } from "../../App";
import {  } from "../../App";
import { formatDate } from "../../utils";
import { ConditionContainer, ConditionImage, ConditionTitle, Container, Date, DegreeContainer, DegreeTitle, LocationContainer, LocationTitle } from "./styles";


//Interface para criarmos uma variavel que implemente a interface Current API,
//para que precisemos passar um parametro do tipo WeatherDataCurrentProps, qunado chamarmos o componente
interface WeatherProp{
    weatherData?: WeatherDataCurrentProps;
}

export function CurrentWeatherCard({weatherData}: WeatherProp){
    return (
        <Container>
            <LocationContainer>
                <LocationTitle> {weatherData?.location.name} </LocationTitle>
                <Date> {weatherData?.current.last_updated && formatDate(weatherData.current.last_updated)} </Date>
            </LocationContainer>

            <DegreeContainer>
                <DegreeTitle> {weatherData?.current.temp_c.toFixed(0)} </DegreeTitle>
            </DegreeContainer>

            <ConditionContainer>
                <ConditionTitle> {weatherData?.current.condition.text} </ConditionTitle>
                <ConditionImage
                    src={weatherData?.current.condition.icon} 
                /> 
            </ConditionContainer>
        </Container>
    )
}