import LeftImg from '../../assets/leftImg.png';
import RightImg from '../../assets/rightImg.png';


export default function Hero() {
    return (
        <div className='flex items-center justify-center bg-darkOrange bg-heroImg bg-center mx-800:h-[calc(100vh_-_92px)]'>
            <img src={LeftImg} alt='boy' className='mx-800:hidden' />
            <div className='relative flex-grow'>
                <h1 className='absolute mx-480:static top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl mx-480:text-3xl font-medium text-center mx-480:m-auto mx-480:transform-none'>Get 50%  Off on<br />Selected categories</h1>
            </div>
            <img src={RightImg} alt='boy' className='mx-800:hidden' />
        </div>
    );
}