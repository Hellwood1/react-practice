

export default function Button({ isFirst, isLast, onAdd, onDell }) {
  
    

    return  <div>
      
        <button disabled={isFirst} onClick={onAdd} > Add </button>
        <button disabled={isLast} onClick={onDell}> Deleted </button>
        

      </div>
}