import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Code, Zap } from 'lucide-react';
import ConstellationBackground from '@/components/constellation-background';
import { Logo } from '@/components/icons';

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
       <ConstellationBackground />
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-bold">AI API Bridge</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium hover:text-primary" prefetch={false}>
              주요 기능
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary" prefetch={false}>
              요금제
            </Link>
            <Link href="/login" className="text-sm font-medium hover:text-primary" prefetch={false}>
              로그인
            </Link>
          </nav>
          <Button asChild>
            <Link href="/dashboard">
              대시보드 바로가기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center md:py-32 lg:py-40">
           <div className="absolute inset-0 -z-10 bg-aurora-bg" />
          <div className="relative z-10">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 sm:text-5xl md:text-6xl">
              코딩 대신, 대화로 API를 만드세요
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              자연어 프롬프트 하나로 복잡한 데이터를 조합하여 당신만의 커스텀 API를 만들어보세요. 개발자, 기획자, 데이터 분석가 모두를 위한 노코드 API 빌더입니다.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary via-fuchsia-500 to-pink-500 text-white font-bold transition-all duration-300 hover:shadow-[0_0_20px_#4F46E5]">
                <Link href="/dashboard">
                  지금 바로 시작하기 <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">
                  더 알아보기
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">왜 AI API Bridge를 선택해야 할까요?</h2>
            <p className="mt-4 text-muted-foreground">
              복잡한 코딩과 인프라 관리 없이, 아이디어를 곧바로 현실로 만드는 가장 빠른 방법입니다.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">대화형 API 생성</h3>
              <p className="mt-2 text-muted-foreground">"서울 날씨 알려줘" 와 같은 간단한 문장으로 바로 사용 가능한 API 엔드포인트를 만드세요.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">다양한 데이터 소스 연동</h3>
              <p className="mt-2 text-muted-foreground">공공 데이터, 자체 DB, 외부 API 등 여러 데이터 소스를 지능적으로 결합하여 풍부한 API를 구축합니다.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4l2 2"/><path d="m15.82 4.18.22.22c.84.84.84 2.2 0 3.04l-.22.22"/><path d="M8.18 4.18c-.84.84-.84 2.2 0 3.04l.22.22"/></svg>
              </div>
              <h3 className="text-xl font-bold">실시간 상태 모니터링</h3>
              <p className="mt-2 text-muted-foreground">생성된 API의 호출 수, 응답 시간, 오류율 등 주요 지표를 직관적인 대시보드에서 확인하세요.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background/80 border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AI API Bridge. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
              이용약관
            </Link>
            <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
              개인정보처리방침
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
