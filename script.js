(()=>{

    const imgDB = [
        'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-apartment-1.jpg',
        'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-condo-2.jpg',
        'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-co-op-3.jpg',
        'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-single-family-4.jpg',
    ];

    const imgList = document.getElementById('imgList');
    const render = () => {
        imgDB.map((value)=>{
            //const imgHTML = `<img src="${value}" style="height: 80px; width:80px" >`;
            //return imgHTML;
            const nodeImg = document.createElement('img');
            nodeImg.style.height = '80px';
            nodeImg.style.width = '80px';
            nodeImg.src = value;
            return nodeImg;
        }).forEach((itemNode)=>{
            imgList.appendChild(itemNode);
        });
        imgList.addEventListener('')
    }
    render();

})();
