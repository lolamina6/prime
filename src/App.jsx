import React from "react";
import information from "./information.json";
import { Routes, Route, useParams } from 'react-router-dom';
import Card from "./components/Card";
import { AdBlockDetectedWrapper } from "adblock-detect-react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Page = () => {

  const { id } = useParams();
  return <div>
    <div className="wrapper">
      <iframe title={id} width="960" height="540" src={`//mixdrop.co/e/${id}`} frameborder="0" allowfullscreen="true"></iframe>
    </div>
    <Grid />
  </div>
}


const Grid = () => {
  return <div className="grid-row">{information.files.map(data => <Card data={data}></Card>)}</div>
}

function App() {

  return <>
    <AdBlockDetectedWrapper>
      <Popup open={true} closeOnDocumentClick={false} position="center">
        <div style={{ color: "black", marginTop: '50%', height: '50%', margin: "auto", width: '50%' }}>ad block detected, allow ads to use this site</div>
      </Popup>
    </AdBlockDetectedWrapper >
    <Routes>
      <Route path="/" element={<Grid />} />
      <Route path="/page/:id" element={<Page />} />
      <Route path="*" element={<Grid />} />
    </Routes>
  </>
}

export default App;
