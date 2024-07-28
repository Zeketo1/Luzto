import PageRoutes from "./routes/Routes";
import { LuzContextProvider } from "./Context/LuzContextProvider";


const App = () => (
        <LuzContextProvider>
            <PageRoutes />
        </LuzContextProvider>
    );

export default App;
