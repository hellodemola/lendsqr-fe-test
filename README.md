# Lendsqr Lenders' Merchant Dashboard

A simple NextJs application displaying login authentication screen, user dashboard, user detail page from the assessment Figma designs. The application is designed to be responsive and is styled using SCSS.

## Tech Stack

- NextJs
- Typescript
- SCSS
- Vitest

## External Dependencies

- **idb:** A react wrapper for indexedDB 
- **react hook form:** Used form formatting.
- **husky:** Used for precommit.
- **Vitest:** Used for testing.

## Key Considerations

### Mocked server is in NextJs Api route
The user data is mocked and file is stored in the application. And the mocked data is called with NextJs Api feature using fetch in the application


## How to Run

1. Clone the repository: `git clone https://github.com/hellodemola/lendsqr-fe-test`
2. Navigate to the project folder: `cd lendsqr-fe-test`
3. Install dependencies: 

```bash 
npm install
# or
yarn install
#or
pnpm install
#or
bun install
```
4. First, run the development server:

```bash 
npm run dev
# or
yarn dev
#or
pnpm dev
#or
bun dev
```
5. Open your browser and visit `http://localhost:3000/`

## How to Run Test
1. Navigate to the project folder: `cd lendsqr-fe-test` 
2. Run 

```bash 
npm run test
# or
yarn test
#or
pnpm test
#or
bun test
```

3. Test would run in the terminal

## Submission

- [GitHub Repository](https://github.com/hellodemola/lendsqr-fe-test)
- [Live Demo](https://ademola-onasoga-lendsqr-fe-test.vercel.app/)
- [Documentation]('/')
- [Video Presentation]('/')