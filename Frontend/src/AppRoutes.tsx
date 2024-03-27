import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";

const AppRoutes = () => {

    return (

        <Routes>
            {/* here we are setting the layout as the response to the / route, the layout has the other components linked to it */}
            <Route path="/" element={<Layout>Home Page</Layout>} />
            
            <Route path="/about" element={<h1>ABOUT PAGE</h1>} />

            {/* this will check if there is any unknown route, (*), then it will redirect to the main / route. */}
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>

    );
}

export default AppRoutes;
