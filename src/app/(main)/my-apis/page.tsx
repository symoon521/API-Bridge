import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';

const apis = [
  {
    name: 'Seoul-Weather-Health-Index',
    status: 'Active',
    endpoint: '/api/v1/seoul-weather-health',
    calls: 12593,
    latency: '120ms',
    createdAt: '2024-05-20',
  },
  {
    name: 'Busan-Fine-Dust-Realtime',
    status: 'Active',
    endpoint: '/api/v1/busan-dust',
    calls: 8740,
    latency: '85ms',
    createdAt: '2024-05-18',
  },
  {
    name: 'Global-Stock-Price',
    status: 'Inactive',
    endpoint: '/api/v1/stock-price',
    calls: 0,
    latency: '-',
    createdAt: '2024-05-15',
  },
  {
    name: 'Naver-News-Keyword-Tracker',
    status: 'Active',
    endpoint: '/api/v1/news-keyword',
    calls: 25430,
    latency: '250ms',
    createdAt: '2024-05-12',
  },
];


export default function MyApisPage() {
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">내 API 목록</h1>
                <Button>새 API 생성</Button>
            </div>
            <div className="rounded-lg border shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>이름</TableHead>
                            <TableHead>상태</TableHead>
                            <TableHead>엔드포인트</TableHead>
                            <TableHead>호출 수</TableHead>
                            <TableHead>응답속도</TableHead>
                            <TableHead>생성일</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {apis.map((api) => (
                            <TableRow key={api.name}>
                                <TableCell className="font-medium">{api.name}</TableCell>
                                <TableCell>
                                    <Badge variant={api.status === 'Active' ? 'default' : 'destructive'}>
                                        {api.status === 'Active' ? '활성' : '비활성'}
                                    </Badge>
                                </TableCell>
                                <TableCell className="font-code">{api.endpoint}</TableCell>
                                <TableCell>{api.calls.toLocaleString()}</TableCell>
                                <TableCell>{api.latency}</TableCell>
                                <TableCell>{api.createdAt}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
