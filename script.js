


const handleSubmit = (e) => {
    e.preventDefault()

    const name = document.querySelector('input[name=name]').value

    const email = document.querySelector('input[name=email]').value

    fetch('https://api.sheetmonkey.io/form/7vQBWCxSVu275hwoCYgEvF', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email})
    })
}


document.querySelector('form').addEventListener('submit', handleSubmit)