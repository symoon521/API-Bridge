
'use client';

import { useState } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CodeBlockProps {
  code: string;
  className?: string;
}

export default function CodeBlock({ code, className }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div
      className={cn(
        'relative rounded-lg bg-black/50 p-4 font-code text-sm',
        className
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:bg-white/10 hover:text-white"
              onClick={copyToClipboard}
            >
              {hasCopied ? <Check className="h-4 w-4 text-green-400" /> : <Clipboard className="h-4 w-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>클립보드에 복사</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <pre>
        <code className="text-white">{code}</code>
      </pre>
    </div>
  );
}
