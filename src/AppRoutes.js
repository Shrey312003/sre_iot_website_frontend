import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import DataCollection from "./pages/data_collection";
//All the routes
const routes = () => [
    {
        path: '/',
        element: <DataCollection/>,
    },
];

function AppRoutes() {
    let app_routes = useRoutes(routes());
    return app_routes;
}

export default AppRoutes;