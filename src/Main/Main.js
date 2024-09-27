import okCircle from './icon/ok-circle.svg';
import Styled from './main.modyle.css';

export function Main () {
  return (
      <div className={Styled['container']}>
          <button className={Styled['container__button']}>
              Click on me
              <img src={okCircle} />
          </button> 
      </div>
  );
}