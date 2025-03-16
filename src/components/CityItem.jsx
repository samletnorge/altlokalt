function CityItem(props) {


    function click() {
        localStorage.setItem("city", props.name)   
    }

    return (
        <a href="/citycompanies" className="item" onClick={click}>
            <div className="thumb ">
                <img src={props.image} alt={props.name} />
                <h4>{props.name}.</h4>
            </div>
        </a>
    )
}

export default CityItem;
