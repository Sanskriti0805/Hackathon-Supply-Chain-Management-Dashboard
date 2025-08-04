import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Package, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  Clock,
  Users,
  BarChart3,
  Plus,
  Search,
  Calendar,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface DashboardProps {
  currentUser: any;
}

export function Dashboard({ currentUser }: DashboardProps) {
  const monthlyInward = [
    { month: 'Jan', count: 45, value: 125000 },
    { month: 'Feb', count: 38, value: 98000 },
    { month: 'Mar', count: 52, value: 156000 },
    { month: 'Apr', count: 41, value: 134000 },
    { month: 'May', count: 67, value: 203000 },
    { month: 'Jun', count: 59, value: 187000 },
  ];

  const monthlyOutward = [
    { month: 'Jan', count: 123, value: 87000 },
    { month: 'Feb', count: 145, value: 102000 },
    { month: 'Mar', count: 167, value: 145000 },
    { month: 'Apr', count: 134, value: 98000 },
    { month: 'May', count: 189, value: 167000 },
    { month: 'Jun', count: 156, value: 134000 },
  ];

  const criticalLowStock = [
    { name: 'ESP32-WROOM-32U', current: 2, threshold: 3, location: 'IC-Box-F4' },
    { name: 'Arduino Uno R3', current: 1, threshold: 1, location: 'DevBoard-Rack-I1' },
    { name: 'Raspberry Pi Zero W', current: 1, threshold: 1, location: 'DevBoard-Rack-I2' },
    { name: 'Tantalum Cap (10uF, 16V)', current: 18, threshold: 20, location: 'C-Bin-B3' },
    { name: 'MOSFET (IRF540N)', current: 8, threshold: 10, location: 'T-Tray-E2' },
  ];

  const oldStockItems = [
    { name: 'Raspberry Pi Zero W', days: 95, lastMovement: '2024-03-15', location: 'DevBoard-Rack-I2' },
    { name: 'Hook-up Wire (22AWG, Red)', days: 127, lastMovement: '2024-02-08', location: 'Cable-Bag-L2' },
    { name: 'Solder Wire (0.8mm)', days: 143, lastMovement: '2024-01-23', location: 'Misc-Shelf-N1' },
    { name: 'M3 Screws (10mm)', days: 98, lastMovement: '2024-03-12', location: 'Mech-Bin-M1' },
  ];

  const recentActivity = [
    { 
      id: 1, 
      type: 'outward', 
      user: 'Dr. Priya Sharma', 
      item: 'NE555 Timer IC', 
      quantity: 5, 
      project: 'Oscillator Circuit Testing',
      time: '2 hours ago' 
    },
    { 
      id: 2, 
      type: 'inward', 
      user: 'Mike Rodriguez', 
      item: 'Ceramic Cap (0.1uF, 50V)', 
      quantity: 200, 
      project: 'Stock Replenishment',
      time: '4 hours ago' 
    },
    { 
      id: 3, 
      type: 'outward', 
      user: 'Alex Thompson', 
      item: 'BC547 NPN Transistor', 
      quantity: 25, 
      project: 'Amplifier Prototype',
      time: '6 hours ago' 
    },
    { 
      id: 4, 
      type: 'inward', 
      user: 'Dr. Sarah Chen', 
      item: 'Arduino Uno R3', 
      quantity: 3, 
      project: 'Educational Kit Assembly',
      time: '1 day ago' 
    },
  ];

  const currentMonth = new Date().toLocaleString('default', { month: 'short' });
  const currentInward = monthlyInward[monthlyInward.length - 1];
  const currentOutward = monthlyOutward[monthlyOutward.length - 1];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Welcome back, {currentUser?.name?.split(' ')[0]}!</h2>
          <p className="text-muted-foreground">
            Here's what's happening in the lab today
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Quick Add Component
          </Button>
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Search Inventory
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,257</div>
            <div className="text-sm text-muted-foreground">Across 14 categories</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">{currentMonth} Inward</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentInward.count}</div>
            <div className="text-sm text-green-600">₹{currentInward.value.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">{currentMonth} Outward</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentOutward.count}</div>
            <div className="text-sm text-blue-600">₹{currentOutward.value.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Alerts Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{criticalLowStock.length}</div>
            <div className="text-sm text-muted-foreground">Require attention</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inward Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span>Monthly Inward Items</span>
            </CardTitle>
            <CardDescription>Components added to inventory over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyInward.map((month, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="font-medium w-8">{month.month}</div>
                    <div className="text-sm text-muted-foreground">{month.count} items</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Progress value={(month.count / 70) * 100} className="w-24 h-2" />
                    <div className="text-sm font-medium">₹{(month.value / 1000).toFixed(0)}k</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Outward Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingDown className="h-5 w-5 text-blue-500" />
              <span>Monthly Outward Items</span>
            </CardTitle>
            <CardDescription>Components used from inventory over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyOutward.map((month, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="font-medium w-8">{month.month}</div>
                    <div className="text-sm text-muted-foreground">{month.count} items</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Progress value={(month.count / 200) * 100} className="w-24 h-2" />
                    <div className="text-sm font-medium">₹{(month.value / 1000).toFixed(0)}k</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Critical Low Stock */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span>Critical Low Stock</span>
            </CardTitle>
            <CardDescription>Components below critical threshold</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {criticalLowStock.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-red-600">
                      {item.current}/{item.threshold}
                    </div>
                    <div className="text-xs text-muted-foreground">remaining</div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-3">
                <Package className="h-4 w-4 mr-2" />
                Generate Reorder List
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Old Stock Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-orange-500" />
              <span>Old Stock Alert</span>
            </CardTitle>
            <CardDescription>Items with no movement for 90+ days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {oldStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-orange-600">
                      {item.days} days
                    </div>
                    <div className="text-xs text-muted-foreground">idle</div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-3">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Full Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Recent Activity</span>
          </CardTitle>
          <CardDescription>Latest inventory transactions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                <div className="flex-shrink-0">
                  {activity.type === 'inward' ? (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <TrendingDown className="h-4 w-4 text-blue-600" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-sm">{activity.user}</span>
                    <Badge variant={activity.type === 'inward' ? 'default' : 'secondary'} className="text-xs">
                      {activity.type === 'inward' ? 'Added' : 'Used'}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {activity.quantity}x {activity.item}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {activity.project} • {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}