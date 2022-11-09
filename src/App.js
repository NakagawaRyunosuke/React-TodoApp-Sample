import { Main } from "./components/Main";
import {Header} from "./components/Header"
import {TodoProvider} from "./context/TodoContext"
import{ChakraProvider} from "@chakra-ui/react"



function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <TodoProvider>
          <Header />
          <Main />
        </TodoProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
