
'use client';

import { BarChart, LineChart, PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { Bar, BarChart as RechartsBarChart, Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from 'recharts';

const systemStatusData = [
    { time: '10:00', status: 99.8 },
    { time: '11:00', status: 99.9 },
    { time: '12:00', status: 99.9 },
    { time: '13:00', status: 100.0 },
    { time: '14:00', status: 99.7 },
    { time: '15:00', status: 99.9 },
    { time: '16:00', status: 100.0 },
];

const activeUsersData = [
  { time: '10:00', users: 120 },
  { time: '11:00', users: 150 },
  { time: '12:00', users: 200 },
  { time: '13:00', users: 180 },
  { time: '14:00', users: 250 },
  { time: '15:00', users: 230 },
  { time: '16:00', users: 300 },
];

const chartConfig = {
  users: {
    label: 'Active Users',
    color: 'hsl(var(--primary))',
  },
  status: {
    label: 'Uptime (%)',
    color: 'hsl(var(--chart-2))',
  },
};


export default function AdminDashboardPage() {
    return (
        <div className="flex flex-col gap-6">
             <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">관리자 대시보드</h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">시스템 상태</CardTitle>
                         <Badge className="bg-green-500/20 text-green-400 border-green-500/30">안정</Badge>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">99.9% Uptime</div>
                        <p className="text-xs text-muted-foreground">지난 24시간 기준</p>
                         <div className="h-[120px] mt-4">
                            <ChartContainer config={chartConfig}>
                                <RechartsLineChart data={systemStatusData} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                    <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                                    <YAxis domain={[99, 100]} tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                                    <RechartsTooltip content={<ChartTooltipContent indicator="line" />} />
                                    <Line type="monotone" dataKey="status" stroke="var(--color-status)" strokeWidth={2} dot={false} />
                                </RechartsLineChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">실시간 활성 사용자</CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">278명</div>
                        <p className="text-xs text-muted-foreground">현재 접속중인 사용자</p>
                         <div className="h-[120px] mt-4">
                           <ChartContainer config={chartConfig}>
                            <RechartsBarChart data={activeUsersData} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                                <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                                <RechartsTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                                <Bar dataKey="users" fill="var(--color-users)" radius={4} />
                            </RechartsBarChart>
                           </ChartContainer>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">API 소스 상태</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>공공 데이터 포털</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant="outline" className="text-green-400 border-green-500/50">정상</Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Naver API</TableCell>
                                    <TableCell className="text-right">
                                         <Badge variant="outline" className="text-green-400 border-green-500/50">정상</Badge>
                                    </TableCell>
                                </TableRow>
                                 <TableRow>
                                    <TableCell>Kakao API</TableCell>
                                    <TableCell className="text-right">
                                         <Badge variant="outline" className="text-yellow-400 border-yellow-500/50">지연</Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Google Maps API</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant="destructive">중단</Badge>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
             <div className="grid gap-6 md:grid-cols-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Grafana 대시보드</CardTitle>
                         <CardDescription>주요 시스템 메트릭 모니터링</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                            <p className="text-muted-foreground">Grafana Iframe이 여기에 표시됩니다.</p>
                        </div>
                    </CardContent>
                </Card>
                  <Card>
                    <CardHeader>
                        <CardTitle>Kibana 대시보드</CardTitle>
                        <CardDescription>실시간 로그 분석 및 시각화</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="w-full h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                            <p className="text-muted-foreground">Kibana Iframe이 여기에 표시됩니다.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>사용자 활동 스트림</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>시간</TableHead>
                                <TableHead>사용자</TableHead>
                                <TableHead>활동</TableHead>
                                <TableHead>세부 정보</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>2024-07-30 15:45:12</TableCell>
                                <TableCell>user@example.com</TableCell>
                                <TableCell>API 생성</TableCell>
                                <TableCell>Seoul-Weather-Health-Index</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>2024-07-30 15:42:05</TableCell>
                                <TableCell>admin@example.com</TableCell>
                                <TableCell>로그인</TableCell>
                                <TableCell>IP: 203.0.113.1</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>2024-07-30 15:38:21</TableCell>
                                <TableCell>test@example.com</TableCell>
                                <TableCell>API 호출</TableCell>
                                <TableCell>/api/v1/busan-dust</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}
