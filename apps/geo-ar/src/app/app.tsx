// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import { locationQr } from '@virtual-time-travel/location-qr';
import { Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <h1>
        Welcome geo-ar{' '}
        <span role="img" aria-label="Thumb-up">
          👍
        </span>
      </h1>
      <div className="import">Imported Libs from local workspace:</div>
      <ul>
        <li className="lib">{locationQr()}</li>
        <li className="lib">
          <Link to="/cameraexample">Camera Library</Link>
        </li>
        <li className="lib">
          <Link to="/apiexample">API Library</Link>
        </li>
        <li className="lib">
          <Link to="/dbexample">Database Library</Link>
        </li>
        <li className="lib">
          <Link to="/spatialexample">Spatial Geolocation Library</Link>
        </li>
      </ul>

      <div className="redux">Redux slices (@see redux dev tool):</div>
      <ul>
        <li className="slice">general</li>
        <li className="slice">geo</li>
      </ul>
      <br />
    </>
  );
}

export default App;
