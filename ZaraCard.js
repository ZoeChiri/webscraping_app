// components/ZaraCard.js
const ZaraCard = ({ item }) => {
    const titleFormatted = item.title.slice(0,20)
    const percentageDrop = 0;
    return(
        <div className = "card">
            <div className="img-container">
                <img src = {item.url_image} alt={item.title}/>
            </div>
            <div className={"text-container"}>
                <h5>{titleFormatted}...</h5>
                <p>Price drop from {item.price_strikethrough} to {item.price}</p>
                <p>Rating: {item.rating}</p>
            </div>
            <div className={"info-container"}>
                <div className="circle">{percentageDrop}%</div>
                <a href={`https://www.zara.com/us/en/woman-l1000.html?v1=1566992&regionGroupId=45${item.url}`}>Link</a>

            </div>
        </div>
    )
}


export default ZaraCard;