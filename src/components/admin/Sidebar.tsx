import React from 'react';
import { LayoutDashboard, Package, Users, ShoppingCart, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { name: 'Products', icon: Package, href: '/admin/products' },
  { name: 'Customers', icon: Users, href: '/admin/customers' },
  { name: 'Orders', icon: ShoppingCart, href: '/admin/orders' },
  { name: 'Settings', icon: Settings, href: '/admin/settings' },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-900 min-h-screen">
      <div className="flex items-center h-16 px-4">
        <span className="text-xl font-bold text-white">Store Admin</span>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white group"
          >
            <item.icon className="mr-3 h-6 w-6" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}