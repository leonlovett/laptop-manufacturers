console.log('Welcome to HackerU-JustCode Assignment');
$(document).ready(function () {
    getRemoteData();
});

const dataUrl = 'https://www.justcode.com/dataservice/api/laptopManufacturer/list';
let data;
async function getRemoteData() {
    data = await (await fetch(dataUrl)).json();
    const tBody = document.querySelector('tbody');
    data.forEach(item => {
        const row = createRow(item);
        const row = document.createElement('tr');
        const id = document.createElement('td');
        id.innerText = rowData.id;
        const name = document.createElement('td');
        name.innerText = rowData.manufacturerName;
        const ceo = document.createElement('td');
        ceo.innerText = rowData.nameOfCEO;
        const headquarters = document.createElement('td');
        headquarters.innerText = rowData.headquarters;
        const modifiedOn = document.createElement('td');
        modifiedOn.innerText = rowData.modifiedOn;
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(ceo);
        row.appendChild(headquarters);
        row.appendChild(modifiedOn);    
        tBody.appendChild(row);
    });
}