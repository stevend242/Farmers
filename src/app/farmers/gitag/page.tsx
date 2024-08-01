"use client"
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Award, Calendar, MapPin } from 'lucide-react';

interface Certificate {
  id: number;
  product: string;
  issueDate: string;
  region: string;
  status: string;
}

export default function Page() {
  const [certificates, setCertificates] = useState<Certificate[] | null>(null);

  useEffect(() => {
    // Simulating fetching user's GI certificates
    const fetchCertificates = async () => {
      // In a real application, replace this with an actual API call
      const mockCertificates: Certificate[] = [
        { id: 1, product: "Darjeeling Tea", issueDate: "2022-05-15", region: "West Bengal", status: "Active" },
        { id: 2, product: "Alphonso Mango", issueDate: "2023-01-10", region: "Maharashtra", status: "Active" },
        { id: 3, product: "Chanderi Fabric", issueDate: "2021-11-30", region: "Madhya Pradesh", status: "Expiring Soon" },
      ];
      setCertificates(mockCertificates);
    };

    fetchCertificates();
  }, []);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Expiring Soon": return "bg-yellow-500";
      case "Expired": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your GI Certificates</h1>
      {certificates ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <Card key={cert.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{cert.product}</span>
                  <Badge className={`${getStatusColor(cert.status)} text-white`}>{cert.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Award className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm">Certificate ID: {cert.id}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm">Issue Date: {cert.issueDate}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-red-500" />
                    <span className="text-sm">Region: {cert.region}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p>Loading your GI certificates...</p>
      )}
    </div>
  );
}
