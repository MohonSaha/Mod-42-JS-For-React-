// localStorage.setItem('userId', 87952214);
// alert();

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    console.log(id);
    console.log(value);

    if(id && value){
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
    
}