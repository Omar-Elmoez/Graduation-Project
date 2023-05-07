import LeftImg from '../../assets/leftImg.png';
// import Icons from '../../assets/heroIcons.png';
import RightImg from '../../assets/rightImg.png';
import './Hero.css';

export default function Hero() {
    return (
        <div className='heroBx'>
            <img src={LeftImg} alt='boy' />
            <div className='heroBx__info'>
                {/* <img src={Icons} alt='some random icons'/> */}
                <h1 className='heroBx__heading'>Get 50%  Off on<br />Selected categories</h1>
            </div>
            <img src={RightImg} alt='boy' />
        </div>
    );
}