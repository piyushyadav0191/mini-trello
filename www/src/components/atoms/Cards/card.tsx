
import CardItem from './card-item';
import first from "./1.svg"
import second from "./2.svg"
import third from "./3.svg"

function Card() {
  const cardsData = [
    
    {
      image: first,
      title: 'Introducing tags',
      description: 'Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.',
    },
    {
      image: second,
      title: 'Share Notes Instantly',
      description: 'Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.',
    },
    {
      image: third,
      title: 'Access Anywhere',
      description: 'Sync your notes across all devices. Stay productive whether youre on your phone, tablet, or computer.',
    },
  ];

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <CardItem
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default Card;
