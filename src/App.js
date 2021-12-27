import {useState, useEffect} from "react";
import Todo from "./components/Todo";

function App() {
  const [pageTitle, setPageTitle] = useState('');

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `${pageTitle}|Todo CRUD`;
    }, [pageTitle]);

  let handlePageTitle = (title_val) => {
    setPageTitle(title_val);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Todo changeTitleHandler={handlePageTitle}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
