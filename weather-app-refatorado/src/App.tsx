import { useEffect, useState } from 'react'
import { Button, Container, Header, HeaderBody, HeaderTitle, Input, Logo, Main } from './Appstyle'
import LogoImg from "./assets/weather.png"
import { CurrentWeatherCard } from './components/currentWeatherCard'
import { FutureWeatherCard } from './components/futureWeatherCard'
import { formateDate4 } from './utils'

//Interface para receber os parametrod da Current API
export interface WeatherDataCurrentProps{
  location: {
    name: string,
    region: string,
    country: string,
    localtime: string,
  },
  current: {
    temp_c: number,
    last_updated: string
    condition : {
      text: string,
      icon: string,
      code: number,
    },
    humidity: number,
    feelslike_c: number,
  }
}

//Interface para receber os parametros da Forecast API
export interface WeatherDataForecastProps{
  forecast: {
    forecastday: [
      {
        date: string,
        day: {
          maxtemp_c: number,
          mintemp_c: number,
          avgtemp_c: number,
          maxwind_mph: number,
          totalprecip_mm: number,
          uv: number,
          daily_chance_of_rain: number,
          condition: {
            text: string,
            icon : string,
            code: number,
          }
        },
        hour: [
          {
            time: string,
            temp_c: string,
            condition: {
              text: string,
              icon:string,
            },
            chance_of_rain: number,
          }
        ]
      }
    ]
  }
}

function App() {
  
  //Chave geral da API
  const API_KEY = "fab3da425a84445e8b2204330241211"

  //Input geral que sera usado para todas as APIs
  const [input, setInput] = useState("");

  //Location será usado para receber o valor do input e passar para o endpoint "q" da api
  const [location, setLocation] = useState("");

  //Data utilizada para passarmos como parametro para a forecast API


  //Dados da current API, dados do momento atual
  const [wheaterDataCurrent, setWheaterDataCurrent] = useState<WeatherDataCurrentProps>();

  //Dados da Forecast API, dados das proximas horas
  const [wheaterDataForecast, setWheaterDataForecast] = useState<WeatherDataForecastProps>();

  //Quando o usuario clicar no botao de buscar, setaremos o valor do input para a localização
  function handleButton(){
    setLocation(input)
  }

  //Função para consumir a Current API
  async function getCurrentData(location: string){
    
    //Consumindo a api e passando como parametro, location e API_KEY
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`)

    //Verificando se a resposta da api deu certo
    if (!response.ok){
      throw new Error("Algo deu errado, Tente Novamente!")
    }

    //Passando a resposta da api, para variavel data que implementa a interface current,
    //e passando a resposta para formato JSON
    const data: WeatherDataCurrentProps = await response.json();

    //Setando a variavel com o valor da variavel data
    setWheaterDataCurrent(data);
  }

  //Função para consumir a Forecast API
  async function getForecastData(location: string){
    
    //Consumindo a api e passando como parametro, location, API_KEY e date
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=1&aqi=no&alerts=no`)

    //Verificando se a resposta da api deu certo
    if (!response.ok){
      throw new Error("Algo deu errado, Tente Novamente!")
    }

    //Passando a resposta da api, para variavel data que implementa a interface Forecast,
    //e passando a resposta para formato JSON
    const data: WeatherDataForecastProps = await response.json();

    //Setando a variavel com o valor da variavel data
    console.log(data)
    setWheaterDataForecast(data);
  }

  useEffect(() => {
    getCurrentData(location)
    getForecastData(location)
  },[location])

  return (
    <Container>
      <Header>
        <HeaderTitle>Bem vindo ao DevWeather</HeaderTitle>
        <HeaderBody>
          <Input
            placeholder='Digite  o nome da cidade'
            value={input}
            onChange={(e) => {setInput(e.target.value)}}
          />

          <Button onClick={handleButton}>Buscar</Button>
        </HeaderBody>
        <Logo
          src={LogoImg}
        />
      </Header>
      <Main>
        <CurrentWeatherCard weatherData={wheaterDataCurrent}/>
        <FutureWeatherCard weatherData={wheaterDataForecast} />
      </Main>
    </Container>
  )
}

export default App
