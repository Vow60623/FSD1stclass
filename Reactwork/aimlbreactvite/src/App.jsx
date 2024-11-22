import React from "react";
import Student from "./Student";

import StudentState from "./StudentState";
import ImageManipulation from "./ImageManipulation";

function App() {
  // const studentdata = {
  //   college: "ABES",
  //   name: "Nidhi Sharma",
  //   roll: "2200321530117",
  //   branch: "CSE AIML",
  //   section: "B",
  //   pix: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
  // };

  // let a = 20;
  // let mystyle = {
  //   backgroundColor: "cyan",
  //   color: "blue",
  //   border: "10px solid black",
  //   height: "100px",
  // };
  return (
    <div>
      <ImageManipulation />


      {/* <StudentState /> */}
      {/* <h2>ABES Engineering College</h2>  */}
      {/* <div style={mystyle}>{a}</div> */}
      <div>
        {/* <Student data={studentdata} /> */}
        {/* <Student
          name="Priyanshu Roy"
          branch="CSE(AIML)"
          college="ABES"
          roll="2200321530135"
          section="B"
          pic={<img src={logo} height={100} width={100}></img>}
        />
        <Student
          name="Priya Roy"
          branch="CSE(AIML)"
          college="ABES"
          roll="2200321530135"
          section="B"
          pic={<img src={logo} height={100} width={100}></img>}
        />
        <Student
          name="Priyansh Roy"
          branch="CSE(AIML)"
          college="ABES"
          roll="2200321530135"
          section="B"
          pic={<img src={logo} height={100} width={100}></img>}
        /> */}
      </div>
    </div>
  );
}

export default App;
