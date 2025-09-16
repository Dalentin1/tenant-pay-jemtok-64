import DashboardLayout from "../dashboard/[tenantId]/layout";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout userType="admin">{children}</DashboardLayout>;
}
