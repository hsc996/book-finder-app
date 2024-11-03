import { Footer } from "../components/Footer";
import SearchPage from "../components/SearchPage";
import { Header } from "../components/Header";

export default function HomePage({books}){
    return(
        <div>
            <Header />
            <SearchPage />
            <Footer />
        </div>
    )
}