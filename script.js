// var op=['USD','EUR','INR']
// var r=[1.10,1,91.3];
var z,y;


var opF = document.querySelector("#fromCurrency");
var amount = document.getElementById("amount");
var opT = document.querySelector("#toCurrency");
var btn = document.querySelector('button');
var res = document.querySelector('.result');


btn.addEventListener("click",(p)=>{
    // console.log();
    
    z=opF.options.selectedIndex;
    y=opT.options.selectedIndex;
    var s2;
    switch (z+1) {
        case 1:
            switch (y+1) {
                case 1:
                    s2=1
                    break;
                case 2:
                    s2=0.91
                    break;
                case 3:
                    s2=83.35
                    break;
            
                default:
                    break;
            }
            break;
        case 2:
            switch (y+1) {
                case 1:
                    s2=1.10
                    break;
                case 2:
                    s2=1
                    break;
                case 3:
                    s2=91.31
                    break;
            
                default:
                    break;
            }
            break;
        case 3:
            switch (y+1) {
                case 1:
                    s2=0.012
                    break;
                case 2:
                    s2=0.011
                    break;
                case 3:
                    s2=1
                    break;
            
                default:
                    break;
            }
            break;
    
        default:
            break;
    }
    
    res.innerHTML = Math.floor(parseFloat(amount.value)*s2);
})

// document.getElementById("con").addEventListener('click',(d)=>{
//     console.log(d);
// })
