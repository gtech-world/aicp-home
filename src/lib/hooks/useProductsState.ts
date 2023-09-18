import { useSelectState } from '@/components/common/select';
import { useAsyncM } from '@/lib/hooks/useAsyncM';
import { getProductList } from '@/lib/http';
import { useSearchParams } from '@umijs/max';
import { useMemo } from 'react';

export function useProductsState() {
  const { value: products, loading } = useAsyncM(getProductList);
  const list = useMemo(() => (products || []).map((p: any) => ({ ...p, text: p.displayName })), [products]);
  const [sq] = useSearchParams();
  const initIndex = useMemo(() => {
    const pid = sq.get('product_id');
    if (pid) {
      const fi = list.findIndex((p: any) => `${p.id}` === pid);
      if (fi >= 0) return fi;
    }
    return 0;
  }, [sq.get('product_id'), list]);
  const { current, items, onChange } = useSelectState(list, initIndex);
  const current_product = list[current];

  return { products, current, items, onChange, current_product, loading };
}
