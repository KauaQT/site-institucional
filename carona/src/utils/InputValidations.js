export const inputSomenteNumero = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '')
}