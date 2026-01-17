# Fast Prompt

Fast Prompt is a lightweight and efficient library for creating interactive prompts in Node.js. It provides simple and intuitive templates for building prompts with customizable options.

---

## Installation

```bash
# npm
npm install fast-prompt

# yarn
yarn add fast-prompt

# pnpm
pnpm install fast-prompt

# bun
bun install fast-prompt
```

---

## Usage

```ts
(async () => {
  const name = await prompt("Enter your name", {
    defaultValue: "John Doe",
  });

  const password = await prompt("Enter your password", {
    hideInput: true,
    defaultValue: "123456",
  });

  console.log("Name:", name);
  console.log("Password:", password);
})();
```

---

## License

Fast Prompt is licensed under the [MIT License](LICENSE).

---

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Star the repository.
2. Fork the repository.
3. Create a new branch for your feature or bug fix.
4. Make your changes and commit them.
5. Push your changes to your fork.
6. Submit a pull request.

---

## Support

If you need help or have any questions, please feel free to reach out to us on [GitHub Discussions](https://github.com/fast-prompt/fast-prompt/discussions).
