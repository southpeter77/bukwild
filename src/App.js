import React,{useState, useEffect} from 'react';
import LayoutUI from "./components/layoutUI/Layout-UI"
import Container from "./components/pageUI/Container"

function App() {
  
  const [data, setData] = useState(null);
  const [background, setBackground] = useState("");
  const [headline, setHeadline] = useState("");
  const [subHead, setSubHead] = useState("")
  const [callToAction , setCallToAction] = useState("");
  useEffect(()=>{
    (async()=>{
      const data = await fetch('https://yo.bkwld.com/Z4uZ7gZ6/download/content.json?k=1428659a&utm_source=viewer_new)');
      const info = await data.json();
      setBackground(info.pages[0].slug)
      setHeadline(info.pages[0].blocks[0].headline)
      setSubHead(info.pages[0].blocks[0].subhead)
      setCallToAction(info.pages[0].blocks[0].cta)
      setData(info.pages)
    })()
  },[])
  
  if (!data) return null;

  return (
    <>
      <div className={background}>
    <LayoutUI data={data}  
    setBackground={setBackground}
    setHeadline={setHeadline}
    setSubHead={setSubHead}
    setCallToAction={setCallToAction}
    ></LayoutUI>
    <Container
        background={background}
        headline={headline}
        subHead={subHead}
        callToAction={callToAction}
    ></Container>
    </div>
    </>
  );
}



export default App;
