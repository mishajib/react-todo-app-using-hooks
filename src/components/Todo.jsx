import {useState, useEffect} from "react";
import Books from "./Books";

const initialValues = {
    editMode: false,
    index: '',
    name: '',
    author: ''
};

function Todo(props) {

    // Books state / Variable
    const [books, setBooks] = useState([]);

    // Form State / Variable
    const [form, setForm] = useState(initialValues);

    // Page title change on component mount
    useEffect(() => {
        handleChangePageTitle();
        // eslint-disable-next-line
    }, []);


    // Handle page title set
    let handleChangePageTitle = () => {
        props.changeTitleHandler('Todo Component');
    };

    // Handle input change
    let handleInputChange = (event) => {
        const {name, value} = event.target;

        setForm({...form, [name]: value});
    };

    // Handle form submit
    let handleFormSubmit = (event) => {
        event.preventDefault();

        if (form.name === '') {
            alert('Book name is required!');
            return;
        }

        if (form.author === '') {
            alert('Book author name is required!');
            return;
        }

        setBookItemHandler();

        resetForm();
    };

    // Set book items
    let setBookItemHandler = () => {
        if (form.editMode) {
            books[form.index]  = {
                name: form.name,
                author: form.author,
            };
            setBooks([...books]);
        } else {
            let item = {
                name: form.name,
                author: form.author,
            };
            setBooks([...books, item]);
        }
    };

    // Reset form after submitted
    let resetForm = () => {
        setForm(initialValues);
    };


    // Edit book item
    let handleEditBookItem = index => {
        let editItem = {
            editMode: true,
            index: index,
            name: books[index].name,
            author: books[index].author
        };
        setForm(editItem);
    };

    // Delete item from book list
    let handleDeleteBookItem = (index) => {
        books.splice(index, 1);
        setBooks([...books]);
    };

    return (
        <div className="Todo">
            <div className="card my-5">
                <div className="card-header">
                    <h4 className="card-title">
                        {form.editMode ? 'Edit Book' : 'Add Book'}
                    </h4>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="card-body">
                        <div className="form-group mb-3">
                            <label htmlFor="title" className="text-start">
                                Title
                                <span className="text-danger">*</span>
                            </label>
                            <input type="text" id="title" className="form-control" placeholder="Enter book title"
                                   name="name"
                                   value={form.name} onChange={handleInputChange}/>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="author">
                                Author
                                <span className="text-danger">*</span>
                            </label>
                            <input type="text" id="author" className="form-control" placeholder="Enter book author name"
                                   name="author"
                                   value={form.author} onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="text-end">
                            <button className="btn btn-primary" type="submit">
                                {form.editMode ? 'Update' : 'Save'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <Books books={books} editBookItemHandler={handleEditBookItem} deleteBookItemHandler={handleDeleteBookItem}/>
        </div>
    );
}

export default Todo;
