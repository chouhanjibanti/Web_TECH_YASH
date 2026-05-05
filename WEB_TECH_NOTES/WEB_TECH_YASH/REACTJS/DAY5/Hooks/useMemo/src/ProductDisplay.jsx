import React, { useEffect, useMemo, useState } from "react";

function ProductDisplay() {
  const [data, setData] = useState([]); // store apis data
  const [category, setCategory] = useState("all"); // choose the category according to you
  const [search, setSearch] = useState("");

  useEffect(()=>{
       fetch("https://dummyjson.com/products")
       .then((res)=> res.json())
       .then((result) => setData(result.products))
       .catch((error)=> console.log("Error fetching products"));
  },[])

  // Exprensive Filtering logic in useMemo
 const filterProducts = useMemo(()=>{
      console.log("Product Filtering.......");
     return data.filter((p)=>{
             const matchesCategory  = category === "all" || p.category === category;
            const matchesSearch= p.title.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
       })
  },[data,category,search])


  return (
    <>
      <h1>Products Here</h1>

      {/* category filter */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
      </select>

      {/*  search Filter  */}
      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <div>
        {filterProducts.map((product)=>(
            <li key={product.id} style={{border:"1px solid",margin:"10px",padding:"10px"}}>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <p>{product.category}</p>
            </li>
        ))}
      </div>
    </>
  );
}

export default ProductDisplay;
