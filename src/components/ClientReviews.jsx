import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import ClientReviewData from "./ClientReviewData";
import "./ClientReviewStyles.css"

const ClientReview = () => {
    return (
        <div className="ClientReview">
            <h1>Popular ClientReviews</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <ClientReviewData
            className="first-des"
            heading="Taal Valcano, Batangas"
            text="Navigating through Manila’s gridlock can be a daunting experience. Avoid the hassle with this exclusive door-to-door tour of Taal Volcano, a popular ClientReview in the Philippines, for groups of no more than 10. Enjoy a jeepney ride up to People’s Park in the Sky, an abandoned palace, visit the historic Aguinaldo Shrine, experience the thrill of a zipline, and marvel at a world-record jigsaw puzzle collection—all while leaving the stress of parking far behind."
            img1={Mountain1}
            img2={Mountain2}
            />

            <ClientReviewData
            className="first-des-reverse"
            heading="Mt.Daguldul, Batangas"
            text="A delightful trek in southern Batangas awaits at the coastal mountain of San Juan, Mt. Daguldul. The name 'Daguldul' or 'Daguldol' evokes a sense of grandeur and suspense, likely describing the impressive range and its steep slopes. This small mountain range is dotted with several 'gems'. Hikers are first greeted by a unique seascape along the initial beach trail. The moderate trail then winds through woodlands and light forests, offering a picturesque and varied hiking experience."
            img1={Mountain3}
            img2={Mountain4}
            />

            </div>
        )
    }

export default ClientReview