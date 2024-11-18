import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import './Layout.styles.css';

export const Layout = () => {

  return (
    <>
      <div className="lg:container lg:mx-auto Layoutcustom ">
          <Navbar/>
          <Main/>
      </div>
    </>
  )
}
