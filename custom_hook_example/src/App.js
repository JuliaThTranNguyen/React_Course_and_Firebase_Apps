import './App.css';
import {Cat} from "./components/Cat";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useCount} from "./components/useCount";

function App() {
  const {count, increase, decrease, restart} = useCount(50);
  //we can reset a different initial value here, and it will start to count from there
  // Or leave it blank - so it can use the default initialValue from useCount.js

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus:true,
      },
    },
  });

  return (
    <div className="App1">
        <div>
          <h1>Customize hook && Query</h1>
          <h4>Counting from: {count}</h4>
          
          <button onClick={increase}>increase</button>
          <button onClick={decrease}>decrease</button>
          <button onClick={restart}>restart</button>
          <i><p style={{color: "yellow"}}>Note: reset value is 0 by default but it can be edited</p></i>
        </div>

        <div>
          <div className="App2">
            <h1>Fetching Query with Axios using React hooks</h1>
            <QueryClientProvider client={client}>
                <Cat />
            </QueryClientProvider>
          </div>
        </div>
    </div>
  );
}

export default App;
