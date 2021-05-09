import { useEffect, useState } from 'react';

const Header = () => {
    const [move, setMove] = useState('center');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
    }, []);

    const handleScroll = (e) => {
        if (window.pageYOffset < 50) {
            setMove('center');
        }

        if (window.pageYOffset > 50 && window.pageYOffset < 250) {
            setMove('right');
        }

        if (window.pageYOffset > 250) {
            setMove('left');
        }
    };

    return (
        <div className='header'>
            <div className={`grid-3 title-move-${move} fade-out`}>
                <div>Ivo</div>
                <div className='white-border'></div>
                <div>Kalendarov</div>
            </div>
            <div className='grid-2 mt-3'>
                <div className='white-border slide-down'></div>
                <div className='slide-right'>
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <p>elit. Iure eos nisi quo tempore quod unde</p>
                    <p>fugit deleniti itaque maxime?</p>
                </div>
            </div>
            <div className='linear-maroon'></div>
            <div className='grid-2-reverse'>
                <div className='slide-left'>
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <p>elit. Iure eos nisi quo tempore quod unde</p>
                    <p>fugit deleniti itaque maxime?</p>
                </div>
                <div className='white-border slide-up'></div>
            </div>
        </div>
    );
};

export default Header;
