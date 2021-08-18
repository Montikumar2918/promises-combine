const asiaRegion = fetch('https://restcountries.eu/rest/v2/region/asia')
.then((data) => data.json()).catch((errMsg) => console.log(errMsg));

const europeRegion = fetch('https://restcountries.eu/rest/v2/region/europe')
 .then((data) => data.json()).catch((errMsg) => console.log(errMsg));

Promise.all([asiaRegion,europeRegion]).then((data) => [...data[0],...data[1]]).then((countries) => countries.forEach((country) => createFlag(country))) 

         var element = document.createElement("div");
         element.className = "main-container";
         document.body.append(element);


         function createFlag({name, flag, population, region, area, capital}){
  
            element.innerHTML +=` 
           <div class="flag-container">
           <img class="flag" src=${flag}>

           <div class="details">
          <h3>${name}</h3>
          <p><b>Population: </b>${population}</p> 
          <p><b>Region: </b>${region}</p>
          <p><b>Area: </b>${area}</p>
          
          </div>
          </div>`;                 
          }