import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";




function App() {

  const [information, setInformation] = useState([]);
  let id = useRef(1);

  const handleCreate = (data) => {
    debugger
    setInformation([
        ...information,
        {id: id.current++, ...data}
    ])
  }

  return (
    <div className="App">
      <header className="App-header">

        <PhoneForm onCreate={handleCreate} />
        <PhoneInfoList data={information} />
      </header>
    </div>
  );
}

export default App;
