import React from 'react';
import ReactDOM from 'react-dom';

const buttonstyle = {
  padding: "10px",
  width: "300px"
};
var buttonlink = "./mainpage.html";
function info1() {
return (document.getElementById("displayIframe").src="./page1.html");
}

function info2() {
return (document.getElementById("displayIframe").src="./page2.html");
}

function info3() {
return (document.getElementById("displayIframe").src="./page3.html");
}

function info4() {
return (document.getElementById("displayIframe").src="./page4.html");
}

function info5() {
return (document.getElementById("displayIframe").src="./page5.html");
}

function info6() {
return (document.getElementById("displayIframe").src="./page6.html");
}

function info7() {
return (document.getElementById("displayIframe").src="./page7.html");
}

function info8() {
return (document.getElementById("displayIframe").src="./page8.html");
}

function info9() {
return (document.getElementById("displayIframe").src="./page9.html");
}

function info10() {
return (document.getElementById("displayIframe").src="./page10.html");
}

function info11() {
return (document.getElementById("displayIframe").src="./page11.html");
}

const custompage = (
  <div>
  <div>
    <div>
      <button style={buttonstyle} onClick={info1}> User Management </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info2}> Company information/Profile </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info3}> Test Groups Management </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info4}> Test Management </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info5}> Doctors Management </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info6}> Lab Technicians </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info7}> Patient entry </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info8}> Sample Collection </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info9}> Result Entry </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info10}> Billing History </button>
    </div>
    <div>
      <button style={buttonstyle} onClick={info11}> Test Analysis </button>
    </div>
    </div>
    <div style={{position:"absolute", top: "0px", left: "350px"}}>
    <iframe id="displayIframe" src={buttonlink} style={{height:"500px", width:"900px"}}> </iframe>
    </div>
    </div>

);

ReactDOM.render(custompage, document.getElementById('root'));
