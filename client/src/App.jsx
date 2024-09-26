import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import OurPackage from './public/pages/OurPackage'
// Lazy load components
const Publiclayout = React.lazy(() => import('./public/Publiclayout'));
const Hero = React.lazy(() => import('./public/components/Hero'));
const About = React.lazy(() => import('./public/pages/About'));
const MyPackages = React.lazy(() => import('./public/pages/MyPackages'));
const OurGallary = React.lazy(() => import('./public/pages/OurGallary'));
const OurPackage = React.lazy(() => import('./public/pages/OurPackage'));
const SchoolPackage = React.lazy(() => import('./public/pages/SchoolPackage'));
const Contact = React.lazy(() => import('./public/pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      {/* Wrap routes in Suspense to handle lazy loading */}
      <Suspense fallback={<div>
        <div className="flex flex-row space-x-4 justify-center mt-11 md:mt-48  ">
          <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent">
          </div>
        </div>
      </div>}>
        <Routes>
          {/* Publiclayout is also lazily loaded */}
          <Route path='/' element={<Publiclayout />}>
            <Route index element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/my-packges' element={<MyPackages />} />
            <Route path='/gallary' element={<OurGallary />} />
            <Route path='/our-package' element={<OurPackage />} />
            <Route path='/school-package' element={<SchoolPackage />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
