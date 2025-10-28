'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, FileDown, Filter, UserPlus } from 'lucide-react';
import { Input } from '@/components/ui/input';

const applicants = [
  {
    id: 'CASN-001',
    name: 'Ahmad Subarjo',
    position: 'Analis Kebijakan Ahli Pertama',
    stage: 'Verifikasi Dokumen',
    score: 88,
    status: 'Memenuhi Syarat',
  },
  {
    id: 'CASN-002',
    name: 'Siti Nurbaya',
    position: 'Pranata Komputer',
    stage: 'SKD',
    score: 92,
    status: 'Lulus',
  },
  {
    id: 'CASN-003',
    name: 'Budi Santoso',
    position: 'Auditor Ahli Pertama',
    stage: 'Verifikasi Dokumen',
    score: 75,
    status: 'Tidak Memenuhi Syarat',
  },
  {
    id: 'CASN-004',
    name: 'Dewi Lestari',
    position: 'Analis SDM',
    stage: 'Pemberkasan',
    score: 95,
    status: 'Lulus',
  },
  {
    id: 'CASN-005',
    name: 'Eko Prasetyo',
    position: 'Pranata Komputer',
    stage: 'SKB',
    score: 85,
    status: 'Menunggu Hasil',
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Memenuhi Syarat':
    case 'Lulus':
      return 'default';
    case 'Tidak Memenuhi Syarat':
      return 'destructive';
    default:
      return 'secondary';
  }
};

export default function PelamarPage() {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Manajemen Pelamar
        </h1>
        <p className="text-muted-foreground">
          Kelola, pantau, dan evaluasi seluruh kandidat dalam proses seleksi
          CASN.
        </p>
      </header>

      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
            <Input placeholder="Cari pelamar berdasarkan nama atau ID..." />
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button variant="outline">
                <FileDown className="mr-2 h-4 w-4" /> Ekspor Data
            </Button>
            <Button>
                <UserPlus className="mr-2 h-4 w-4" /> Tambah Pelamar Manual
            </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Pelamar</CardTitle>
          <CardDescription>
            Total {applicants.length} pelamar terdaftar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Pelamar</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Formasi Dilamar</TableHead>
                <TableHead>Tahap Seleksi</TableHead>
                <TableHead>Skor AI</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell className="font-medium">{applicant.id}</TableCell>
                  <TableCell>{applicant.name}</TableCell>
                  <TableCell>{applicant.position}</TableCell>
                  <TableCell>{applicant.stage}</TableCell>
                  <TableCell>
                    <div className="font-bold">{applicant.score}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(applicant.status)}>
                      {applicant.status}
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
                        <DropdownMenuItem>Lihat Detail</DropdownMenuItem>
                        <DropdownMenuItem>Proses ke Tahap Berikutnya</DropdownMenuItem>
                        <DropdownMenuItem>Hubungi Pelamar</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Batalkan Kelulusan
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
