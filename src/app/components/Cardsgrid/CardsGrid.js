import Card from "@/app/components/Card/Card";

const CardsGrid = ({ cards }) => {
  
    return (
      <div>
        {/* <button onClick={handleGetData}>get album</button> */}
      <div className={`${styles["container"]} grid`}>
        {cards.map((cards, index) => (
          <div key={index} className={`col_4 col_mb_12`}> 
          <Card
            key={index}
            title={cards.title}
            image={cards.image}
            description={cards.description}
          />
          </div>
        ))}
      </div>
      </div>
    );
  };
  export default CardsGrid;