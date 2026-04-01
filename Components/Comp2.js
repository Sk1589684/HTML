

function ListGroup() {
    let items = [
        'New York',
        'India ',
        'Tokyo',
        'London',
        'Paris'


    ];
    // items=[];

    // const message=()=>
    //     { return items.length===0 ? <p>No Item Found</p>:null;
    //         //   return<><h1>List</h1><p>No item Found</p></>
    //     }



    return (
        <div>
            <h1>List</h1>

            {items.length === 0 && <p>No Item Found</p>}

            <ul className="list-group">
                {items.map((item) => (
                    <li
                        className="list-group-item"
                        key={item}
                        onClick={() => console.log(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ListGroup;