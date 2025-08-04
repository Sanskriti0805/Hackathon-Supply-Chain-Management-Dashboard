import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  Truck, 
  Users, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Brain,
  Store,
  Zap,
  ShoppingCart
} from 'lucide-react';

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <span>AI Agent Status</span>
            </CardTitle>
            <CardDescription>
              Your store's AI agent is analyzing demand patterns and optimizing inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">Store #4829</div>
                <div className="text-sm text-muted-foreground">Dallas, TX - Northeast</div>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600">
                <CheckCircle className="h-3 w-3 mr-1" />
                AI Agent Active
              </Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Model Accuracy</span>
                <span>94.2%</span>
              </div>
              <Progress value={94.2} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>Last Updated</span>
                <span>2 minutes ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Package className="h-4 w-4 mr-2" />
              Generate Reorder List
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="h-4 w-4 mr-2" />
              Check Nearby Stores
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Demand Forecast
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Today's Demand</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <div className="flex items-center space-x-1 text-sm text-green-600">
              <TrendingUp className="h-3 w-3" />
              <span>+12.5% vs yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Inventory Level</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <div className="flex items-center space-x-1 text-sm text-green-600">
              <CheckCircle className="h-3 w-3" />
              <span>Optimal range</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center space-x-2">
              <Truck className="h-4 w-4" />
              <span>Deliveries Today</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <div className="flex items-center space-x-1 text-sm text-blue-600">
              <Clock className="h-3 w-3" />
              <span>2 pending</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Inter-Store Transfers</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Active requests</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts and Notifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              <span>Priority Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
              <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
              <div>
                <div className="font-medium">Low Stock Alert</div>
                <div className="text-sm text-muted-foreground">
                  iPhone 15 Pro - Only 3 units left. Reorder recommended.
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <Clock className="h-4 w-4 text-blue-500 mt-0.5" />
              <div>
                <div className="font-medium">Delivery Delayed</div>
                <div className="text-sm text-muted-foreground">
                  Warehouse shipment #WH-2024-001 delayed by 2 hours.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Recent Successes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <div>
                <div className="font-medium">Demand Prediction Accurate</div>
                <div className="text-sm text-muted-foreground">
                  97% accuracy for yesterday's holiday rush forecast.
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <Store className="h-4 w-4 text-green-500 mt-0.5" />
              <div>
                <div className="font-medium">Inter-Store Transfer Complete</div>
                <div className="text-sm text-muted-foreground">
                  Received 50 units of AirPods from Store #4831.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Performance */}
      <Card>
        <CardHeader>
          <CardTitle>System Performance</CardTitle>
          <CardDescription>
            Real-time monitoring of AI agent performance and system health
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Demand Forecasting</span>
                <span>94.2%</span>
              </div>
              <Progress value={94.2} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Inventory Optimization</span>
                <span>89.7%</span>
              </div>
              <Progress value={89.7} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Delivery Routing</span>
                <span>96.1%</span>
              </div>
              <Progress value={96.1} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}