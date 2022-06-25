// import { HeaderOnlyLayout } from '@/components/Layout';

import ExcelView from "@/view/ExcelView";
import Homepage from "@/view/Homepage";
// import Topsis from "@/view/Topsis";

// Public routes
const publicRoutes = [
    { path: '/', component: Homepage },
    { path: '/excel-topsis', component: ExcelView },
    // { path: '/topsis', component: Topsis, },
    {}
]

//Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }