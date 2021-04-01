const nilai = 8
let nilaihuruf, ket

//logika bercabang

if ((nilai >= 85)) {
    nilaihuruf ='A'
    ket ='Sangat Baik'
}else if (nilai >= 75) {
    nilaihuruf ='B'
    ket ='Baik'
}else if (niali >= 65) {
    nilaihuruf ='C'
    ket ='Cukup'
}else if (niali >= 55) {
    nilaihuruf ='D'
    ket ='Kurang'
}else{
    nilaihuruf ='E'
    ket ='Sangat Buruk'
}
console.log('Nilai Anda' + nilaihuruf + '(' + ket +')')