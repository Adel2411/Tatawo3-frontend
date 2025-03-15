import ProtectedLayout from "@/components/ProtectedLayout";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function VolunteerLayout({ children }: DashboardLayoutProps) {
  return (
    <ProtectedLayout title="Volunteer Dashboard" mode="volunteer">
      {children}
    </ProtectedLayout>
  );
}
