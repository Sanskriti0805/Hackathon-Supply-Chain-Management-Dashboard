import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { 
  Users, 
  Store, 
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Package,
  Truck,
  Phone,
  MessageCircle
} from 'lucide-react';

export function InterStoreCollaboration() {
  const nearbyStores = [
    {
      id: "4831",
      name: "Walmart Supercenter - Plano",
      distance: "2.3 miles",
      travelTime: "8 min",
      manager: "Sarah Johnson",
      phone: "(972) 555-0123",
      status: "online",
      availableItems: 15,
      lastContact: "1 hour ago",
      successRate: 94
    },
    {
      id: "4832",
      name: "Walmart Neighborhood Market - Richardson",
      distance: "3.7 miles",
      travelTime: "12 min",
      manager: "Mike Chen",
      phone: "(972) 555-0456",
      status: "online",
      availableItems: 8,
      lastContact: "30 min ago",
      successRate: 91
    },
    {
      id: "4833",
      name: "Walmart Supercenter - Garland",
      distance: "5.1 miles",
      travelTime: "15 min",
      manager: "Lisa Rodriguez",
      phone: "(972) 555-0789",
      status: "offline",
      availableItems: 22,
      lastContact: "3 hours ago",
      successRate: 89
    },
    {
      id: "4834",
      name: "Walmart Supercenter - Mesquite",
      distance: "6.8 miles",
      travelTime: "18 min",
      manager: "David Kim",
      phone: "(972) 555-0012",
      status: "online",
      availableItems: 12,
      lastContact: "45 min ago",
      successRate: 96
    }
  ];

  const activeTransfers = [
    {
      id: "TR-2024-001",
      product: "iPhone 15 Pro",
      quantity: 5,
      fromStore: "Store #4831",
      toStore: "Store #4829 (You)",
      status: "in_transit",
      estimatedArrival: "2:30 PM",
      driver: "John Smith",
      trackingId: "WM-TR-001"
    },
    {
      id: "TR-2024-002",
      product: "AirPods Pro",
      quantity: 10,
      fromStore: "Store #4829 (You)",
      toStore: "Store #4832",
      status: "confirmed",
      estimatedArrival: "4:00 PM",
      driver: "Maria Garcia",
      trackingId: "WM-TR-002"
    }
  ];

  const transferRequests = [
    {
      id: "REQ-2024-001",
      product: "Samsung Galaxy S24",
      quantity: 8,
      requestedBy: "Store #4832",
      requestedFrom: "Store #4829 (You)",
      priority: "high",
      reason: "Unexpected surge in demand",
      timeRequested: "1:15 PM",
      status: "pending"
    },
    {
      id: "REQ-2024-002",
      product: "MacBook Air M3",
      quantity: 3,
      requestedBy: "Store #4829 (You)",
      requestedFrom: "Store #4831",
      priority: "medium",
      reason: "Preventive restocking",
      timeRequested: "12:45 PM",
      status: "approved"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Inter-Store Collaboration</h2>
          <p className="text-muted-foreground">
            Coordinate with nearby stores for optimal inventory distribution
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="text-green-600 border-green-600">
            <Users className="h-3 w-3 mr-1" />
            4 Stores Connected
          </Badge>
          <Button variant="outline">
            <MessageCircle className="h-4 w-4 mr-2" />
            Broadcast Request
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Active Transfers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeTransfers.length}</div>
            <div className="text-sm text-muted-foreground">In progress</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{transferRequests.length}</div>
            <div className="text-sm text-muted-foreground">Awaiting response</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <div className="text-sm text-green-600">This month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Avg. Transfer Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3h</div>
            <div className="text-sm text-muted-foreground">Door to door</div>
          </CardContent>
        </Card>
      </div>

      {/* Active Transfers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Truck className="h-5 w-5" />
            <span>Active Transfers</span>
          </CardTitle>
          <CardDescription>
            Real-time tracking of ongoing inventory transfers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeTransfers.map((transfer) => (
              <div key={transfer.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-blue-500" />
                    <div>
                      <h3 className="font-semibold">{transfer.product}</h3>
                      <p className="text-sm text-muted-foreground">
                        {transfer.quantity} units • {transfer.trackingId}
                      </p>
                    </div>
                  </div>
                  <Badge 
                    variant={transfer.status === 'in_transit' ? 'default' : 'outline'}
                    className={transfer.status === 'in_transit' ? 'bg-blue-100 text-blue-700' : ''}
                  >
                    {transfer.status === 'in_transit' ? 'In Transit' : 'Confirmed'}
                  </Badge>
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <span>{transfer.fromStore}</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>{transfer.toStore}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Driver</div>
                    <div className="font-medium">{transfer.driver}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">ETA</div>
                    <div className="font-medium">{transfer.estimatedArrival}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Status</div>
                    <div className="font-medium">
                      {transfer.status === 'in_transit' ? 'En Route' : 'Preparing'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t">
                  <div className="text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Updated 5 minutes ago
                  </div>
                  <Button size="sm" variant="outline">
                    Track Transfer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transfer Requests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5" />
            <span>Transfer Requests</span>
          </CardTitle>
          <CardDescription>
            Incoming and outgoing inventory requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transferRequests.map((request) => (
              <div key={request.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{request.product}</h3>
                      <Badge 
                        variant={request.priority === 'high' ? 'destructive' : 'outline'}
                        className={request.priority === 'high' ? '' : 'text-orange-600 border-orange-600'}
                      >
                        {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)} Priority
                      </Badge>
                    </div>
                  </div>
                  <Badge 
                    variant={request.status === 'pending' ? 'outline' : 'default'}
                    className={request.status === 'approved' ? 'bg-green-100 text-green-700' : ''}
                  >
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-3">
                  <div>
                    <div className="text-muted-foreground">Quantity</div>
                    <div className="font-medium">{request.quantity} units</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">From</div>
                    <div className="font-medium">{request.requestedFrom}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">To</div>
                    <div className="font-medium">{request.requestedBy}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Requested</div>
                    <div className="font-medium">{request.timeRequested}</div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mb-3">
                  <strong>Reason:</strong> {request.reason}
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-sm text-muted-foreground">
                    Request ID: {request.id}
                  </div>
                  <div className="flex items-center space-x-2">
                    {request.status === 'pending' && (
                      <>
                        <Button size="sm" variant="outline">
                          Decline
                        </Button>
                        <Button size="sm">
                          Approve
                        </Button>
                      </>
                    )}
                    {request.status === 'approved' && (
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Nearby Stores */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Store className="h-5 w-5" />
            <span>Nearby Stores</span>
          </CardTitle>
          <CardDescription>
            Connect with nearby stores for inventory sharing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nearbyStores.map((store) => (
              <div key={store.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>{store.manager.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{store.name}</h3>
                      <p className="text-sm text-muted-foreground">{store.manager}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={store.status === 'online' ? 'outline' : 'secondary'}
                    className={store.status === 'online' ? 'text-green-600 border-green-600' : ''}
                  >
                    {store.status === 'online' ? 'Online' : 'Offline'}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <div className="text-muted-foreground">Distance</div>
                    <div className="font-medium">{store.distance}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Travel Time</div>
                    <div className="font-medium">{store.travelTime}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Available Items</div>
                    <div className="font-medium">{store.availableItems}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Success Rate</div>
                    <div className="font-medium">{store.successRate}%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Last contact: {store.lastContact}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      Contact
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