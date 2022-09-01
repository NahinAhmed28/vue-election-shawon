import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "@/pages/LandingPage";
import DistrictPage from "@/pages/DistrictPage";
import ResultPage from "@/pages/ResultPage";
import TablePage from "@/pages/TablePage";
import LoginPage from "@/pages/auth/LoginPage";
import DashboardStaffPage from "@/pages/DashboardStaff";
import DashboardAgentPage from "@/pages/DashboardAgent";
import CreateDivisionPage from "@/pages/CreateDivision";
import CreateDistrictPage from "@/pages/CreateDistrict";

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/district',
        name: 'District',
        component: DistrictPage
    },
    {
        path: '/seat',
        // name: 'DashboardAgentPage',
        // component: DashboardAgentPage
    },
    {
        path: '/result',
        name: 'Result',
        component: ResultPage
    },
    {
        path: '/center-result',
        name: 'table',
        component: TablePage
    },
    {
        path: '/dashboard-staff',
        name: 'DashboardStaffPage',
        component: DashboardStaffPage
    },{
        path: '/dashboard-agent',
        name: 'DashboardAgentPage',
        component: DashboardAgentPage
    },{
        path: '/create-division',
        name: 'CreateDivision',
        component: CreateDivisionPage
    },{
        path: '/create-district',
        name: 'CreateDistrict',
        component: CreateDistrictPage
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router