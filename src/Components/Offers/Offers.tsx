import { Card } from '../../DesignSystem/Card/Card';
import offer1 from '../../assets/offer1.webp';
import offer2 from '../../assets/offer2.webp';
import offer3 from '../../assets/offer3.webp';
import offer4 from '../../assets/offer4.webp';
import styles from './offers.module.scss';

const titleOffer1 = 'Move the borders of reality!';
const subtitleOffer1 = "Go on a space adventure - it's possible with us!";
const titleOffer2 = 'Space is not just stars and planets';
const subtitleOffer2 = 'Go on a space adventure';
const titleOffer3 = 'For those who dream of stars';
const subtitleOffer3 = 'Our offer: make your dream come true';
const titleOffer4 = 'Fulfill your fantastic dreams';
const subtitleOffer4 = 'Space has never been so close';

const offers = [
  { title: titleOffer1, subtitle: subtitleOffer1, background: offer1 },
  { title: titleOffer2, subtitle: subtitleOffer2, background: offer2 },
  { title: titleOffer3, subtitle: subtitleOffer3, background: offer3 },
  { title: titleOffer4, subtitle: subtitleOffer4, background: offer4 },
];

export const Offers = () => {
  return (
    <div className={styles.offersBlock}>
      <div className={styles.offersTitle}> Offers</div>
      <div className={styles.offers}>
        {offers.map((offer) => (
          <Card
            key={offer.title}
            title={offer.title}
            subtitle={offer.subtitle}
            background={offer.background}
            className={styles.card}
          />
        ))}
      </div>
    </div>
  );
};
