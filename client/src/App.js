import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobForm from './components/JobForm';
import { getData } from './services/api';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobsData = async () => {
    const data = await getData(); // ✅ using imported function from api.js
    setJobs(data);
    }
    getJobsData();
  }, [showForm]);

  const handleToggleForm = () => {
    setShowForm(prevState => !prevState);
  }

  return (
    <div className="container mt-6">
      <div className="row">
        <div className="col-md-4">
          <h1 className="mb-4">Job Board</h1>
          <button className="btn btn-primary mb-3 " onClick={handleToggleForm}>
            { showForm ? 'Hide Job Form' : 'Show Job form'}</button>
            { showForm && <JobForm />}
            { !showForm && <p>hello</p>}
        </div>
        <div className="col-md-8">
          hello
        </div>
      </div>
    </div>

  );
}

export default App;
