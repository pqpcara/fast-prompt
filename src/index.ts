interface PromptOptions {
  hideInput?: boolean;
  defaultValue?: string;
}

export function prompt(
  message: string,
  options?: PromptOptions,
): Promise<string> {
  const { hideInput = false, defaultValue = "" } = options || {};
  const stdin = process.stdin;
  const stdout = process.stdout;

  return new Promise((resolve) => {
    let input = defaultValue;

    const promptMessage = message + ": ";
    stdout.write(promptMessage);

    stdout.write(hideInput ? "*".repeat(input.length) : input);

    stdin.setEncoding("utf8");
    stdin.resume();

    if (stdin.isTTY) {
      stdin.setRawMode(true);
    }

    const cleanup = () => {
      stdin.removeListener("data", onData);
      if (stdin.isTTY) stdin.setRawMode(false);
      stdin.pause();
    };

    const onData = (char: string) => {
      if (char === "\r" || char === "\n") {
        stdout.write("\n");
        cleanup();
        resolve(input);
        return;
      }

      if (char === "\u0003") {
        cleanup();
        process.exit();
      }

      if (char === "\u007f") {
        if (input.length > 0) {
          input = input.slice(0, -1);
          stdout.clearLine(0);
          stdout.cursorTo(0);
          stdout.write(
            promptMessage + (hideInput ? "*".repeat(input.length) : input),
          );
        }
        return;
      }

      input += char;
      stdout.write(hideInput ? "*" : char);
    };

    stdin.on("data", onData);
  });
}
