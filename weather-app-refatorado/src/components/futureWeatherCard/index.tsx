import { WeatherDataForecastProps } from "../../App";
import { formateDate3 } from "../../utils";
import { Container, ForeCastCardContainer, ForecastContainer, MaxTempContainer, MaxTempContent, MaxTempTitle, MinTempContainer, MintempContent, MinTempTitle, Table, TableContainer, TBody, TdTbody, TH, THead, TR, TrTBody } from "./styles";

//Interface para criarmos uma variavel que implemente a interface Future API,
//para que precisemos passar um parametro do tipo WeatherDataCurrentProps, qunado chamarmos o componente
interface WeatherProp{
    weatherData?: WeatherDataForecastProps;
}

export function FutureWeatherCard({weatherData} : WeatherProp){
    return (
        <Container>
            <ForecastContainer>
                {weatherData?.forecast.forecastday.map((forecast, index) => (
                    <ForeCastCardContainer>
                    
                    <MaxTempContainer>
                        <MaxTempTitle>Max Temp</MaxTempTitle>
                        <MaxTempContent> {forecast.day.maxtemp_c.toFixed(0)}° </MaxTempContent>
                    </MaxTempContainer>

                    <MinTempContainer>
                        <MinTempTitle>Min Temp</MinTempTitle>
                        <MintempContent> {forecast.day.mintemp_c.toFixed(0)}° </MintempContent>
                    </MinTempContainer>

                </ForeCastCardContainer>
                ))}
            </ForecastContainer>

            
            <Table>
                <THead>
                    <TR>
                        <TH>Hour</TH>
                        <TH>Temp</TH>
                        <TH>Rain</TH>
                    </TR>
                </THead>

                <TBody>
                      {weatherData?.forecast.forecastday.map((forecast, index) => 
                          forecast.hour.map((hour, hourIndex) => (
                            <TrTBody key={hourIndex}>
                                   <TdTbody> {hour.time && formateDate3(hour.time)} </TdTbody>
                                   <TdTbody> {hour.temp_c}° </TdTbody>
                                  <TdTbody> {hour.chance_of_rain}mm </TdTbody>
                               </TrTBody>
                        ))
                    )}
                        
                </TBody>
            </Table>
            
        </Container>
    )
}