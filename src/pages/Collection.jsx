import { useContext, useState , useEffect } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import Productitem from "../components/Productitem";
function Collection() {
  
  const [showfilter, setShowfilter] = useState(false);
  const [filterproducts, setFilterproducts] = useState([]);
  const { products, search ,showsearch} = useContext(Shopcontext);
  const [category , setCategory] = useState([]);
  const [subcategory , setSubcategory] = useState([]);
  const [sorttype , setSorttype] = useState('relevent'); 

  const togglecategory = (e) => {
    if(category.includes(e.target.value)){
        setCategory(prev => prev.filter((item) => item !== e.target.value));  
    }
    else{
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const togglesubcategory = (e) => {
    if(subcategory.includes(e.target.value)){
        setSubcategory(prev => prev.filter((item) => item !== e.target.value));  
    }
    else{
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };

 const applyFilter = () => {
   let  productscopy = products.slice();
   if(showsearch && search){
     productscopy = productscopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
   }
   if(category.length>0){
    productscopy = productscopy.filter((item) => category.includes(item.category));

   }
   if(subcategory.length>0){
    productscopy = productscopy.filter((item) => subcategory.includes(item.subCategory));
   }

   setFilterproducts(productscopy); 
 }

 const sortpoduct = () => {
  let fbcopy = filterproducts.slice();

  switch(sorttype){
    case 'low-high':
      setFilterproducts(fbcopy.sort((a,b) => a.price - b.price));
      break ;

    case 'high-low':
      setFilterproducts(fbcopy.sort((a,b) => b.price - a.price));
      break ;
      
      default:
        applyFilter();
        break; 

      
  }
 }

 useEffect(() => {
  applyFilter();
 }, [category , subcategory,search,showsearch]);


  
  useEffect(() => {
    setFilterproducts(products);
  }, [products]);

  useEffect(() => {
    sortpoduct();
  }, [sorttype]);

  return  (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowfilter(!showfilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTER
          <img
            className={`h-3 sm:hidden ${showfilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="not lodded"
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">CATEGORIES </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={togglecategory} /> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={togglecategory} /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={togglecategory} /> Kids
            </p>
          </div>
        </div>
        {/* subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">TYPE </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} onChange={togglesubcategory} />
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={togglesubcategory} />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange={togglesubcategory} />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* rigth side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sort */}
        <select onChange={(e)=>setSorttype(e.target.value)} className="border-2 border-gray-700 text-sm px-2">
          <option value="relavent">sort by: Relavent </option>
          <option value="low-high">sort by: Low to High</option>
          <option value="high-low">sort by: High to Low </option>
        </select>
        </div>
        {/* Map products */}
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-6">
        {filterproducts.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
