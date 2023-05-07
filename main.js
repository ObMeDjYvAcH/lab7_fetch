let testCapit = 'Berlin';
let testRegion = 'Europe';


async function getResponse(){
let response = await fetch('https://restcountries.com/v3.1/name/deutschland')
let content = await response.json()
console.log(content)
let key;

for (key in content){
   
   let valueCapit = content[key].capital
   let valueRegion = content[key].region

   JSON.stringify(valueCapit)
  
   if(valueCapit = testCapit){
    console.log(content[key].capital)
   }
   // if(valueRegion = testRegion){
   //    console.log(content[key].region)
   // }

}

}

getResponse()










