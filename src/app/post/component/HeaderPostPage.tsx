import { memo } from 'react';
import iconUser from '../../assets/userIcon.png';
import useLogout from '@/app/hook/useLogout';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { username } from '@/app/store';

const HeaderPostPage = memo(() => {
    const { onLogout } = useLogout();
    const [name] = useAtom(username);

    return (
        <header className="h-20 bg-white flex justify-end items-center gap-x-5 px-20">
            <div className="flex items-center gap-x-2">
                <Image src={iconUser} alt="iconUser" />
                <p>{name}</p>
            </div>
            <button onClick={() => onLogout()}>Logout</button>
        </header>
    );
});

export default HeaderPostPage;
