import { useState } from 'react';

type useFormProps = (
  initValue: number,
  pages: number
) => { page: number; onNext: () => void; onPrev: () => void };

export const useForm: useFormProps = (initValue, pages) => {
  const [page, setPage] = useState<number>(initValue);

  const onNext = () => {
    if (page === pages - 1) return;
    setPage((prev) => prev + 1);
  };
  const onPrev = () => {
    if (page === 0) return;
    setPage((prev) => prev - 1);
  };

  return { page, onNext, onPrev };
};
