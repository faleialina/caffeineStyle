import { useState } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  isOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
  margin: auto;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    padding: 2%;
  }

  h1 {
    font: 400 35px 'Clicker Script';
    color: #ffffff;

    @media (max-width: 900px) {
      font: 300 28px 'Clicker Script';
    }
  }

  button:first-child {
    display: block;
    color: #ffffff;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .btn_active {
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
  }

  .container {
    display: flex;
    gap: 35px;
  }

  .navigation {
    display: flex;
    gap: 60px;

    @media (max-width: 900px) {
      gap: 30px;
    }

    p {
      color: #ffffff;
    }
  }

  ul {
    display: flex;
    gap: 60px;
    list-style-type: none;
    padding: 0;
  }

  .burger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;

    div {
      width: 25px;
      height: 3px;
      background: white;
      margin: 4px 0;
    }

    @media (max-width: 700px) {
      display: flex;
    }
  }

  .menu {
    display: flex;
    gap: 60px;
    align-items: center;

    @media (max-width: 900px) {
      gap: 20px;
    }

    @media (max-width: 700px) {
      display: ${props => (props.isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 70px;
      background-color: #333;
      width: 100%;
      left: 0;
      padding: 20px 0;
    }
  }
`;

const Header = () => {
  const nav = ['Home', 'Menu', 'About Us', 'Contact Us'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <h1>Caffeine</h1>
      <div className="burger" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div className="navigation">
        <ul className={`menu ${isOpen ? 'active' : ''}`}>
          {nav.map(el => (
            <li key={el}>
              <p>{el}</p>
            </li>
          ))}
          <li>
            <button>Sign In</button>
          </li>
          <li>
            <button className="btn_active">Sign Up</button>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Header;
