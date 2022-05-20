import { Divider, Button } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";

function Home({
  writeContracts,
  readContracts,   
  tx,
  first1,
 
}) {

  const [base1, setBase1] = useState("");
  const [base2, setBase2] = useState("");
  const [base3, setBase3] = useState("");
  const [base4, setBase4] = useState("");
  const [base5, setBase5] = useState("");
  const [base6, setBase6] = useState("");
  const [base7, setBase7] = useState("");
  const [base8, setBase8] = useState("");
  const [base9, setBase9] = useState("");
  const [base10, setBase10] = useState("");
  const [base11, setBase11] = useState("");
  const [base12, setBase12] = useState("");
  const [base13, setBase13] = useState("");
  const [base14, setBase14] = useState("");
  const [base15, setBase15] = useState("");
  const [base16, setBase16] = useState("");
  const [base17, setBase17] = useState("");
  const [base18, setBase18] = useState("");

  const [zcombo, setZcombo] = useState("");
  const [multiple, setMultiple] = useState(0);
  const [sizeAlert, setSizeAlert] = useState("")

  async function load () {
    if (first1 && !zcombo) {

      const load1 = await readContracts.BlockAudio.getFirst1();
      const load2 = await readContracts.BlockAudio.getFirst2();
      const load3 = await readContracts.BlockAudio.getFirst3();
      const load4 = await readContracts.BlockAudio.getFirst4();
      const load5 = await readContracts.BlockAudio.getFirst5();
      const load6 = await readContracts.BlockAudio.getFirst6();
      const load7 = await readContracts.BlockAudio.getFirst7();
      const load8 = await readContracts.BlockAudio.getFirst8();
      const load9 = await readContracts.BlockAudio.getFirst9();
      const load10 = await readContracts.BlockAudio.getFirst10();
      const load11 = await readContracts.BlockAudio.getFirst11();
      const load12 = await readContracts.BlockAudio.getFirst12();
      const load13 = await readContracts.BlockAudio.getFirst13();
      const load14 = await readContracts.BlockAudio.getFirst14();
      const load15 = await readContracts.BlockAudio.getFirst15();
      const load16 = await readContracts.BlockAudio.getFirst16();
      const load17 = await readContracts.BlockAudio.getFirst17();
      const load18 = await readContracts.BlockAudio.getFirst18();
  
      const z = await (load1 + load2 + load3 + load4  + load5  + load6 + load7  + load8 + load9 + load10 + load11 + load12 + load13 + load14 + load15 + load16  + load17  + load18);

      setZcombo(z);
      //console.log("z: ", await z);

    } 
  }

  load();

  const afterClick = async (e) => {
    
      console.log("data: ", e.target.files[0])
      
      const file = e.target.files[0];

      const reader = new FileReader();

      reader.onloadend =  ()  =>  {
          const audio_input = reader.result;
          // data:video/mp4;base64
          // data:audio/mp3;base64
          const base64 = audio_input.substring(audio_input.indexOf('base64,') + 7);
          //console.log("base64: ", base64);
          //setBase64raw(base64);
          const base64_length = base64.length;
          //console.log("base64_length: ", base64_length)
          const multiples = base64_length/40000;
          setMultiple(multiples);
          console.log("multiples: ", multiples)
          if (multiples > 18) {
            setSizeAlert("File is Too Big!!!")
          }
       
          const base64_1 = base64.substring(0, 40000)
          const base64_2 = base64.substring(40000,80000)
          const base64_3 = base64.substring(80000,120000)
          const base64_4 = base64.substring(120000,160000)
          const base64_5 = base64.substring(160000,200000)
          const base64_6 = base64.substring(200000,240000)
          const base64_7 = base64.substring(240000,280000)
          const base64_8 = base64.substring(280000,320000)
          const base64_9 = base64.substring(320000,360000)
          const base64_10 = base64.substring(360000,400000)
          const base64_11 = base64.substring(400000,440000)
          const base64_12 = base64.substring(440000,480000)
          const base64_13 = base64.substring(480000,520000)
          const base64_14 = base64.substring(520000,560000)
          const base64_15 = base64.substring(560000,600000)
          const base64_16 = base64.substring(600000,640000)
          const base64_17 = base64.substring(640000,680000)
          const base64_18 = base64.substring(680000,720000)
         
          //console.log("base64_1: ", base64_1);
          setBase1(base64_1);
          setBase2(base64_2);
          setBase3(base64_3);
          setBase4(base64_4);
          setBase5(base64_5);
          setBase6(base64_6);
          setBase7(base64_7);
          setBase8(base64_8);
          setBase9(base64_9);
          setBase10(base64_10);
          setBase11(base64_11);
          setBase12(base64_12);
          setBase13(base64_13);
          setBase14(base64_14);
          setBase15(base64_15);
          setBase16(base64_16);
          setBase17(base64_17);
          setBase18(base64_18);

          //const output = ("data:" + audio_input.substring(audio_input.indexOf(":")+1, audio_input.indexOf(";")) + ";base64," + base64_1 + 
          //base64_2 + base64_3 + base64_4 + base64_5 + base64_6 + base64_7 + base64_8 + base64_9 + base64_10 + base64_11 + base64_12 + base64_13 + base64_14 + base64_15 + base64_16 + base64_17 + base64_18);

          //console.log("example_output: " , output);
        };

      // ??
      reader.readAsDataURL(file);
  }

  return (
    <div className={'container'}>

        <Divider />
        <h1></h1>

        <h5>Upload MP4 Video File</h5>
          <fieldset>
          <input type="file" id="video-file" accept="video/mp4" onChange={afterClick} />
          </fieldset>
          
        <Divider />
        <p>Your Video is:  &nbsp;  {Math.ceil(multiple)} Parts.  {sizeAlert}</p>  
        
        <div style={{ maxWidth: 820, margin: "auto", marginTop: 4, paddingBottom: 0 }}>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst1(base1))
              }}>Write Part 1</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst2(base2))
              }}>Write Part 2</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst3(base3))
              }}>Write Part 3</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst4(base4))
              }}>Write Part 4</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst5(base5))
              }}>Write Part 5</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst6(base6))
              }}>Write Part 6</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst7(base7))
              }}>Write Part 7</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst8(base8))
              }}>Write Part 8</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst9(base9))
              }}>Write Part 9</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst10(base10))
              }}>Write Part 10</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst11(base11))
              }}>Write Part 11</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst12(base12))
              }}>Write Part 12</Button>
               <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst13(base13))
              }}>Write Part 13</Button>
               <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst14(base14))
              }}>Write Part 14</Button>
               <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst15(base15))
              }}>Write Part 15</Button>
               <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst16(base16))
              }}>Write Part 16</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst17(base17))
              }}>Write Part 17</Button>
              <Button type={"primary"} onClick={() => {
                tx(writeContracts.BlockAudio.setFirst18(base18))
              }}>Write Part 18</Button>
        </div>
        <Divider />
          <h2>Play Blockchain Video <br></br>
          <a href="https://twitter.com/austingriffith" target="_blank" rel="noopener noreferrer">Starring: @austingriffith</a>
          </h2>
          <video controls id='video' src={zcombo} width='600' height='400'></video>
     
      </div>
  )
};

export default Home;
