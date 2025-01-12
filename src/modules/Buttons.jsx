let displayTxt ='';

const Buttons = ({btnText}) => {
     var welcome =(event)=> {

          //which button is clicked
          const buttonText = event.target.innerText;
          console.log("current button is " , buttonText);

          //select result box 
          let result =document.querySelector('.result');
          
          if(buttonText=='1'){
               console.log("you press 1");
               displayTxt = displayTxt + '1' //'' +1 =1
               result.innerText = displayTxt;  
          }
          else if(buttonText=='2') {
               console.log("you press 2");
               displayTxt = displayTxt + '2' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='3') {
               console.log("you press 3");
               displayTxt = displayTxt + '3' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='4') {
               console.log("you press 4");
               displayTxt = displayTxt + '4' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='5') {
               console.log("you press 5");
               displayTxt = displayTxt + '5' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='6') {
               console.log("you press 6");
               displayTxt = displayTxt + '6' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='7') {
               console.log("you press 7");
               displayTxt = displayTxt + '7' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='8') {
               console.log("you press 8");
               displayTxt = displayTxt + '8' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='9') {
               console.log("you press 9");
               displayTxt = displayTxt + '9' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='0') {
               console.log("you press 0");
               displayTxt = displayTxt + '0' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='.') {
               console.log("you press .");
               displayTxt = displayTxt + '.' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='+') {
               console.log("you press +");
               displayTxt = displayTxt + '+' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='-') {
               console.log("you press -");
               displayTxt = displayTxt + '-' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='*') {
               console.log("you press -");
               displayTxt = displayTxt + '*' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='/') {
               console.log("you press -");
               displayTxt = displayTxt + '/' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='%') {
               console.log("you press -");
               displayTxt = displayTxt + '%' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='/') {
               console.log("you press -");
               displayTxt = displayTxt + '/' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='=') {
               console.log("you press -");
               displayTxt = eval(displayTxt) ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='C') {
               console.log("you press -");
               displayTxt = '' ; 
               result.innerText = displayTxt;
          }
          else if(buttonText=='X') {
               console.log("you press x");
               displayTxt = displayTxt.slice(0, -1) ; 
               result.innerText = displayTxt;
          }

          else{
               console.log("invalid text");
               
          }
          console.log("Updated result is displayTxt:", displayTxt);
          
     }
     return <button className="text-orange-500 bg-slate-900 border border-yellow-300" onClick={welcome}>{btnText}</button>
}

export default Buttons;