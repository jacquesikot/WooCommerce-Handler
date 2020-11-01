export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  export const discountPrecentage = (original: number, sale: number) => {
    const percentage = (sale / original) * 100;
    return percentage.toFixed();
  };
  
  export const capitalize = (s: string) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };