import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import coffee from './assets/CoffeeGrains.png';
import avatar from './assets/avatar.png';
import badge from './assets/badge.png';
import best_price from './assets/bestprice.png';
import caffeBkg from './assets/caffeBkg.png';
import img from './assets/coffeeImage.png';
import coffeeMenu1 from './assets/coffeeMenu1.svg';
import coffeeMenu2 from './assets/coffeeMenu2.svg';
import coffeeMenu3 from './assets/coffeeMenu3.svg';
import coffeeMenu4 from './assets/coffeeMenu4.svg';
import coffee_beans from './assets/coffeebeans.png';
import coffee_cup from './assets/coffeecup.png';
import cup from './assets/cup.png';
import leftArrow from './assets/leftArrow.png';
import quotes from './assets/quotes.png';
import rightArrow from './assets/rightArrow.png';
import Footer from './components/Footer';
import Header from './components/Header';

const coffies = [
  {
    id: 1,
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu4,
  },
  {
    id: 2,
    title: 'Chai Latte',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu3,
  },
  {
    id: 3,
    title: 'Macchiato',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu2,
  },
  {
    id: 4,
    title: 'Expresso',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu1,
  },
];
const slidesObj = [
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'Project Manager',
    name: 'Jonny Thomas',
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'Designer',
    name: 'Tom Doe',
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'Developer',
    name: 'John Smith',
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'Marketing Manager',
    name: 'Sara Lee',
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'CEO',
    name: 'Michael Johnson',
  },
];

const advantages = [
  {
    id: 1,
    title: 'Supreme Beans',
    description: 'Beans that provides great taste',
    icon: coffee_beans,
  },
  {
    id: 2,
    title: 'High Quality',
    description: 'We provide the highest quality',
    icon: badge,
  },
  {
    id: 3,
    title: 'Extraordinary',
    description: 'Coffee like you have never tasted',
    icon: coffee_cup,
  },
  {
    id: 4,
    title: 'Affordable Price',
    description: 'Our Coffee prices are easy to afford',
    icon: best_price,
  },
];

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-style:normal;
    color:#707070;
    font: 400 20px 'Playfair Display';
    }

  body {
    background-color: 'red';
  }
  button {
    background-color:transparent;
    border-width: 0;
  }
  `;
const BackgroundPreview = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .landing {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    padding: 5% 0;
    max-width: 1220px;

    @media (max-width: 900px) {
      padding: 5%;
    }

    p {
      font: 500 22px 'Playfair Display';
      color: #ffffff;
      max-width: 527px;
    }

    h1 {
      max-width: 527px;
      font: 400 220px 'Clicker Script';
      color: #ffffff;

      @media (max-width: 900px) {
        font: 400 180px 'Clicker Script';
      }
      @media (max-width: 400px) {
        font: 300 120px 'Clicker Script';
      }
    }
  }
`;
const CoffeeDiscovery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1180px;
  margin: auto;
  gap: 90px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    padding: 2%;
    gap: 50px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 29px;

    @media (max-width: 600px) {
      text-align: center;
      align-items: center;
    }

    h2 {
      font: 700 54px Playfair Display;
      color: #603809;
    }

    p {
      font: 400 20px Playfair Display;
      color: #707070;
    }

    .button {
      background: #f9c06a;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1e1e1e;
      max-width: 134px;
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    .img_coffee {
      width: 90%;
      height: 90%;
    }
  }
  @media (max-width: 400px) {
    .img_coffee {
      width: 100%;
      height: 100%;
    }
  }
`;

const Menu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 82px auto 0;
  gap: 24px;

  @media (max-width: 900px) {
    padding: 2%;
  }

	h2 {
	  font: 700 54px 'Playfair Display';
		color: #603809;

    @media (max-width: 600px) {
      text-align: center;
      font: 700 36px 'Playfair Display';
    }
	}

	p {
    font: 400 20px 'Playfair Display';
		color: #707070;
	}

	.content {
		display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    @media (max-width: 1200px) {
      gap: 50px;
    }

		.item {
			background-color: #fff9f1;
			border: 1px solid #f9c06a;
			max-width: 280px;
			max-height: 364px;
			transition: transform 0.3s ease;
			&:hover {
				transform: scale(1.1);
				cursor: default
			}

		}

			.itemInfo {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 8px;
				padding: 14px 0 42px;
				

				h3 {
          font: 600 22px 'Playfair Display';
					color: #603809;
				}

				p {
          font: 400 16px 'Playfair Display';
					color: #1e1e1e;
				}

				.price {
          font: 700 18px 'Playfair Display';
					color: #603809;
				}
			}
		}
	}
`;

const Button = styled.button`
  display: block;
  border: none;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color: #1e1e1e;
  max-width: 155px;
  font: 700 16px 'Playfair Display';
  cursor: pointer;
`;

const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 82px auto;
  gap: 20px;

  h2 {
    font: 700 54px 'Playfair Display';
    color: #603809;

    @media (max-width: 600px) {
      text-align: center;
      font: 700 36px 'Playfair Display';
    }
  }

  p {
    font: 400 20px 'Playfair Display';
    color: #707070;
  }

  .advantages_content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .advantages_card {
      border: 1px solid #f9c06a6b;
      max-width: 280px;
      height: 284px;
      text-align: center;
      background: #fff9f1;
      padding: 36px 43px;
      transition: transform 0.3s ease;

      &:hover {
        background-color: #ffeed8;
        transform: scale(1.1);
        cursor: default;
      }

      .coffee_beans,
      .badge,
      .coffee_cup,
      .best_price {
        width: 88px;
        height: 88px;
        background-size: contain;
        background-repeat: no-repeat;
      }

      h3 {
        font: 700 22px 'Playfair Display';
        color: #603809;
        margin: 25px auto 8px;
      }
    }
  }
  .important {
    font: 700 20px 'Playfair Display';
    color: #603809;
  }
