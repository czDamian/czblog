import { fetchCategories } from "@/app/lib/fetchdata";
import { addCategory } from "@/app/lib/actions";
export const metadata = {
  title: "Category",
};
const NewCategory = () => {
  return (
    <div className="flex">
      <form action={addCategory} className="w-[350px] md:w-full m-auto my-10">
        <h1>Add Category</h1>
        <div className="flex flex-col md:flex-row gap-2 md:mx-4">
          <input
            className="w-full md:w-1/5"
            type="text"
            name="categoryName"
            placeholder="Category Name"
          />
          <input
            className="w-full md:w-3/5"
            type="text"
            name="categoryDesc"
            placeholder="A brief desc of the category"
          />
          <input className="w-full md:w-1/5" type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

const CatList = async () => {
  const { categories, categoryCount } = await fetchCategories();
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl my-2">
          Category List ({categoryCount})
        </h1>
        <div className="flex border p-2 font-bold">
          <div className="w-1/5">Category Name</div>
          <div className="w-3/5">Category Description</div>
          <div className="w-1/5 flex items-center space-x-2">Actions</div>
        </div>

        {categories.map((category) => (
          <div
            key={category.id}
            className="flex border px-2 py-1 text-xs lg:text-sm">
            <div className="w-1/5">{category.categoryName}</div>
            <div className="w-3/5">{category.categoryDesc}</div>
            <div className="w-1/5 flex items-center space-x-2">
              <button className="bg-blue-500">Edit</button>
              <button className="bg-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoriesList = () => {
  return (
    <section>
      <NewCategory />
      <CatList />
    </section>
  );
};
export default CategoriesList;
