import { computed, reactive } from "vue";

export default function useSearch<T>(initItems: T[]) {
  const params: any = reactive({});
  const items = computed(() => {
    let result: any[] = [...initItems];
    Object.keys(params).forEach(key => {
      const param = params[key] as string;
      result = result.filter(el => el[key].includes(param));
    })
    return result;
  });

  function setParams(providedParams: any) {
    Object.keys(providedParams).forEach(key => {
      params[key] = providedParams[key];
    })
  }

  {
    return { items, params, setParams }
  }
}