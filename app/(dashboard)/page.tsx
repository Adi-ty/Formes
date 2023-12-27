import { GetFormStats } from "@/actions/form";
import CreateFormBtn from "@/components/CreateFormBtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ReactNode, Suspense } from "react";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { LuView } from "react-icons/lu";
import { TbArrowBounce } from "react-icons/tb";

export default function Home() {
  return (
    <div className="container pt-4 ">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your Forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormBtn />
      </div>
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardsProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

function StatsCards(props: StatsCardsProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-rose-600" />}
        helperText="All time form visits"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-rose-600"
      />
      <StatsCard
        title="Total submissions"
        icon={<FaWpforms className="text-teal-600" />}
        helperText="All time form submissions"
        value={data?.submissions.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-teal-600"
      />
      <StatsCard
        title="Submission rate"
        icon={<HiCursorClick className="text-indigo-600" />}
        helperText="Visits that results in form submission"
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-indigo-600"
      />
      <StatsCard
        title="Bounce rate"
        icon={<TbArrowBounce className="text-pink-600" />}
        helperText="Visits that leaves without form submission"
        value={data?.bounceRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-pink-600"
      />
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
  helperText,
  loading,
  className,
}: {
  title: string;
  value: string;
  helperText: string;
  className: string;
  loading: boolean;
  icon: ReactNode;
}) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
      </CardContent>
    </Card>
  );
}
