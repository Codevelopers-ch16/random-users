const containerDiv = document.querySelector(".container")

const getUsers = async () => {

    try{
        const responsive = await fetch ("https://randomuser.me/api/")

        console.log(responsive);

        if(!responsive.ok){
            throw new Error(`Something went wrong ${responsive.status}`)
        }

        const dataUsers = await responsive.json()
        console.log(dataUsers.results);


    }catch(error){
        containerDiv.innerHTML = `
            <h5>${error}</h5>
        `
    }
}

const showUsers = (user) => {
    const defaultImg = "./img/error.gif"
    const cardDiv = document.querySelector(".card")

    user.forEach(({picture, name, email, phone, gender}) => {

        cardDiv.innerHTML =`
            <img src="${picture.large || defaultImg}" class="card-image-top" alt="picture">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            
        `
        
    });



}




getUsers()