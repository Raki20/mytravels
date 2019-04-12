import React from 'react';
import Travel from "./Travel";

const travels = [
            {
                destination:"Paris",
                country:"France",
                image:"https://www.sbb.ch/content/dam/internet/sharedimages/ff-uebersichtsseiten/Lyria.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
                distance:"3000km",
            },
            {   destination:"Lisbon",
                country:"Portugal",
                image:"https://www.aworldtotravel.com/wp-content/uploads/2017/07/baixa-and-castle-things-lisbon-is-famous-for-a-world-to-travel.jpg",
                distance:"1km",
            },
            {   destination:"Madrid",
                country:"Spain",
                image:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/editorial/GranViaMadrid_1402566983.758.jpg?itok=OG7gzap-",
                distance:"500km",
            },  
            {   destination:"São Paulo",
                country:"Brazil",
                image:"https://abrilviagemeturismo.files.wordpress.com/2017/12/istock-842960000.jpg?quality=70&strip=info&w=680&h=453&crop=1",
                distance:"40000km",
            }
]

const Travels = () => (
    <div>
      {travels.map((travels) => (
        <Travel 
        key={travels.destination} 
        destination={travels.destination} 
        country={travels.country} 
        image={travels.image} 
        distance={travels.distance}
        />
      ))}
    </div>
  );

  export default Travels;