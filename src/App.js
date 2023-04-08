import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Error from './Error';
import Contact, { contactAction } from './pages/help/Contact';
import Careers, { careersLoader } from './pages/career/Careers';
import { CareerDetails, CDLoader } from './pages/career/CareerDetails';
import CError from './pages/career/CError';
// Layouts
import RootLayout from './layout/RootLayout';
import HelpLayout from './layout/HelpLayout';
import CareerLayout from './layout/CareerLayout';

const BrowserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      {/* instead of path="/" we can use 'index */}
      {/* exact */}
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path='careers'
        element={<CareerLayout />}
        errorElement={<CError />}
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={CDLoader}
        />
      </Route>

      <Route path='*' element={<Error />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={BrowserRouter} />
  );
}

export default App