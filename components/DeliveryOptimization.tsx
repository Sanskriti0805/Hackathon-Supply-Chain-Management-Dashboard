import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Truck, 
  MapPin, 
  Clock,
  Route,
  Package,
  AlertCircle,
  CheckCircle,
  Navigation,
  Fuel,
  Timer,
  BarChart3
} from 'lucide-react';

export function DeliveryOptimization() {
  const activeDeliveries = [
    {
      id: "WH-2024-001",
      driver: "John Martinez",
      truck: "TR-001",
      route: "Warehouse A → Store #4829",
      items: 15,
      totalWeight: "2,450 lbs",
      estimatedArrival: "3:15 PM",
      currentLocation: "I-35 & Belt Line Rd",
      progress: 75,
      fuelEfficiency: "6.2 mpg",
      co2Saved: "12 lbs",
      status: "on_time"
    },
    {
      id: "WH-2024-002",
      driver: "Sarah Wilson",
      truck: "TR-003",
      route: "Warehouse B → Store #4829",
      items: 8,
      totalWeight: "1,200 lbs",
      estimatedArrival: "4:45 PM",
      currentLocation: "Warehouse B - Loading",
      progress: 15,
      fuelEfficiency: "7.1 mpg",
      co2Saved: "8 lbs",
      status: "loading"
    }
  ];

  const optimizedRoutes = [
    {
      id: "RT-001",
      name: "Multi-Store Route A",
      stores: ["#4829", "#4831", "#4832"],
      distance: "24.6 miles",
      estimatedTime: "2h 15m",
      fuelCost: "$8.50",
      co2Emissions: "18 lbs",
      optimization: "32% reduction",
      deliveryWindow: "2:00 PM - 6:00 PM"
    },
    {
      id: "RT-002",
      name: "Express Route B",
      stores: ["#4829", "#4833"],
      distance: "12.3 miles",
      estimatedTime: "1h 05m",
      fuelCost: "$4.25",
      co2Emissions: "9 lbs",
      optimization: "28% reduction",
      deliveryWindow: "1:00 PM - 3:00 PM"
    }
  ];

  const warehouseSchedule = [
    {
      id: "WS-001",
      warehouse: "Distribution Center A",
      scheduledTime: "2:30 PM",
      items: ["iPhone 15 Pro (10)", "AirPods Pro (25)", "Samsung Galaxy S24 (15)"],
      priority: "high",
      estimatedPrep: "45 min",
      truckAssigned: "TR-002",
      status: "preparing"
    },
    {
      id: "WS-002",
      warehouse: "Distribution Center B",
      scheduledTime: "4:00 PM",
      items: ["MacBook Air M3 (5)", "Dell XPS 13 (8)", "iPad Pro (12)"],
      priority: "medium",
      estimatedPrep: "30 min",
      truckAssigned: "TR-004",
      status: "scheduled"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Delivery Optimization</h2>
          <p className="text-muted-foreground">
            AI-powered route planning and warehouse coordination
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="text-green-600 border-green-600">
            <Route className="h-3 w-3 mr-1" />
            Routes Optimized
          </Badge>
          <Button variant="outline">
            <Navigation className="h-4 w-4 mr-2" />
            Plan New Route
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Active Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeDeliveries.length}</div>
            <div className="text-sm text-muted-foreground">En route</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Avg. Delivery Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1h 45m</div>
            <div className="text-sm text-green-600">15% faster</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Fuel Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8 mpg</div>
            <div className="text-sm text-green-600">+12% vs last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">CO₂ Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247 lbs</div>
            <div className="text-sm text-green-600">This week</div>
          </CardContent>
        </Card>
      </div>

      {/* Active Deliveries */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Truck className="h-5 w-5" />
            <span>Active Deliveries</span>
          </CardTitle>
          <CardDescription>
            Real-time tracking of incoming deliveries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeDeliveries.map((delivery) => (
              <div key={delivery.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-blue-500" />
                    <div>
                      <h3 className="font-semibold">{delivery.driver}</h3>
                      <p className="text-sm text-muted-foreground">
                        {delivery.truck} • {delivery.route}
                      </p>
                    </div>
                  </div>
                  <Badge 
                    variant={delivery.status === 'on_time' ? 'outline' : 'secondary'}
                    className={delivery.status === 'on_time' ? 'text-green-600 border-green-600' : ''}
                  >
                    {delivery.status === 'on_time' ? 'On Time' : 'Loading'}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-3">
                  <div>
                    <div className="text-muted-foreground">Items</div>
                    <div className="font-medium">{delivery.items} packages</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Weight</div>
                    <div className="font-medium">{delivery.totalWeight}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">ETA</div>
                    <div className="font-medium">{delivery.estimatedArrival}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Fuel Efficiency</div>
                    <div className="font-medium">{delivery.fuelEfficiency}</div>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{delivery.progress}%</span>
                  </div>
                  <Progress value={delivery.progress} className="h-2" />
                  <div className="text-sm text-muted-foreground">
                    Current location: {delivery.currentLocation}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Fuel className="h-4 w-4 mr-1" />
                      CO₂ saved: {delivery.co2Saved}
                    </span>
                  </div>
                  <Button size="sm" variant="outline">
                    Track Delivery
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Optimized Routes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Route className="h-5 w-5" />
            <span>Optimized Routes</span>
          </CardTitle>
          <CardDescription>
            AI-generated routes for maximum efficiency
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {optimizedRoutes.map((route) => (
              <div key={route.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{route.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Stores: {route.stores.join(' → ')}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <BarChart3 className="h-3 w-3 mr-1" />
                    {route.optimization}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm mb-3">
                  <div>
                    <div className="text-muted-foreground">Distance</div>
                    <div className="font-medium">{route.distance}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Time</div>
                    <div className="font-medium">{route.estimatedTime}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Fuel Cost</div>
                    <div className="font-medium">{route.fuelCost}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">CO₂ Emissions</div>
                    <div className="font-medium">{route.co2Emissions}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Delivery Window</div>
                    <div className="font-medium">{route.deliveryWindow}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-sm text-muted-foreground">
                    Route ID: {route.id}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      View Map
                    </Button>
                    <Button size="sm">
                      Assign Truck
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Warehouse Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5" />
            <span>Warehouse Schedule</span>
          </CardTitle>
          <CardDescription>
            Scheduled pickups and deliveries from distribution centers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {warehouseSchedule.map((schedule) => (
              <div key={schedule.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{schedule.warehouse}</h3>
                    <p className="text-sm text-muted-foreground">
                      Scheduled: {schedule.scheduledTime}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={schedule.priority === 'high' ? 'destructive' : 'outline'}
                      className={schedule.priority === 'high' ? '' : 'text-orange-600 border-orange-600'}
                    >
                      {schedule.priority.charAt(0).toUpperCase() + schedule.priority.slice(1)} Priority
                    </Badge>
                    <Badge 
                      variant={schedule.status === 'preparing' ? 'default' : 'outline'}
                      className={schedule.status === 'preparing' ? 'bg-blue-100 text-blue-700' : ''}
                    >
                      {schedule.status === 'preparing' ? 'Preparing' : 'Scheduled'}
                    </Badge>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-sm text-muted-foreground mb-1">Items to deliver:</div>
                  <div className="text-sm">
                    {schedule.items.join(', ')}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-3">
                  <div>
                    <div className="text-muted-foreground">Prep Time</div>
                    <div className="font-medium">{schedule.estimatedPrep}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Truck</div>
                    <div className="font-medium">{schedule.truckAssigned}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Status</div>
                    <div className="font-medium">
                      {schedule.status === 'preparing' ? 'In Preparation' : 'Scheduled'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-sm text-muted-foreground">
                    <Timer className="h-4 w-4 inline mr-1" />
                    Schedule ID: {schedule.id}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      Contact Warehouse
                    </Button>
                    <Button size="sm" variant="outline">
                      Modify Schedule
                    </Button>
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