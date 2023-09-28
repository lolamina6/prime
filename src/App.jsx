import { AdBlockDetectedWrapper } from "adblock-detect-react";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Card from "./components/Card";
import baseInfo from "./baseInformation.json";
import { shuffle } from "lodash"

const Page = ({ files }) => {
  const { id } = useParams();
  return <div>
    <div className="iframe-wrapper">
      <iframe title={id} src={`//mixdrop.co/e/${id}`} frameborder="0" allowfullscreen="true"></iframe>
    </div>
    <Grid files={files} />
  </div>
}

const Grid = ({ files }) => {
  return <div className="grid-row">{shuffle(files)?.map(file => <Card key={file.ref} data={file}></Card>)}</div>
}

function App() {

  // const [information, setInformation] = useState(baseInfo);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       // const res = await axios.get('https://api.mixdrop.co/folderlist?email={email}&key={key}');
  //       // setInformation(res);
  //     } catch { }
  //   })()
  // })

  return <>
    <AdBlockDetectedWrapper>
      <Popup open={true} closeOnDocumentClick={false} position="center">
        <div style={{ color: "black", marginTop: '50%', height: '50%', margin: "auto", width: '50%' }}>ad block detected, allow ads to use this site</div>
      </Popup>
    </AdBlockDetectedWrapper >
    <Routes>
      <Route path="/" element={<Grid files={baseInfo.files} />} />
      <Route path="/page/:id" element={<Page files={baseInfo.files} />} />
      <Route path="*" element={<Grid files={baseInfo.files} />} />
    </Routes>
  </>
}

export default App;
