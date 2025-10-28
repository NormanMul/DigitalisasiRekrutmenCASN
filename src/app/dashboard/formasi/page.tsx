'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  MoreHorizontal,
  PlusCircle,
  FileDown,
  Users,
  Building,
  MapPin,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const formations = [
  {
    id: 'FRM-001',
    position: 'Analis Kebijakan Ahli Pertama',
    department: 'Kementerian Pendayagunaan Aparatur Negara',
    location: 'Jakarta Pusat',
    quota: 5,
    applicants: 258,
    status: 'Dibuka',
  },
  {
    id: 'FRM-002',
    position: 'Pranata Komputer',
    department: 'Badan Siber dan Sandi Negara',
    location: 'Bogor',
    quota: 10,
    applicants: 782,
    status: 'Dibuka',
  },
  {
    id: 'FRM-003',
    position: 'Auditor Ahli Pertama',
    department: 'Badan Pemeriksa Keuangan',
    location: 'Seluruh Indonesia',
    quota: 50,
    applicants: 1203,
    status: 'Ditutup',
  },
  {
    id: 'FRM-004',
    position: 'Analis Sumber Daya Manusia',
    department: 'Badan Kepegawaian Negara',
    location: 'Jakarta Timur',
    quota: 8,
    applicants: 450,
    status: 'Dibuka',
  },
   {
    id: 'FRM-005',
    position: 'Dokter Gigi Ahli Pertama',
    department: 'Kementerian Kesehatan',
    location: 'Papua Barat',
    quota: 3,
    applicants: 35,
    status: 'Penuh',
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Dibuka':
      return 'default';
    case 'Ditutup':
      return 'destructive';
    case 'Penuh':
      return 'secondary';
    default:
      return 'outline';
  }
};

export default function FormasiPage() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Manajemen Formasi Jabatan
          </h1>
          <p className="text-muted-foreground">
            Kelola daftar formasi, kuota, dan status pendaftaran untuk seleksi
            CASN.
          </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <FileDown className="mr-2 h-4 w-4" /> Ekspor
            </Button>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Buka Formasi Baru
            </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Formasi</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">formasi aktif dan non-aktif</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Kuota</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">76</div>
                <p className="text-xs text-muted-foreground">posisi yang tersedia</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Pelamar</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">2,728</div>
                <p className="text-xs text-muted-foreground">di semua formasi</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Formasi Paling Diminati</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-lg font-bold">Auditor Ahli Pertama</div>
                <p className="text-xs text-muted-foreground">1,203 pelamar</p>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Formasi</CardTitle>
          <CardDescription>
            Menampilkan semua formasi yang telah dibuka.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Formasi Jabatan</TableHead>
                <TableHead>Instansi & Lokasi</TableHead>
                <TableHead className="text-center">Kuota</TableHead>
                <TableHead className="text-center">Jumlah Pelamar</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {formations.map((formation) => (
                <TableRow key={formation.id}>
                  <TableCell>
                    <div className="font-medium">{formation.position}</div>
                    <div className="text-xs text-muted-foreground">{formation.id}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground"/> 
                        <span>{formation.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 ml-0.5"/> 
                        <span>{formation.location}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-mono">{formation.quota}</TableCell>
                  <TableCell className="text-center font-mono">{formation.applicants.toLocaleString('id-ID')}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={getStatusVariant(formation.status)}>
                      {formation.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Lihat Detail Formasi</DropdownMenuItem>
                        <DropdownMenuItem>Lihat Daftar Pelamar</DropdownMenuItem>
                        <DropdownMenuItem>Ubah Status</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Tutup Formasi
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
