import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import './page.css';

const Page = ({content}) => {
    return (
        <div className="page">
            <Header />
            <div className="content">
                {content}
            </div>
            <Footer />
        </div>
    );
}

export default Page;
