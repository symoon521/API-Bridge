
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { generateApiCall, type FormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CodeBlock from '@/components/code-block';
import { ArrowRight, BrainCircuit, LoaderCircle, ServerCrash, Wand2 } from 'lucide-react';

const initialState: FormState = {
  data: null,
  error: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="group w-full md:w-auto bg-gradient-to-r from-primary via-fuchsia-500 to-pink-500 text-white font-bold transition-all duration-300 hover:shadow-[0_0_20px_#4F46E5] disabled:bg-gray-500 disabled:opacity-70 disabled:shadow-none"
    >
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          생성 중...
        </>
      ) : (
        <>
          API 생성하기
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

export default function ApiBridgeForm() {
  const [state, formAction] = useActionState(generateApiCall, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: '오류',
        description: state.error,
      });
    }
    if (state.success) {
       toast({
        title: '성공!',
        description: 'API가 성공적으로 생성되었습니다.',
      });
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div className="w-full space-y-8">
      <form ref={formRef} action={formAction} className="space-y-4">
        <div className="relative">
          <Textarea
            name="prompt"
            placeholder="예: '서울시의 미세먼지 데이터와 날씨 데이터를 결합하여, 특정 지역의 건강 지수를 알려주는 API를 만들어줘'"
            required
            minLength={10}
            className="min-h-[120px] resize-none border-2 border-primary/20 bg-background/50 p-4 pr-12 text-base backdrop-blur-sm focus:border-primary focus:ring-primary caret-primary"
          />
           <Wand2 className="absolute top-4 right-4 h-6 w-6 text-muted-foreground" />
        </div>
        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>

      {state.data && (
        <div className="grid animate-in fade-in-50 slide-in-from-bottom-16 duration-500 gap-8 md:grid-cols-2">
          <Card className="bg-slate-900/40 backdrop-blur-md border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="h-6 w-6 text-primary" />
                <span>생성된 API 호출</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock code={state.data.apiCall} />
            </CardContent>
          </Card>
          <Card className="bg-slate-900/40 backdrop-blur-md border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                 <Wand2 className="h-6 w-6 text-fuchsia-400" />
                <span>AI 설명</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{state.data.explanation}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
