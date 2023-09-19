export const getGenres = async() =>{
    try{
        const response = await fetch (`/api/get-genres`,{
            method:'GET',
        })
        const result = await response.json();
        return result;
    }
    catch(error){
        return error;
    }
}