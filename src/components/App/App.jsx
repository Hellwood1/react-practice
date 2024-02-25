
import Header from '../Header/Header';
import GoalsList from '../GoalsList/GoalsList';
import {goals} from '../Data/Data';
import Button from '../Button/Button';
import {useState} from 'react'


export default function App() {

  const [contentType, setContentType] = useState() 
  
  
  function handleClick(type) {
    setContentType(type)  
}

  return (
    <>
    <div>
      <Header />
      <hr/>
      <ul>
        <GoalsList  title={goals[0].title} description={goals[0].description } />
        <hr />
        <GoalsList  {...goals[1]} />
        <hr />
        <GoalsList  {...goals[2]}/>
        <hr/>
        <GoalsList  {...goals[3]}/>
      </ul>
   </div>
    <div>
      <Button onClick={() => handleClick('Вітаю! Форма успішно відправлена!')}> Відправити форму </Button>
        <Button onClick={() => handleClick('Форма успішно очищена!')}> Очістити форму </Button>
        
        
{/* Хук з тернарним оператором, для відображення інформації після нажимання
на кнопку */}
        {contentType ? <p>{contentType}</p> : null}
        
    </div>

</>
  );
}


