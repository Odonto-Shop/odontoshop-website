import styled from 'styled-components'
import { Link } from 'gatsby'

export const Navigation = styled.div`
  display: flex;
  background-color: var(--highlight);
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  z-index: 2;
  align-self: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

export const Toggle = styled.div`
  display: none;
  height: 4.75rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Navbox = styled.div`
  display: flex;
  height: 4.75rem;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    padding-top: 4.75rem;
    background-color: var(--highlight);
    transition: all 0.3s ease-in;
    top: 4.75rem;
    left: ${props => (props.open ? '-100%' : '0')};
  }
`

export const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`

export const MenuList = styled.ul`
  @media (min-width: 769px) {
    display: flex;
    height: 100%;

    li {
      display: flex;
      align-items: center;
    }
  }
`

export const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.8px;

  &.active {
    ::after {
      width: 100%;
    }
  }

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: #fff;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #fff;

    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
