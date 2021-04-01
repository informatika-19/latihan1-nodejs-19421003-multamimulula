//aray
//const LisNilai=['A','B','C']

//console.log(listNilai);
const dataMahasiswa = [
{
    nama :'Multami Mulula',
    npm :'19421003',
    prodi :'Informatika'
},{
    Nama :'Arif Rahman',
    npm :'19421021',
    prodi :'Informatika'
}

]
//console.log(dataMahasiswa[1].npm)

for(let i in dataMahasiswa){
    console.log(dataMahasiswa [i].nama +'-'+ dataMahasiswa[i].npm +'-'+dataMahasiswa[i].prodi)
}