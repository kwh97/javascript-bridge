const { Console } = require("@woowacourse/mission-utils");
const { PRINT_MESSAGE } = require("./utils/Constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  printStartMessage() {
    Console.print(PRINT_MESSAGE.start);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upRow, downRow) {
    Console.print(upRow.join(' '));
    Console.print(downRow.join(' '));
    Console.print(PRINT_MESSAGE.enter);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upRow, downRow) {
    Console.print(PRINT_MESSAGE.finish);
    this.printMap(upRow, downRow);
  },

  printInfo(count, result) {
    Console.print(PRINT_MESSAGE.result(result));
    Console.print(PRINT_MESSAGE.count(count));
    Console.close();
  },
};

module.exports = OutputView;
