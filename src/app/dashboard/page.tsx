import { AnalyticsDashboard } from '../dashboard/components/AnalyticsDashboard';
import ExpirationTracking from '../dashboard/components/ExpirationTracking'; // Corrected import
import InventoryManagement from '../dashboard/components/InventoryManagement';
import Weather from '../dashboard/components/Weather';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Farm Management Dashboard</h1>
      <AnalyticsDashboard />
      <InventoryManagement />
      <ExpirationTracking />
      <Weather />
    </div>
  );
}
