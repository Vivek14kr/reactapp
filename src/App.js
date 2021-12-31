import "./styles.css";
import {Timer} from "./Components/timer"

export default function App() {
  const starting = 0, ending = 15;
  return (
    <div className="App">
   <Timer start={starting} end= {ending}/>
     </div>
  );
}
