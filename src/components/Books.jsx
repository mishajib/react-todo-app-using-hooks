
export default function Books(props) {
    let tableItems= [];

    if(props.books.length > 0) {
        tableItems = props.books.map((item, index) => {
            return (
                <tr key={index}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.author}
                    </td>
                    <td>
                        <button type="button" className="btn btn-primary" onClick={() => props.editBookItemHandler(index)}>
                            Edit
                        </button>
                        <button type="button" className="btn btn-danger ms-2" onClick={() => props.deleteBookItemHandler(index)}>
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    } else {
        tableItems =
            <tr>
                <td colSpan="100%" className="text-center">
                    No books found!
                </td>
            </tr>;
    }

    return (
        <div className="books">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">
                        Books List
                    </h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Book Author</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {tableItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}