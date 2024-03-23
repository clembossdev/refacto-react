import { AppState } from '../store'
import { GroupedDomains } from './types'

export function getDomains(state: AppState): string[] {
  return state.domains
}

export function getGroupedDomains(state: AppState): GroupedDomains {
  let groupedDomains = {
    countries: [],
    classifications: [],
    subClassifications: []
  }
  
  state.domains.reduce((accumulator, item) => {
    const splittedDomain = item.split(/-|_/g);
    for (let i = 0; i < splittedDomain.length; i++) {
      const code = splittedDomain[i];
      const slot: string[] = Object.values(accumulator)[i];
      if (!slot.some((s) => s === code)) slot.push(code as unknown as never);
    }
    return accumulator;
  }, groupedDomains);

  return groupedDomains;
}
