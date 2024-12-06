import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Parent from './components/parent.tsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
// import HomePage from './pages/home_page.tsx'
// import NavBar from './components/navbar.tsx';
// import Experience from './pages/experience_page'
// import Publications from './pages/publications_page';
// import Contact from './pages/contact_page.js';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
//   {
//     path: 'About',
//     element: <HomePage />,
//   },
//   {
//     path: 'experience',
//     element: <Experience />
//   },
//   {
//     path: 'publications',
//     element: <Publications />
//   },
//   {
//     path: 'Hire Me',
//     element: <Contact />
//   }
// ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Parent />
      {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
