 var city_name=document.getElementById('city_name');
 const x=new Date();
 var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
 document.getElementById('day').innerText=`${dayNames[x.getDay()]}`;
 document.getElementById('date').innerText=`${ x.getDate()}${mS[x.getMonth()]}`;
 
 console.log();
//  console.log(city_name.value);
const city_btn=document.getElementById('submit_btn');
const c_name=city_name.value;
const weather_api=async(event)=>{
    event.preventDefault();

     if(city_name.value===""){
        alert("Plz Write City Name before Submit");
     }
     else {
        try{

            let url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=1c32202ccc680b7c6255fc51a1a446ee`;
            const response=await fetch(url);
             const data =await response.json();
             const dt=[data];

            //  city name insertion
             var x=document.getElementById('city_name_by_user');
             x.innerHTML=`<h1>${city_name.value.toUpperCase()} ,${dt[0].sys.country }</h1>`;

            //  temp conversion and insertion
             var tem=dt[0].main.temp;
             var a=273.15;
             //  let tempc=(tem−a) × (int(5)/9);
             var x1=tem-a;
             var x2=x1.toPrecision(4);
              document.getElementById('temp').innerHTML=`<h1 id="temp">${x2}<sup>o</sup>C</h1>`;


             
             var cld=dt[0].weather.main;
            //  console.log(dt[0].weather[0].main+"hi");
                    if(dt[0].weather[0].main==='Clouds'){
                        // console.log('hi lord krishna!!');
                        document.getElementById('icon').innerHTML=`<i class="fa-solid fa-cloud fa-3x" style="color:ivory"></i>`;
                    }
                    else if(dt[0].weather[0].main==='Mist'){
                        document.getElementById('icon').innerHTML=`<i class="fa-solid fa-cloud-sun fa-3x"></i>`;

                    }
            // console.log(x1);

            //  console.log(tem);
            // console.log(dt);
        }catch{
           alert('write proper city Name');
        }
     }
     
    
}
 
city_btn.addEventListener('click',weather_api);