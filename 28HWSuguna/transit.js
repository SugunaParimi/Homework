let stations ={
    l1: ['Alamein','Ashburton','Burwood','Hartwell','Willison','Riversdale','Camberwell','Auburn','Glenferrie','Hawthorn','Burnley','East Richmond','Richmond','Parliament','Melbourne Central','Flagstaff','Southern Cross','Flinders Street'],
    l2: ['Belgrave','Tecoma','Upwey','Upper Ferntree Gully','Ferntree Gully','Boronia','Bayswater','Heathmont','Ringwood','Heatherdale','Mitcham','Nunawading','Blackburn','Laburnum','Box Hill',' Mont Albert','Surrey Hills','Chatham','Canterbury','East Camberwell','Camberwell','Auburn','Glenferrie','Hawthorn','Burnley','East Richmond','Richmond','Parliament','Melbourne Central','Flagstaff','Southern Cross','Flinders Street'],
    l3: ['Craigieburn','Roxburgh Park','Coolaroo','Broadmeadows','Jacana','Glenroy','Oak Park','Pascoe Vale','Strathmore','Glenbervie','Essendon','Moonee Ponds','Ascot Vale','Newmarket','Kensington','North Melbourne','Flagstaff','Melbourne Central','Parliament','Flinders Street','Southern Cross'],
    l4: ['Cranbourne','Merinda Park','Lynbrook','Dandenong',' Yarraman','Noble Park','Sandown Park','Springvale','Westall','Clayton','Huntingdale','Oakleigh','Hughesdale','Murrumbeena','Carnegie','Caulfield','South Yarra','Richmond',' Parliament','Melbourne Central','Flagstaff','Southern Cross',' Flinders Street'],
    l5: ['Frankston','Kananook','Seaford','Carrum','Bonbeach','Chelsea','Edithvale','Aspendale','Mordialloc','Parkdale','Mentone','Cheltenham','Southland','Highett','Moorabbin','Patterson','Bentleigh','McKinnon','Ormond','Glenhuntly','Caulfield','Malvern','Armadale','Toorak','Hawksburn','South Yarra','Richmond',' Parliament','Melbourne Central','Flagstaff','Southern Cross',' Flinders Street'],
    l6: ['Glen Waverley','Syndal','Mount Waverley','Jordanville','Holmesglen','East Malvern','Darling','Glen Iris','Gardiner','Tooronga','Kooyong','Heyington','Burnley','East Richmond','Richmond','Parliament','Melbourne Central','Flagstaff','Southern Cross','Flinders Street'],
    l7: ['Hurstbridge','Wattle Glen','Diamond Creek','Eltham','Montmorency','Greensborough','Watsonia','Macleod','Rosanna','Heidelberg','Eaglemont','Ivanhoe','Darebin','Alphington','Fairfield','Dennis','Westgarth','Clifton Hill','Victoria Park','Collingwood','North Richmond','West Richmond','Jolimont','Parliament','Melbourne Central','Flagstaff','Southern Cross','Flinders Street'],   
    l8: ['Lilydale','Mooroolbark','Croydon','Ringwood East','Ringwood','Heatherdale','Mitcham','Nunawading','Blackburn','Laburnum','Box Hill','Mont Albert','Surrey Hills','Chatham','Canterbury','East Camberwell','Camberwell','Auburn','Glenferrie','Hawthorn','Burnley','East Richmond','Richmond',' Parliament','Melbourne Central','Flagstaff','Southern Cross','Flinders Street'],
    l9: ['Mernda','Hawkstowe','Middle Gorge','South Morang','Epping','Lalor','Thomastown','Keon Park','Ruthven','Reservoir','Regent','Preston','Bell','Thornbury','Croxton','Northcote','Merri','Rushall','Clifton Hill','Victoria Park','Collingwood','North Richmond','West Richmond','Jolimont','Parliament','Melbourne Central','Flagstaff','Southern Cross','Flinders Street'],
    l10: ['Pakenham','Cardinia Road','Officer','Beaconsfield','Berwick','Narre Warren','Hallam','Dandenong',' Yarraman','Noble Park','Sandown Park','Springvale','Westall','Clayton','Huntingdale','Oakleigh','Hughesdale','Murrumbeena','Carnegie','Caulfield','South Yarra','Richmond',' Parliament','Melbourne Central','Flagstaff','Southern Cross','Flinders Street'],
    l11: ['Sandringham','Hampton','Brighton Beach','Middle Brighton','North Brighton','Gardenvale','Elsternwick','Ripponlea','Balaclava','Windsor','Prahran','South Yarra', 'Richmond','Parliament','Melbourne Central','Flagstaff','Southern Cross','Flinders Street'],
    l12: ['Stony Point','Crib Point','Morradoo','Bittern','Hastings','Tyabb','Somerville','Baxter','Leawarra','Frankston'],
    l13: ['Sunbury','Diggers Rest','Watergardens','Keilor Plains','St Albans','Ginifer','Albion','Sunshine','Tottenham','West Footscray','Middle Footscray','Footscray','South Kensington','North Melbourne','Flagstaff','Melbourne Central','Parliament','Southern Cross','Flinders Street'],
    l14: ['Upfield','Gowrie','Fawkner','Merlynston','Batman','Coburg','Moreland','Anstey','Brunswick','Jewell','Royal Park','Flemington Bridge','Macaulay','North Melbourne','Flagstaff','Melbourne Central','Parliament','Flinders Street','Southern Cross'],
    l15: ['Werribee','Hoppers Crossing','Williams Landing','Aircraf','Laverton','Westona','Altona','Seaholme','Newport','Spotswood','Yarraville','Seddon','Footscray','South Kensington','North Melbourne','Flagstaff','Melbourne Central','Parliament','Southern Cross','Flinders Street'],
    l16: ['Williamstown','Williamstown Beach','North Williamstown','Newport','Spotswood','Yarraville','Seddon','Footscray','South Kensington','North Melbourne','Flagstaff','Melbourne Central','Parliament','Southern Cross','Flinders Street']
}
//const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
function travelFrom(line,start, end)
{    
         let rl=line;
         let start1=(start.toLowerCase());
         let end1=(end.toUpperCase());
         alert(start1);
         alert(end1);
         
    /*let startIndex=stations.l10.indexOf(start);
   let endIndex=stations.l10.indexOf(end);
  // alert(startIndex);
   //alert(endIndex);
   //If someone passes in a station that doesn't exist, tell them
 if(startIndex=== -1 || endIndex===-1)
  {console.log("There is no route for the stops you requested")}   
//Make it error-tolerant. E.g.:
//Make it case-insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
   else if (startIndex<endIndex)
    {let l= endIndex -startIndex;
        startIndex=startIndex+1;             
        console.log('you need to getdown after '+(l-1)+ ' stops')
        for(i=startIndex; i<endIndex;i++)
        { console.log(stations[i])}
        //Make this work if you want to go backwards! e.g. 'You want to travel from "Redfern" to "St. James"'
    } else {
        let j=startIndex-endIndex;
        startIndex=startIndex-1;
        console.log('you need to getdown after '+(j-1)+ ' stops')
        
        for(i=startIndex; i>endIndex;i=i-1)
        {
            console.log(stations.l10[i]);}
    }*/
    
}
travelFrom('l10','Clayton','Hallam');
travelFrom('l10','Melbourne Central','Springvale');
travelFrom('l10','UK','Central')
