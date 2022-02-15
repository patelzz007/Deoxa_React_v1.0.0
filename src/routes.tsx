import { Layout1 } from "./Layouts/Layout1/Layout1";
import { Layout2 } from "./Layouts/Layout2/Layout2";

const routes = [
    { path: "/Layout1", element: <Layout1 /> },
    { path: "/", element: <Layout2 /> },
];

console.log("Routes =>", routes)

export default routes;