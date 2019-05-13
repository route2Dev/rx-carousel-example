import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AliceGallery } from './components/alice-gallery';
import ReactItemsGallery from './components/react-items-gallery';

const App: React.FC = () => {

  return (
    <>
      <div className="container-fluid" style={{marginBottom: '30px'}}>
        <div className="row">
          <div className="col-md-12">
            <AliceGallery />
            {/* <ReactItemsGallery /> */}
          </div>
        </div>
        {/* <AliceGallery /> */}
      </div>
      <div className="container-fluid" style={{padding: '0 60px'}}>
        <div className="row">
          <div className="col-md-12" >
            <ReactItemsGallery />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
