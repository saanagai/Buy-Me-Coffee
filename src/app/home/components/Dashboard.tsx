"use client";

import { useState } from "react";
import Image from "next/image";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("earnings");

  return (
    <div className="flex h-screen bg-white">
      <main className="flex-1 p-6 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Earnings</h1>
          <Button variant="outline" className="gap-2">
            Create Card Link
          </Button>
        </div>

        <Tabs defaultValue="earnings" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="last-30-days">Last 30 Days</TabsTrigger>
          </TabsList>
          <TabsContent value="earnings" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-500 mb-1">
                    Earnings
                  </h2>
                  <div className="text-3xl font-bold">$450</div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Recent transactions</h3>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      See all
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {transactions.map((transaction, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Image
                          src={transaction.avatar || "/placeholder.svg"}
                          alt={transaction.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">
                              {transaction.name}
                            </div>
                            <div className="font-medium text-green-600">
                              {transaction.amount}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {transaction.description}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {transaction.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="last-30-days">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-500 mb-1">
                    Last 30 Days
                  </h2>
                  <div className="text-3xl font-bold">$450</div>
                  <div className="text-sm text-gray-500">
                    From 15 supporters
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Recent transactions</h3>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      See all
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {transactions.map((transaction, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Image
                          src={transaction.avatar || "/placeholder.svg"}
                          alt={transaction.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">
                              {transaction.name}
                            </div>
                            <div className="font-medium text-green-600">
                              {transaction.amount}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {transaction.description}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {transaction.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

const transactions = [
  {
    name: "Jessica",
    description:
      "Thanks for the amazing content! Your videos inspired me to begin my own journey. Keep up the great work!",
    amount: "+$5",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "David",
    description: "I really enjoyed your latest post!",
    amount: "+$3",
    time: "5 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sarah",
    description: "Keep up the awesome content!",
    amount: "+$5",
    time: "1 day ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael",
    description: "Thanks for the inspiration!",
    amount: "+$10",
    time: "2 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];
