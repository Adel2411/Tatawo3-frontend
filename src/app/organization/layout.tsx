import ProtectedLayout from "@/components/ProtectedLayout";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function OrganizationLayout({ children }: DashboardLayoutProps) {
  return (
    <ProtectedLayout title="Organization Dashboard" mode="organization">
      {children}
    </ProtectedLayout>
  );
}
