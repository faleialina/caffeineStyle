import styled, { createGlobalStyle } from 'styled-components'
import coffee from './assets/CoffeeGrains.png'
import badge from './assets/badge.png'
import best_price from './assets/bestprice.png'
import img from './assets/coffeeImage.png'
import coffeeMenu1 from './assets/coffeeMenu1.svg'
import coffeeMenu2 from './assets/coffeeMenu2.svg'
import coffeeMenu3 from './assets/coffeeMenu3.svg'
import coffeeMenu4 from './assets/coffeeMenu4.svg'
import coffee_beans from './assets/coffeebeans.png'
import coffee_cup from './assets/coffeecup.png'
import Header from './components/Header'

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
]

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
]

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-style:normal;
    color:#707070;
    font-family:'Playfair Display';
    font-weight:400;
    font-size: 20px;
    }

  body {
    background-color: 'red';
  }
  button {
    background-color:transparent;
    border-width: 0;
  }
  `
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
		padding: 5%;
		max-width: 1220px;
		p {
			font-family: Playfair Display;
			font-size: 22px;
			font-weight: 500;
			color: #ffffff;
			max-width: 527px;
		}

		h1 {
			max-width: 527px;
			font-family: Clicker Script;
			font-size: 220px;
			font-weight: 400;
			color: #ffffff;
		}
	}
`
const CoffeeDiscovery = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1180px;
	margin: auto;
	gap: 90px;
	.content {
		display: flex;
		flex-direction: column;
		gap: 29px;

		h2 {
			font-family: Playfair Display;
			font-size: 54px;
			font-weight: 700;
			color: #603809;
		}
		p {
			font-family: Playfair Display;
			font-size: 20px;
			font-weight: 400;
			color: #707070;
		}
	}
`
const Menu = styled.div`
	max-width: 1220px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;

	h2 {
		font-family: 'Playfair Display';
		font-size: 54px;
		font-weight: 700;
		color: #603809;
	}

	p {
		font-family: 'Playfair Display';
		font-size: 20px;
		font-weight: 400;
		color: #603809;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: row;
		gap: 30px;
		flex-wrap: wrap;

		.item {
			background-color: #fff9f1;
			border: 1px solid #f9c06a;
			max-width: 280px;
			max-height: 364px;

			.itemInfo {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 8px;
				padding: 14px 0 42px;

				h3 {
					font-family: 'Playfair Display';
					font-size: 22px;
					font-weight: 600;
					color: #603809;
				}

				p {
					font-family: 'Playfair Display';
					font-size: 16px;
					font-weight: 400;
					color: #1e1e1e;
				}

				.price {
					font-family: 'Playfair Display';
					font-size: 18px;
					font-weight: 700;
					color: #603809;
				}
			}
		}
	}
`

const Button = styled.button`
	display: block;
	border: none;
	background: #f9c06a;
	padding: 14px 27px;
	border-radius: 24px;
	color: #1e1e1e;
	max-width: 155px;
	font-family: 'Playfair Display';
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
`

const Advantages = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 82px auto;
	gap: 20px;

	h2 {
		font-family: Playfair Display;
		font-size: 54px;
		font-weight: 700;
		color: #603809;
	}

	p {
		font-family: Playfair Display;
		font-size: 20px;
		font-weight: 400;
		color: #707070;
	}

	.advantages_content {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;

		.advantages_card {
			border: 1px solid #f9c06a6b;
			max-width: 280px;
			height: 284px;
			text-align: center;
			background: #fff9f1;
			padding: 36px 43px;

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
				font-family: Playfair Display;
				font-size: 22px;
				font-weight: 700;
				color: #603809;
				margin: 25px auto 8px;
			}
		}
	}
	.important {
		font-family: Playfair Display;
		font-size: 20px;
		font-weight: 700;
		color: #603809;
	}
`

const App = () => {
	return (
		<>
			<Global />
			<BackgroundPreview>
				<Header />
				<div className='landing'>
					<p>We’ve got your morning covered with</p>
					<h1>Coffee</h1>
					<p>
						It is best to start your day with a cup of coffee. Discover the best
						flavours coffee you will ever have. We provide the best for our
						customers.
					</p>
					<button className='button'>Order Now</button>
				</div>
			</BackgroundPreview>
			<CoffeeDiscovery>
				<div className='content'>
					<h2>Discover the best coffee</h2>
					<p>
						Bean Scene is a coffee shop that provides you with quality coffee
						that helps boost your productivity and helps build your mood. Having
						a cup of coffee is good, but having a cup of real coffee is greater.
						There is no doubt that you will enjoy this coffee more than others
						you have ever tasted.
					</p>
					<button className='button'>Order Now</button>
				</div>
				<div>
					<img src={coffee} alt='coffee' />
				</div>
			</CoffeeDiscovery>
			<Menu>
				<h2>Enjoy a new blend of coffee style</h2>
				<p>
					Explore all flavours of coffee with us. There is always a new cup
					worth experiencing.
				</p>
				<div className='content'>
					{coffies.map((el, index) => (
						<div key={index} className='item'>
							<div>
								<img src={el.img} alt='coffee' />
							</div>
							<div className='itemInfo'>
								<h3>{el.title}</h3>
								<p>{el.description}</p>
								<p className='price'>{el.price}</p>
								<Button>Order Now</Button>
							</div>
						</div>
					))}
				</div>
			</Menu>
			<Advantages>
				<h2>Why are we different?</h2>
				<p>We don’t just make your coffee, we make your day!</p>
				<div className='advantages_content'>
					{advantages.map(el => (
						<div className='advantages_card' key={el.id}>
							<img src={el.icon} alt='' />
							<h3>{el.title}</h3>
							<p>{el.description}</p>
						</div>
					))}
				</div>
				<p>Great ideas start with great coffee, Lets help you achieve that</p>
				<p className='important'>Get started today.</p>
				<Button>Join Us</Button>
			</Advantages>
		</>
	)
}

export default App
