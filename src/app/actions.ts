
'use server';

import { z } from 'zod';
import { textToApi } from '@/ai/flows/text-to-api';
import type { TextToApiOutput } from '@/ai/flows/text-to-api';

const formSchema = z.object({
  prompt: z.string().min(10, {
    message: "프롬프트는 10자 이상이어야 합니다.",
  }),
});

export interface FormState {
  data: TextToApiOutput | null;
  error: string | null;
  success: boolean;
}

export async function generateApiCall(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: validatedFields.error.errors[0].message,
      success: false,
    };
  }

  try {
    const result = await textToApi({ prompt: validatedFields.data.prompt });
    if (!result.apiCall || !result.explanation) {
       return {
        data: null,
        error: 'AI가 유효한 응답을 생성하지 못했습니다. 다른 프롬프트를 시도해주세요.',
        success: false,
      };
    }
    return { data: result, error: null, success: true };
  } catch (e) {
    console.error(e);
    return {
      data: null,
      error: 'API 호출 생성에 실패했습니다. 다시 시도해주세요.',
      success: false,
    };
  }
}
