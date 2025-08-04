import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { 
  Package, 
  AlertCircle, 
  CheckCircle,
  Search,
  Filter,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Clock
} from 'lucide-react';

export function InventoryManagement() {
  const inventoryItems = [
    {
      id: "IP15P",
      name: "iPhone 15 Pro",
      category: "Electronics",
      currentStock: 12,
      reorderPoint: 15,
      maxStock: 50,
      predictedDemand: 18,
      supplier: "Apple",
      lastRestock: "2 days ago",
      status: "critical",
      cost: 999.99,
      sellRate: 2.3
    },
    {
      id: "SPG24",
      name: "Samsung Galaxy S24",
      category: "Electronics",
      currentStock: 25,
      reorderPoint: 20,
      maxStock: 60,
      predictedDemand: 8,
      supplier: "Samsung",
      lastRestock: "5 days ago",
      status: "good",
      cost: 899.99,
      sellRate: 1.8
    },
    {
      id: "APP3",
      name: "AirPods Pro",
      category: "Electronics",
      currentStock: 4,
      reorderPoint: 10,
      maxStock: 40,
      predictedDemand: 12,
      supplier: "Apple",
      lastRestock: "1 day ago",
      status: "critical",
      cost: 249.99,
      sellRate: 3.2
    },
    {
      id: "MBA3",
      name: "MacBook Air M3",
      category: "Electronics",
      currentStock: 8,
      reorderPoint: 5,
      maxStock: 25,
      predictedDemand: 3,
      supplier: "Apple",
      lastRestock: "3 days ago",
      status: "good",
      cost: 1099.99,
      sellRate: 0.8
    },
    {
      id: "XPS13",
      name: "Dell XPS 13",
      category: "Electronics",
      currentStock: 15,
      reorderPoint: 8,
      maxStock: 30,
      predictedDemand: 6,
      supplier: "Dell",
      lastRestock: "4 days ago",
      status: "good",
      cost: 1199.99,
      sellRate: 1.2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'destructive';
      case 'low': return 'outline';
      case 'good': return 'outline';
      default: return 'outline';
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return (current / max) * 100;
  };

  const criticalItems = inventoryItems.filter(item => item.status === 'critical');
  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * item.cost), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Inventory Management</h2>
          <p className="text-muted-foreground">
            Real-time stock levels and AI-powered reorder suggestions
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
          <Button>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Generate Orders
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventoryItems.length}</div>
            <div className="text-sm text-muted-foreground">Active SKUs</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Critical Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{criticalItems.length}</div>
            <div className="text-sm text-muted-foreground">Need immediate attention</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Current stock value</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Avg. Stock Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">74%</div>
            <div className="text-sm text-green-600">Optimal range</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Critical Items Alert */}
      {criticalItems.length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-700">
              <AlertCircle className="h-5 w-5" />
              <span>Critical Stock Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {criticalItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.currentStock} units remaining (Reorder point: {item.reorderPoint})
                    </div>
                  </div>
                  <Button size="sm" variant="destructive">
                    Reorder Now
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Current Inventory</CardTitle>
          <CardDescription>
            Real-time stock levels with AI recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inventoryItems.map((item) => (
              <div key={item.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold">{item.name}</h3>
                    <Badge variant={getStatusColor(item.status)}>
                      {item.status === 'critical' && <AlertCircle className="h-3 w-3 mr-1" />}
                      {item.status === 'good' && <CheckCircle className="h-3 w-3 mr-1" />}
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm text-muted-foreground">
                      Sell Rate: {item.sellRate}/day
                    </div>
                    {item.sellRate > 2 ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-sm mb-3">
                  <div>
                    <div className="text-muted-foreground">Current Stock</div>
                    <div className="font-medium">{item.currentStock} units</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Predicted Demand</div>
                    <div className="font-medium">{item.predictedDemand} units</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Reorder Point</div>
                    <div className="font-medium">{item.reorderPoint} units</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Max Stock</div>
                    <div className="font-medium">{item.maxStock} units</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Supplier</div>
                    <div className="font-medium">{item.supplier}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Last Restock</div>
                    <div className="font-medium">{item.lastRestock}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Stock Level</span>
                    <span>{item.currentStock}/{item.maxStock}</span>
                  </div>
                  <Progress 
                    value={getStockPercentage(item.currentStock, item.maxStock)} 
                    className="h-2"
                  />
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t">
                  <div className="text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Estimated stock-out: {Math.floor(item.currentStock / item.sellRate)} days
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.currentStock < item.reorderPoint && (
                      <Button size="sm" variant="outline">
                        Auto-Reorder
                      </Button>
                    )}
                    <Button size="sm" variant="ghost">
                      View Details
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