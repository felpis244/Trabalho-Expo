var amiboEntrada = document.getElementById("amiiboInput").value;
const fetchButton = document.getElementById('buscarAmiibo');
const imageContainer = document.getElementById('amiiboContainer');
        fetchButton.addEventListener('click', async () => {
        try{
            const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?name=${amiboEntrada}`);

            const data = await response.json();
            const imgElement = document.createElement('img');
            imgElement.src = data.amiibo[0].image;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(imgElement);
        } catch (error) {
            console.error('Erro ao buscar o amiibo', error);
        }
       });
