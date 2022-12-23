
console.log("seo")


function onSubmit(e){
    e.preventDefault();
    document.querySelector('[data-textinho]').textContent = ""

    const prompt = document.querySelector('[form-data-input]').value;
    const size = "small"

        if(prompt === ''){
            alert('O prompt não pode estar vazio')
            return;

        }

        generateImageRequest(prompt,size);
}

async function generateImageRequest(prompt,size){
    try{
        const response = await fetch('/openai/generateImage', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size

            })

        });

        if(!response.ok){
            throw new Error("essa imagem não pode ser gerada")

        }
        const data = await response.json();
        //console.log(data)
        const imageUrl = data.data;
        document.querySelector('[card-img]').src = imageUrl;
        document.querySelector('[card-texto]').textContent = prompt


    }catch(error){
        document.querySelector('[data-textinho]').textContent = error;
    }

}

document.querySelector('[form-data-form]').addEventListener('submit', onSubmit);


