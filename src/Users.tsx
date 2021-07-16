import { useState, useRef } from "react";
import User from "./User";

const Users = () => {
const [user, setUser] = useState<string | undefined>("");
const [city, setCity] = useState<string | undefined>("");
const [count, setCount] = useState<number>(1)

const inputNameRef = useRef<HTMLInputElement>(null);
const inputCityRef = useRef<HTMLInputElement>(null);

const addUser = () => {
    setUser(inputNameRef.current?.value)
    setCity(inputCityRef.current?.value)
   } 

const incr = () => setCount(count + 1);
    return (
        <div>
            <div>
            <input placeholder="your name" ref={inputNameRef} type="text" />
           <input placeholder="your city" ref={inputCityRef} type="text" />
           <button onClick={addUser}>ADD INFORMATION</button>
           <button onClick={incr}>INCREMENT</button>
           <div>{count}</div>
            </div>
          <User city={city} user={user}/>

        </div>
    )
};

export default Users;