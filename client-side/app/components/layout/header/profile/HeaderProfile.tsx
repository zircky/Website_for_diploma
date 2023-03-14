import {FC} from "react";
import SquaerButton from "@/ui/square-button/SquaerButton";
import {HiOutlineUserCircle} from "react-icons/hi";
import Column from "@/ui/grid/Column";

const HeaderProfile:FC = () => {
    return (
        <Column size={3} className='flex items-center'>
                <SquaerButton Icon={HiOutlineUserCircle} onClick={() => {}} />
                <div className='ml-3'>
                    <div className='text-dark-d'>Личный кабинет</div>
                </div>
        </Column>
    )
}
export default HeaderProfile;