
import InputField from './InputField';
const JobForm = () => {
    return(
        <div>
            <h2 className="mt-3 mb-4">Add a job listing</h2>
            <form>
                <InputField 
                    type = "text"
                    label = "Job Title" />
                <InputField 
                    type = "text"
                    label = "Company"/>
                <InputField 
                    type = "text"
                    label = "Location"/>
                <InputField 
                    type = "text"
                    label = "Description"/>
                
                <button
                type='submit'
                className='btn btn-primary mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default JobForm;