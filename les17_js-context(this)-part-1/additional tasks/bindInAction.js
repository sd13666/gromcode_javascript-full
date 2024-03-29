/*
.bind в действии
На основе ф-ции calculator с помощью .bind создайте несколько других ф-ций
Основные требования:
Ф-ции multiplier, summator, twice должны экспортироваться под своими именами
*/

export function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */

export const multiplier = calculator.bind({ operation: '*' });

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

export const summator = calculator.bind({ operation: '+' });

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

export const twice = calculator.bind({ operation: '*', calculator: (a) => a * 2 });
