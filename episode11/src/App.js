import './App.css';
import {Cat} from "./components/Cat";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
/*
  This module will extend the concept of Customize Hooks && Query usage
*/
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus:true,
      },
    },
  });

  return (
    <div>
      <div className="App1">
          <QueryClientProvider client={client}>
              <Cat />
          </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
