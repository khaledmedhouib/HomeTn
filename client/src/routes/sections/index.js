import { Navigate, useRoutes } from 'react-router-dom'
import { HomePage } from './main'


export default function Router() {
    return useRoutes([

        {
            path: '/',
            element: (
                <HomePage />
            )
        }
    ])
}