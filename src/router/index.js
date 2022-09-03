import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "@/pages/LandingPage";
import DistrictPage from "@/pages/DistrictPage";
import DivisionResultPage from "@/pages/result/DivisionResultPage";
import DistrictResultPage from "@/pages/result/DistrictResultPage";
import ConstituencyResultPage from "@/pages/result/ConstituencyResultPage";
import TablePage from "@/pages/TablePage";
import LoginPage from "@/pages/auth/LoginPage";
import DashboardStaffPage from "@/pages/DashboardStaff";
import DashboardAgentPage from "@/pages/DashboardAgent";
import CreateDivisionPage from "@/pages/CreateDivision";
import CreateDistrictPage from "@/pages/CreateDistrict";
import CreateConstituencyPage from "@/pages/CreateConstituency";
import CreateCenterPage from "@/pages/CreateCenter";
import CreatePoliticalPartyPage from "@/pages/CreatePoliticalParty";
import CreatePoliticalCandidatePage from "@/pages/CreatePoliticalCandidate";


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
        path: '/division-result',
        name: 'DivisionResult',
        component: DivisionResultPage
    },
    {
        path: '/district-result',
        name: 'DistrictResult',
        component: DistrictResultPage
    },
    {
        path: '/constituency-result',
        name: 'ConstituencyResult',
        component: ConstituencyResultPage
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
    },{
        path: '/create-center',
        name: 'CreateCenter',
        component: CreateCenterPage
    },{
        path: '/create-constituency',
        name: 'CreateConstituency',
        component: CreateConstituencyPage
    }
    ,{
        path: '/create-political-party',
        name: 'CreatePoliticalParty',
        component: CreatePoliticalPartyPage
    },{
        path: '/create-political-candidate',
        name: 'CreatePoliticalCandidate',
        component: CreatePoliticalCandidatePage
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router