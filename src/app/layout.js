import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



export const metadata = {
  title: "Bookyourtable | Ultimate-Guide-to Local Restaurants and Hotels",
  description: "Looking for the perfect place to dine, host an event, or stay in your local area? At BOOKYOUTABLE, we provide a comprehensive directory of restaurants and hotels, helping you make informed decisions for every occasion. Whether you're in the mood for a cozy vegetarian meal, a delicious non-vegetarian dish, or a vibrant bar and restaurant experience, our platform has you covered.Explore a wide variety of restaurants offering different cuisines to match your preferences, from elegant fine dining spots for business meetings to lively venues perfect for a celebration or a party. We specialize in advanced booking services, so you can easily reserve your table for dinner, breakfast, or even special events such as birthdays, weddings, or corporate events.Need a venue for a business meeting, a small gathering, or a large-scale celebration? Our platform allows you to book rooms and dining spaces for all your needs. Whether you're planning an intimate meal, a grand party, or a professional business event, BOOKYOURTABLE makes it easier than ever to find the perfect spot and secure your reservation.Discover the best hotels for a comfortable stay, from luxury accommodations to budget-friendly options, all in one place. Use our service to browse, compare, and book your perfect hotel room, complete with amenities that meet your needs.",
  keywords:"hotel,vegeterian,non-vegeterian,dinner,business,celebration,party,restaurant near me,veg restaurant near me,non-veg restaurant near me,top 10 restaurant near me,restaurant for dinner near me,restaurant for Business meeting near me,restaurant for celebration near me,restaurant for party near me"
};

const poppinsRegular = localFont({
  src: './fonts/Poppins-Regular.ttf',
  variable: '--font-poppins-regular',
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppinsRegular.className}
      >
        <main className="">
          <Navbar/>
        {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
