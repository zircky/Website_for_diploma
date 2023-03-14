import {FC} from "react";
import SquaerButton from "@/ui/square-button/SquaerButton";
import {HiOutlineHeart, HiOutlineSearch, HiOutlineShoppingCart} from "react-icons/hi";
import Column from "@/ui/grid/Column";

const HeaderButtons:FC = () => {
    return (
        <Column size={2} className='gap-2'>
            <SquaerButton Icon={HiOutlineSearch} onClick={() => {}}/>
            <SquaerButton Icon={HiOutlineHeart} onClick={() => {}}/>
            <SquaerButton Icon={HiOutlineShoppingCart} onClick={() => {}} number={5}/>
        </Column>
    )
}
export default HeaderButtons;