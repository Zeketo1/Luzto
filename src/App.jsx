import PageRoutes from "./routes/Routes";
import { LuzContextProvider } from "./Context/LuzContextProvider";
import { CartContextProvider } from "./Context/CartContextProvider";

const App = () => (
    <LuzContextProvider>
        <CartContextProvider>
            <PageRoutes />
        </CartContextProvider>
    </LuzContextProvider>
);

export default App;
