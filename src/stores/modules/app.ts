import { defineStore } from 'pinia';

export interface AppStoreType {
  /** count data */
  count: number;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppStoreType => ({
    count: 0,
  }),
  getters: {
    /** get count */
    getCount(): number {
      return this.count;
    },
  },
  actions: {
    /** add count */
    addCount(count?: number): void {
      if (count === undefined) this.count += 1;
      else this.count += count;
    },
  },
});
