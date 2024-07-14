

export default function Price({oldPrice,newPrice}){
    let oldstyles={textDecorationLine:"Line-through",}
    let newstles={fontWeight:"bold"}
    let styles={backgroundColor:"#e0c367",height:"50px",borderBottomLeftRadius:"19px",borderBottomRightRadius:"19px"
}
    return (
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newstles}>{newPrice}</span>
        </div>
        
    );
}