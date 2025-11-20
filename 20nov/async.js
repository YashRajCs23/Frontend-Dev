async function loadData() {
    const response = await fetch('https://localhost:3000/posts');
    const data = await response.json();
    const container=document.getElementById('container');
    data.forEach(function(item){
        const div=document.createElement('div');
        div.className='card';
        div.innerHTML=`
        <img src="${item.image}"/>
        <h2>${item.title}</h2>
        <p>${item.views}</p>
        `;
        container.appendChild(div);
    });
}
loadData();