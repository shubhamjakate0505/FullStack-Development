import "./Product.css"
import Price from "./Price";


function Product({title,idx}){
   let oldPrice=["12,899","13,999","14,890","18000"];
   let newPrice=["2,899","3,999","4,890","8000"]
   let Description=[["This for 1 Description","This for 1 Description"],["This for 2 Description","This for 2 Description"],["This for 3 Description","This for 3 Description"],["This for 4 Description","This for 4 Description"]]
        return (
            <div className="Product" >
                <h2>{title}</h2>
                
                <p>{Description[idx][0]}</p>
                <p>{Description[idx][1]}</p>
                <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
                
            </div>
        ); 
    }
   
    

export default Product;
