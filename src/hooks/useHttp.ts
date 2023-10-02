import { useCallback, useRef, useState } from 'react';

export interface IRequestParams {
  url: string;
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
  body?: BodyInit | null;
  headers?: HeadersInit | undefined;
}

type Request = <T>(params: IRequestParams) => Promise<T | undefined>;

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const totalCountRef = useRef(0);

  const request: Request = useCallback(async (params) => {
    const {
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' },
    } = params;
    setIsLoading(true);
    try {
      const response = await fetch(url, { method, body, headers });
      totalCountRef.current = Number(response.headers.get('X-Total-Count'));
      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
    }
  }, []);

  return { isLoading, request, totalCount: totalCountRef.current };
};
