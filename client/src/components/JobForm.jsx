import { useState } from 'react';
import InputField from './InputField';
import { saveData } from '../services/api';

const defaultData = {title: "", company: "", location: "", description: ""};
const JobForm = () => {
    const [formData, setFormData] = useState(defaultData);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await saveData(formData);
    }


    return(
        <div>
            <h2 className="mt-3 mb-4">Add a job listing</h2>
            <form onSubmit={handleSubmit}>
            <InputField 
  onChange={handleChange}
  value={formData.title}
  name="title" 
  type="text"
  label="Job Title" 
/>
<InputField 
  onChange={handleChange}
  value={formData.company}
  name="company" 
  type="text"
  label="Company" 
/>
<InputField 
  onChange={handleChange}
  value={formData.location}
  name="location" 
  type="text"
  label="Location" 
/>
<InputField 
  onChange={handleChange}
  value={formData.description}
  name="description" 
  type="text"
  label="Description" 
/>

                
                <button
                type='submit'
                className='btn btn-primary mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default JobForm;