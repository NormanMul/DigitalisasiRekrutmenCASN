'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import {
  Bell,
  Users,
  Lock,
  Palette,
  FileCog,
  Save,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function PengaturanPage() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: 'Pengaturan Disimpan',
      description: 'Perubahan konfigurasi Anda telah berhasil disimpan.',
    });
  };
  
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      <header>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Pengaturan Sistem
        </h1>
        <p className="text-muted-foreground">
          Konfigurasi umum, keamanan, dan preferensi sistem CASN Smart Recruit.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Palette className="h-6 w-6" />
              <CardTitle>Branding & Tampilan</CardTitle>
            </div>
            <CardDescription>
              Sesuaikan tampilan portal agar sesuai dengan identitas instansi Anda.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="logo">Logo Instansi</Label>
                <Input id="logo" type="file" />
                <p className="text-xs text-muted-foreground">
                  Gunakan format PNG atau SVG dengan latar transparan.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-color">Warna Utama</Label>
                <Input id="primary-color" type="color" defaultValue="#0D2A4C" />
                <p className="text-xs text-muted-foreground">
                  Warna ini akan digunakan untuk tombol, tautan, dan elemen penting lainnya.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileCog className="h-6 w-6" />
              <CardTitle>Konfigurasi Seleksi</CardTitle>
            </div>
            <CardDescription>
              Atur parameter dan bobot untuk setiap tahapan seleksi.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
                <Label>Tahapan Seleksi Aktif</Label>
                 <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2"><Switch id="skd-switch" defaultChecked /><Label htmlFor="skd-switch">SKD</Label></div>
                    <div className="flex items-center space-x-2"><Switch id="skb-switch" defaultChecked /><Label htmlFor="skb-switch">SKB</Label></div>
                    <div className="flex items-center space-x-2"><Switch id="wawancara-switch" /><Label htmlFor="wawancara-switch">Wawancara</Label></div>
                 </div>
            </div>
            <Separator />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="bobot-skd">Bobot Nilai SKD (%)</Label>
                    <Input id="bobot-skd" type="number" defaultValue="40" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bobot-skb">Bobot Nilai SKB (%)</Label>
                    <Input id="bobot-skb" type="number" defaultValue="60" />
                </div>
             </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6" />
              <CardTitle>Manajemen Tim Seleksi</CardTitle>
            </div>
            <CardDescription>
              Kelola akses dan peran untuk anggota panitia seleksi.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium">Ahmad Subarjo</p>
                <p className="text-sm text-muted-foreground">admin@instansi.go.id</p>
              </div>
              <Select defaultValue="admin">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Pilih peran" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="verifier">Verifier</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline">Tambah Anggota Tim</Button>
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
            <Button size="lg" onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" /> Simpan Perubahan
            </Button>
        </div>
      </div>
    </div>
  );
}
