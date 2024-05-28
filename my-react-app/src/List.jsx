import PropTypes from 'prop-types'

function List(props) {
    
    //#beginregion many types of sorts
    //items.sort();
    //items.sort((a,b) => a.name.localeCompare(b.name)); //Order by name
    //items.sort((a,b) => b.name.localeCompare(a.name)); //Reverse order by name
    //items.sort((a,b) => a.calories - b.calories); //Order by calories
    //items.sort((a,b) => b.calories - a.calories); //Reverse Order by calories

    //const lowCalitem = items.filter(item => item.calories < 160); //Filter using conditions
    //const highCalitem = items.filter(item => item.calories >= 160);
    //#endredion
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; 
                                            <b>{item.calories}</b></li>)

    return (<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ 
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List