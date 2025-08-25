import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
       <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
          <CardDescription>
            계정 정보를 업데이트하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" defaultValue="홍길동" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" defaultValue="gildong@example.com" disabled />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>저장</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>비밀번호 변경</CardTitle>
          <CardDescription>
            보안을 위해 주기적으로 비밀번호를 변경해주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">현재 비밀번호</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">새 비밀번호</Label>
              <Input id="new-password" type="password" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="confirm-password">새 비밀번호 확인</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>비밀번호 변경</Button>
        </CardFooter>
      </Card>
       <Card>
        <CardHeader>
          <CardTitle>계정 삭제</CardTitle>
          <CardDescription>
            계정을 영구적으로 삭제합니다. 이 작업은 되돌릴 수 없습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">
                계정을 삭제하면 모든 API와 데이터가 사라집니다. 계속하려면 비밀번호를 입력하세요.
            </p>
             <form className="grid gap-4 mt-4">
                <div className="grid gap-2">
                    <Label htmlFor="delete-password">비밀번호</Label>
                    <Input id="delete-password" type="password" placeholder="비밀번호를 입력하세요" />
                </div>
            </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button variant="destructive">계정 삭제</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
