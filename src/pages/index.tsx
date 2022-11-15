import { useState, useEffect, useMemo, useCallback } from 'react';

const Test = () => {

  const [age, setAge] = useState(26);
  const [name, setName] = useState('Matheus');

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log(`Age ${age}, newAge${newAge}`)
    setAge(prev => prev === 26 ? 32 : 26);
  },[age]);
  
  const handleChangeName = useCallback(() => {
    setName(prev => prev === 'Matheus' ? 'Marcos' : 'Matheus');
  }, [])
  
  const calc = useMemo(() => {
    return 10 * age;
  },[age])


  return (
    <div>
        <p>
          Nome: {name}
        </p>
        <p> 
        Idade: {age}
        </p>
        <button onClick={handleChangeAge}>Alterar Idade</button>
        <br />
        <button onClick={handleChangeName}>Alterar Nome</button>
    </div>
  )
}

export { Test };
