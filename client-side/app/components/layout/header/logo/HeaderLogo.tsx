import {FC} from "react";
import Column from "@/ui/grid/Column";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo:FC = () => {
    return (
        <Column size={2}>
            <Link href='/' className='flex items-center'>
                <Image
                    src='/images/logo.svg'
                    width={85}
                    height={23}
                    alt='Xmas shop'
                    className='mr-3'
                />
            </Link>
        </Column>
    )
}
export default HeaderLogo;