`;
const SectionMorning = styled.div`
  background-image: url(${caffeBkg});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  .wrapperMorning {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 5% 93px;
    max-width: 1366px;
    flex-wrap: wrap;

    @media (max-width: 400px) {
      padding: 5%;
    }

    .wrapperLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 575px;
      gap: 22px;
      h1 {
        font: 700 54px 'Playfair Display';
        color: #ffffff;

        @media (max-width: 900px) {
          font-size: 40px;
        }
      }
      p {
        font: 400 20px 'Playfair Display';
        color: #ffffff;
      }
    }
    .wrapperRight {
      background-image: url(${cup});
      width: 300px;
      height: 467px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
const Feedback = styled.div`
  padding: 82px 152px;
  margin: auto;
  max-width: 1366px;

  @media (max-width: 1000px) {
    padding: 82px 70px;
  }

  @media (max-width: 500px) {
    padding: 30px;
  }

  h2 {
    font: 700 54px 'Playfair Display';
    color: #603809;
    margin-bottom: 16px;
    text-align: center;
  }
  p {
    font: 400 20px 'Playfair Display';
    color: #707070;
    text-align: center;
  }
  .leftArrow,
  .rightArrow {
    width: 82px;
    padding: 29px;
    border-radius: 16px;
    background: #f9c06a;
    position: absolute;
    top: 220px;

    @media (max-width: 500px) {
      padding: 20px;
      width: 70px;
    }
  }

  .rightArrow {
    right: -50px;

    @media (max-width: 500px) {
      right: -30px;
    }
  }
  .leftArrow {
    left: -50px;

    @media (max-width: 500px) {
      left: -30px;
    }
  }

  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    border: 1px solid #f9c06a6b;
    background: #fff9f1;
    margin-top: 45px;
    height: 524px;

    .quotes {
      position: absolute;
      top: 50px;
      left: 30px;

      @media (max-width: 900px) {
        width: 10%;
        height: 10%;
        top: 0px;
        left: 10px;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 129px 100px 101px;
      gap: 30px;

      @media (max-width: 900px) {
        padding: 50px 30px 30px;
      }

      p {
        font: 600 18px 'Playfair Display';
        color: #707070;
        line-height: 36px;

        @media (max-width: 800px) {
          font: 400 12px 'Playfair Display';
        }
      }
      h3 {
        font: 700 32px 'Playfair Display';
        color: #603809;
        text-align: center;
        @media (max-width: 800px) {
          font: 400 16px 'Playfair Display';
        }
      }
    }
    .avatar {
      position: absolute;
      bottom: -100px;
    }
  }
`;

const App = () => {
  const [count, setCount] = useState(0);
  const nextSlide = () => {
    setCount(count === slidesObj.length - 1 ? 0 : count + 1);
  };

  const lastSlide = () => {
    setCount(count === 0 ? slidesObj.length - 1 : count - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <>
      <Global />
      <BackgroundPreview>
        <Header />
        <div className="landing">
          <p>We’ve got your morning covered with</p>
          <h1>Coffee</h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <button className="button">Order Now</button>
        </div>
      </BackgroundPreview>
      <CoffeeDiscovery>
        <div className="content">
          <h2>Discover the best coffee</h2>
          <p>
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a
            cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you
            have ever tasted.
          </p>
          <Button>Order Now</Button>
        </div>
        <div>
          <img className="img_coffee" src={coffee} alt="coffee" width={500} height={484} />
        </div>
      </CoffeeDiscovery>
      <Menu>
        <h2>Enjoy a new blend of coffee style</h2>
        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
        <div className="content">
          {coffies.map((el, index) => (
            <div key={index} className="item">
              <div>
                <img src={el.img} alt="coffee" />
              </div>
              <div className="itemInfo">
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <p className="price">{el.price}</p>
                <Button>Order Now</Button>
              </div>
            </div>
          ))}
        </div>
      </Menu>
      <Advantages>
        <h2>Why are we different?</h2>
        <p>We don’t just make your coffee, we make your day!</p>
        <div className="advantages_content">
          {advantages.map(el => (
            <div className="advantages_card" key={el.id}>
              <img src={el.icon} alt="icon" />
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
        <p>Great ideas start with great coffee, Lets help you achieve that</p>
        <p className="important">Get started today.</p>
        <Button>Join Us</Button>
      </Advantages>
      <SectionMorning>
        <div className="wrapperMorning">
          <div className="wrapperLeft">
            <h1>Get a chance to have an Amazing morning</h1>
            <p className="textPreview">We are giving you are one time opportunity to experience a better life with coffee.</p>
            <Button>Order Now</Button>
          </div>
          <div className="wrapperRight"></div>
        </div>
      </SectionMorning>
      <Feedback>
        <h2>Our coffee perfection feedback</h2>
        <p>Our customers has amazing things to say about us</p>
        <div className="slider">
          <img className="quotes" src={quotes} alt="quotes" />
          <div className="leftArrow" onClick={() => nextSlide()}>
            <img src={leftArrow} alt="arrow" />
          </div>
          <div className="text">
            <p>{slidesObj[count].description}</p>
            <h3>{slidesObj[count].name}</h3>
            <p>{slidesObj[count].position}</p>
            <img className="avatar" src={avatar} alt="avatar" />
          </div>
          <div className="rightArrow" onClick={() => lastSlide()}>
            <img src={rightArrow} alt="arrow" />
          </div>
        </div>
      </Feedback>
      <Footer />
    </>
  );
};

export default App;
