This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

### Creating new question type:

1. Create the questionType in `question_types.ts`
2. Create new component in `/question_types`
3. Add new `q_type` in `IQuestion` interface
4. Add new `QuestionType` enum entry
5. Add new `QuestionValue` type in `question_types.ts`
6. Add new handler in `useSurvey.utils.ts` switch statement
7. Add new `onAnswer` handler for type in `Survey.tsx`
8. Add new `renderQuestion` handler for type in `Survey.tsx`
