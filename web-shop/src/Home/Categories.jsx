import shirt from "../assets/images/shirt.png";
import jacket from "../assets/images/jacket.png";
import hat from "../assets/images/hat.png";
import dress from "../assets/images/dress.png";
import shoes from "../assets/images/shoes.png";
function Categories(){
    const categories = ["Áo","Áo khoác","Nón", "Váy", "Giày","Áo","Áo khoác","Nón", "Váy", "Giày","Áo","Áo khoác","Nón", "Váy", "Giày","Áo","Áo khoác","Nón", "Váy", "Giày"];
    const images = [shirt, jacket, hat, dress, shoes];
    return(
        <div className="bg-white w-full">
            <span className="text-2xl ml-3">Danh mục</span>
            <ul className="flex flex-wrap">
                {categories.map((items, index) => (
                    <li key={index}><div className="flex flex-col items-center justify-center h-40 w-30 border border-black/10 bg-white hover:bg-gray-100">
                        <img src={images[index % images.length]} alt={items} className="h-10 bg-gray-300 rounded-full"/>
                        <span>{items}</span></div></li>
                ))}
            </ul>
        </div>
    )
}
export default Categories;