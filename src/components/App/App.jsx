
import Header from '../Header/Header';
import GoalsList from '../GoalsList/GoalsList';
import {goals} from '../Data/Data';
import {useState} from "react"

import Button from '../Button/Button';
import Progress from '../Progress/Progress'




export default function App() {

  const [selectedIndx, setSelectedIndx] = useState(0);

  const handleClickAdd = () => {
    
    setSelectedIndx(selectedIndx + 1);
  };

  const handleClickDel = () => {
    
    setSelectedIndx(selectedIndx - 1);
  };
  
  const isAddBtn = selectedIndx === 10;

  const isDelBtn = selectedIndx === 0;

//   const [clicks, setClicks] = useState(0);

//   const [mouseEnter, setMouseEnter] = useState(0);
  

//   function handleClick() {
//     setClicks (clicks + 1)
   
//   }
  
//   function handleMouseEnter() {
//   setMouseEnter (mouseEnter +1 )
// }

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
      <Button isFirst={isAddBtn} isLast={isDelBtn} onAdd={handleClickAdd} onDell={handleClickDel} />
      <Progress current={selectedIndx + 0} />


</>
  );
}


