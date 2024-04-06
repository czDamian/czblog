import Pagination from "@/app/ui/dashboard/Pagination";
import { FaSearchengin } from "react-icons/fa6";

const Users = () => {
  return (
    <div>
      <div className="p-2 flex justify-between items-center bg-custom-900 rounded-lg">
        <div className="bg-custom-800 text-xs rounded flex items-center py-1 px-2 gap-2">
          <FaSearchengin size={15} />
          <input
            className="outline-none bg-custom-800"
            type="search"
            name="search"
            placeholder="Search for any user..."
          />
        </div>
        <button className="bg-green-800 p-2">Add New</button>
      </div>
      <table className="bg-custom-900 w-full text-sm my-5 rounded ">
        <thead className="font-bold">
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody className="text-custom-200">
          <tr>
            <td> John </td>
            <td> Wojohn@email.comw </td>
            <td> 02 Aug 2023 </td>
            <td> User </td>
            <td className="space-x-2 text-white">
              <button className="bg-green-800">Edit</button>
              <button className="bg-red-800">Delete</button>
            </td>
          </tr>
          <tr>
            <td> Obi </td>
            <td> Obiada@email.com </td>
            <td> 31 Mar 2024 </td>
            <td> Admin </td>
            <td className="space-x-2 text-white">
              <button className="bg-green-800">Edit</button>
              <button className="bg-red-800">Delete</button>
            </td>
          </tr>
          <tr>
            <td> Leo </td>
            <td> leo22@gmail.com </td>
            <td> 06 Jul 1997 </td>
            <td> Admin </td>
            <td className="space-x-2 text-white">
              <button className="bg-green-800">Edit</button>
              <button className="bg-red-800">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};
export default Users;
