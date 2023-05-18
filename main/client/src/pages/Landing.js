import React from 'react'
import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
  <Wrapper>
    <nav>
        <Logo />
    </nav>
      <div className='container page'>

        <div className='info'>
          <h1>
            job <span>Tracking</span> app
          </h1>
          <p>
          Welcome to our job tracking app! 
          Our app is designed to help you stay up-to-date with the latest job market information 
          and assist you in creating a personalized job plan that aligns with your career goals. 
          With our user-friendly interface and comprehensive job tracking tools, 
          you'll have everything you need to navigate the job market with confidence.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
  </Wrapper>
  )
}

// const Wrapper = styled.main`
// nav{
//   width: var(--fluid-width);
//   max-width: var(--max-width);
//   margin: 0 auto;
//   height: var(--nav-height);
//   display: flex;
//   align-items: center;
// }
// .page{
//   // 设置指定元素的最小高度，100vh：视口高度的100%
//   // 元素的最小高度应该是视口高度减去导航栏的高度。
//   // 这样设置可以确保元素至少有足够的高度，以填满整个视口剩余的空间，并且不会被导航栏遮挡或溢出
//   min-height: calc(100vh - var(--nav-height));
//   display: grid;
//   align-items: center;
//   margin-top: -3rem;
// }
// h1{
//   font-weight: 700;
//   span{
//     // primary的第五个颜色
//     color: var(--primary-500);
//   }
// }
// p{
//   color: var(--grey-600);
// }
// .main-img{
//   display: none;
// }


// // media query when minimum width of a viewport is bigger than 992px
// @media (min-width:992px) {
//   .page{
//     // divides the child elements of the '.page' class into two col
//     grid-template-columns: 1fr 1fr;
//     // 3rem col gap
//     column-gap: 3rem;
//   }
//   .main-img{
//     // make this img into a block
//     display: block;
//   }

// }
// `



export default Landing