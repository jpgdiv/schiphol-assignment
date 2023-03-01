import { useEffect, useState } from 'react';
import hero from './assets/images/herfst22_hero.jpeg';
import ImageBox from './components/ImageBox';
import Navbar from './components/Navbar/Navbar';
import { Input } from './components/Input';
import {  IFlight } from './services/flightService';
import { useFlights } from './hooks/useFlights';
import { Card } from './components/Card';
import { CardContainer } from './components/CardContainer';
import { FligtCard } from './components/FlightCard/FlightCard';
import { RadioInput } from './components/Radio';
import { FlightContainer } from './components/FlightContainer';
import { Page } from './components/Page';
import { ISort } from './types';

function App () {
    const [search, setSearch] = useState("");
    const [sortDirection, setSortDirection] = useState<ISort>("asc");
    const [flights] = useFlights(search, sortDirection, 5);
    const [result, setResult]= useState<IFlight[]>([])
console.log(flights)
    const isValidSearch = search.length >= 3;

    useEffect(() => {
        searchHandler(search)
    },[sortDirection,search])

    const searchHandler = (value:string) => {
        setSearch(value)
        setResult(flights);
    }    

    function sortHandler (value: ISort) {
        setSortDirection(value)
    }

    return <div>
        <Navbar logo="schiphol">
            <>vluchten</>
            <>parkeren & vervoeren</>
        </Navbar>
        <ImageBox size='sm'>
            <img src={hero} alt="welcome to schiphol" />
        </ImageBox>

        <Page>
            <CardContainer cols={"twocol"}>
                <Card header='Search Flights' subheader='Enter first letters of your destination Airport'>
                    <Input placeholder='bv. London' label='Find your flight' onChangeHandler={searchHandler} value={search} />
                    <h3>Sortert flights on:</h3>
                    <div className='sh-radio-group'>
                        <RadioInput label='Early' name='sort' id='asc' onChangeHandler={sortHandler} value={search} />
                        <RadioInput label='Late' name='sort' id='desc' onChangeHandler={sortHandler} value={search} />
                    </div>
                </Card>
                <Card header='Found Fligths:' size='lg' badge={  isValidSearch ? result.length+"": ""} >
                    {
                        isValidSearch ?
                        <FlightContainer>
                            {
                                result.map((flight,idx) => <FligtCard key={idx} flight={flight} />) 
                            }
                        </FlightContainer>
                        :
                        "Enter at least 3 characters"
                    }
                </Card>
            </CardContainer>
        </Page>
    </div>
}

export default App