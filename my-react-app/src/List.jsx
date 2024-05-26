function List() {
    const fruits = [
    { id: 1, name: 'Apple', calories: 199 },
    { id: 2, name: 'banana', calories: 299 },
    { id: 3, name: 'Orange', calories: 399 },
    { id: 4, name: 'Pineapple', calories: 150 },
    { id: 5, name: 'coconut', calories: 100 }
    ];
    //fruits.sort();
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Order by name
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse order by name
    //fruits.sort((a,b) => a.calories - b.calories); //Order by calories
    //fruits.sort((a,b) => b.calories - a.calories); //Reverse Order by calories

    //const lowCalFruit = fruits.filter(fruit => fruit.calories < 160); //Filter using conditions
    //const highCalFruit = fruits.filter(fruit => fruit.calories >= 160);


    const ListItems = fruits.map(fruit => 
        <li key={fruit.id}>
            {fruit.name}: &nbsp; <b>{fruit.calories}</b>
        </li>
        )

    return (<ol>{ListItems}</ol>);
}

export default List