import Success from '../components/success'
import Bug from '../components/bug'
import { useQueryClient, useMutation, QueryClient} from "react-query"
import { addUser, getUsers  } from '../lib/helper'




export default function AddUserForm({ formData, setFormData}){

        const queryClient =useQueryClient()
        const addMutation = useMutation(addUser, {
            onSuccess : () =>{
             queryClient.prefetchQuery('users', getUsers)
        }
      })

      const handleSubmit = (e) => {
        e.preventDefault(); 
        if(Object.keys(formData).length == 0) return console.log("Don't have form data")
        let { id, ID, Name, Weight, Stock, Status} = formData;

        const model = {
            id,
            ID,
            Name, 
            Weight,
            Stock,
            Status : Status ?? "Active Unloading"
        }

       addMutation.mutate(model)
      }
    
      if(addMutation.isLoading)return<div>Loading!</div>
      if(addMutation.isError)return<Bug message={addMutation.error.message}></Bug>
      if(addMutation.isSuccess)return <Success message={"Added Successfully"}></Success>


    return(
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="ID" />
            </div>

            <div className="input-type">
            <input type="text" onChange={setFormData} name="name" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Name" />
            </div>

            <div className="input-type">
            <input type="text" onChange={setFormData} name="weight" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Weight" />
            </div>

            <div className="input-type">
            <input type="text" onChange={setFormData} name="case stock" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Stock" />
            </div>
             



    <div className="flex gap-10 items-center">
            <div className="form-check">
            <input type="radio" onChange={setFormData}  value="Active Unloading" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"></input>
            <label htmlFor="radioDefault1" className="inline-block text-gray-800">
                Active Unloading
            </label>
            <div className="form-check">
            <input type="radio" onChange={setFormData} value="Halted load" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"></input>
            <label htmlFor="radioDefault2" className="inline-block text-gray-800">
                 Halted load
            </label>
             </div>
            </div>
        </div>


             <button className="flex-justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add
             </button> 


        </form>
    )
}