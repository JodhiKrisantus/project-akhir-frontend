const call = async () => {
    const url = 'http://localhost:5000/get_teks' 
    let response = await fetch(url)
    const data = await response.text();
    document.getElementById("teks").innerHTML = data;
}

setInterval(() => {
    call();
}, 500);