import ApiBridgeForm from '@/components/api-bridge-form';
import ConstellationBackground from '@/components/constellation-background';
import { Logo } from '@/components/icons';

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <ConstellationBackground />
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center p-4">
        <header className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <Logo className="h-10 w-10 text-primary" />
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              AI API Bridge
            </h1>
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 sm:text-5xl md:text-6xl">
            코딩 대신, 대화로 API를 만드세요
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            자연어 프롬프트 하나로 복잡한 데이터를 조합하여 당신만의 커스텀 API를 만들어보세요.
          </p>
        </header>

        <main className="w-full">
          <ApiBridgeForm />
        </main>
      </div>
      <footer className="absolute bottom-4 z-10 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} AI API Bridge. All rights reserved.</p>
      </footer>
    </div>
  );
}
