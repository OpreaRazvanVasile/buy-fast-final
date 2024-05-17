import styled from "styled-components";


const typeButtonFun=function(type,googleStyle,inveretedStyle,redirectStyle,defaultStyle){
  if(type==='google'){
    return googleStyle
  }
  else if(type==='inverted'){
    return inveretedStyle
  }
  else if(type==='redirect'){
    return redirectStyle
  }
  else return defaultStyle

}
export const BaseButton=styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color:${({ typebutton }) => typeButtonFun(typebutton,'#4285f4','white','#4169E1','black')

};
color: ${({typebutton})=>
typeButtonFun(typebutton,'white','black','white','white')
};
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: ${({typebutton})=>
typebutton==='inverted'?'1px solid black':'none'
};;
cursor: pointer;
display: flex;
justify-content: center;



&:hover {
  background-color:${({typebutton})=>
  typeButtonFun(typebutton,'#357ae8','black','#357ae8','white')
  };
  color: ${({typebutton})=>
  typeButtonFun(typebutton,'black','white','black','black')
  };;
  border:${({typebutton})=>
  typeButtonFun(typebutton,'none','none','none','1px solid black')
  };;;
}


`



