import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(prev => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once.")
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.")
    if(keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword)
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.")
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change")
  }, [keyword, counter]);
  return (
    <div>
      <input type="text" value={keyword} onChange={onChange} placeholder="Search here"></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
