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
        const row = document.createElement('tr');
        const id = document.createElement('td');
        id.innerText = item.id;
        const name = document.createElement('td');
        name.innerText = item.manufacturerName;
        const ceo = document.createElement('td');
        ceo.innerText = item.nameOfCEO;
        const headquarters = document.createElement('td');
        headquarters.innerText = item.headquarters;
        const modifiedOn = document.createElement('td');
        modifiedOn.innerText = item.modifiedOn;
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(ceo);
        row.appendChild(headquarters);
        row.appendChild(modifiedOn);    
        tBody.appendChild(row);
    });
}