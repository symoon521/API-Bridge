import ApiBridgeForm from '@/components/api-bridge-form';

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">API 생성하기</h1>
      </div>
      <div className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm p-8">
          <div className="w-full max-w-4xl">
            <p className="text-muted-foreground mb-4 text-center">
                자연어 프롬프트 하나로 복잡한 데이터를 조합하여 당신만의 커스텀 API를 만들어보세요.
            </p>
            <ApiBridgeForm />
          </div>
      </div>
    </>
  );
}
