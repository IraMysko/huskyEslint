import { useState, useRef } from "react";
import User from "./User";

const Users = () => {
  const [ user, setUser ] = useState<string | undefined>("");
  const [ city, setCity ] = useState<string | undefined>("");
  const [ name, setName ] = useState <number | string[]>([]);

  const names = [ "Ira", "Masha", "Olia" ];

  const newName = Math.floor(Math.random() * names.length);

  const getName = () => setName(newName);

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputCityRef = useRef<HTMLInputElement>(null);

  const addUser = () => {
    setUser(inputNameRef.current?.value);
    setCity(inputCityRef.current?.value);
  }; 
  
  return (
    <div>
      <div>
        <input placeholder="your name" ref={inputNameRef} type="text" />
        <input placeholder="your city" ref={inputCityRef} type="text" />
        <button onClick={addUser}>ADD INFORMATION</button>
      </div>
      <button onClick={getName}>Random name</button>
      <User name={name} city={city} user={user}/>

    </div>
  );
};

export default Users;
