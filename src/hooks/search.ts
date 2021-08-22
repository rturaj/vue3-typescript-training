import { computed, ComputedRef, reactive } from "vue";

export default function useSearch<T>(initItems: T[]): { items: ComputedRef<any[]>, setParams: (providedParams: Partial<T>) => void } {
  const params: Partial<T> = reactive({});
  const items = computed(() => {
    let result: T[] = [...initItems];
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const param = params[key];
        result = result.filter(el => {
          const prop = el[key];
          if (typeof prop === 'string') return prop.includes(String(param))
        });
      }
    }
    return result;
  });

  function setParams(providedParams: Partial<T>) {
    for (const key in providedParams) {
      if (Object.prototype.hasOwnProperty.call(providedParams, key)) {
        params[key] = providedParams[key];
      }
    }
  }

  {
    return { items, setParams }
  }
}