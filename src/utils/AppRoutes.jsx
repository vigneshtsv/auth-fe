import SingIn from '../components/Singin'
import SingUp from '../components/SingUp'
import AdminDashboard from '../components/AdminDashboard'
import UserDashboard from '../components/UserDashboard'
import AdminProtectedRoute from './AdminProtectedRoute'
import UserProtectedRoute from './UserProtectedRoute'
import { Navigate } from 'react-router-dom'


const AppRoutes = [
    {
        path:'/',
        element:<SingIn/>
    },
    {
        path:'/singup',
        element:<SingUp/>
    },
    {
        path:'/admin',
        element:<AdminProtectedRoute> <AdminDashboard/> </AdminProtectedRoute>
    },
    {
        path:'/user',
        element:<UserProtectedRoute> <UserDashboard/> </UserProtectedRoute>
    },
    {
        path:'/*',
        element:<Navigate to ='/'/>
    }
]

export default AppRoutes