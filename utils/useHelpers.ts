export const useHelpers = () => {
  const declination = (number: number, one: string, two: string, five:string) => {
    let n = Math.abs(number)
    n %= 100
    if (n >= 5 && n <= 20) {
      return five
    }
    n %= 10
    if (n === 1) {
      return one
    }
    if (n >= 2 && n <= 4) {
      return two
    }
    return five
  }
  const sliceThousand = (value: number) => {
    const formatter = new Intl.NumberFormat('ru-RU', {})
    return formatter.format(value)
  }
  return {
    declination,
    sliceThousand
  }
}
