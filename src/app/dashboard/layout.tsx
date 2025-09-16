// This is a top-level layout for the /dashboard section.
// The specific tenant layout is now handled in /dashboard/[tenantId]/layout.tsx

export default function DashboardSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
