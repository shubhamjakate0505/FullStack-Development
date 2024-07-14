import Product from "./Product"

function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    }
    
    return(
        <div style={styles}>
            <Product title="Logitech Mx master" idx={0}/>
            <Product title="Logitech Mx SuperMaster" idx={1}/>
            <Product title="Logitech Mx OnlyOkmaster" idx={2}/>
            <Product title="Zebronic Web- trasformaer" idx={3}/>
        </div>
    );

    }
export default ProductTab;

