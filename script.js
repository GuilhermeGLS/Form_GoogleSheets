


const handleSubmit = (e) => {
    e.preventDefault()

    const name = document.querySelector(input[name=ame])

    const email = document.querySelector(input[name=email])

    fetch('https://api.sheetmonkey.io/form/7mFJGREf4KtrjxynzPNfbG', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        
    })
}


document.querySelector('form')