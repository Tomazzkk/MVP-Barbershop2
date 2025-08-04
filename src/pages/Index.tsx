import AnimatedPage from "@/components/AnimatedPage";
import { HomeHeader } from "@/components/home/HomeHeader";
import { BookingCard } from "@/components/home/BookingCard";
import { QuickActions } from "@/components/home/QuickActions";
import { RecommendedBarbers } from "@/components/home/RecommendedBarbers";
import { RecentActivity } from "@/components/home/RecentActivity";
import { FidelityCard } from "@/components/home/FidelityCard";

const Index = () => {
  return (
    <AnimatedPage>
      <HomeHeader />
      <div className="space-y-8 pb-8">
        <BookingCard />
        <QuickActions />
        <RecommendedBarbers />
        <RecentActivity />
        <FidelityCard />
      </div>
    </AnimatedPage>
  );
};

export default Index;