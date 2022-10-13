export const getData = async (param) => {
    try {
        const data = await fetch(`https://spanish-snowboarder-server-ixqh.onrender.com/${param}`);
    const dataToJson = await data.json();
    return dataToJson;
      
    } catch (error) {
        console.log(error);
    }
    
};