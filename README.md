# React Formik Step Wizard

React multistep wizard with Formik integration

[![npm version](https://badge.fury.io/js/react-formik-step-wizard.svg)](https://badge.fury.io/js/react-formik-step-wizard)

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Quickstart](#quickstart)
- [How it works](#how-it-works)
  - [1. Configuring list of steps](#1-configuring-list-of-steps)
  - [2. Writing your step component(s)](#2-writing-your-step-components)
  - [3. Setting up the Wizard](#3-setting-up-the-wizard)
  - [4. Full example](#4-full-example)
  - [What if I don't want to use Formik in step component?](#what-if-i-dont-want-to-use-formik-in-step-component)
- [Navigation](#navigation)
  - [BasicFooter](#basicfooter)
  - [What if I want to use submit buttons directly in step component?](#what-if-i-want-to-use-submit-buttons-directly-in-step-component)
- [API](#api)
  - [Step object](#step-object)
  - [Wizard](#wizard)
  - [useWizard](#usewizard)
- [Advanced topics](#advanced-topics)
  - [Skipping steps](#skipping-steps)
  - [Validating form field based on what user inputted in previous step(s)](#validating-form-field-based-on-what-user-inputted-in-previous-steps)
  - [Saving form values in SessionStorage](#saving-form-values-in-sessionstorage)
  - [Using URL hashes in the wizard](#using-url-hashes-in-the-wizard)
  - [Animations](#animations)
    - [Caveats](#caveats)
  - [Creating wrapper for steps](#creating-wrapper-for-steps)
  - [Creating header for wizard](#creating-header-for-wizard)

## Demo

https://kennyhei.github.io/react-formik-step-wizard/

Small demo showcasing the wizard and various use cases such as:

- Step with basic form validation
- Step with form where validation is dependent on what user inputted in previous view
- Skippable step
- Async step
- Final step with summary of inputted data
- Shared footer with navigation buttons
- Shared header with progress bar
- Animated steps
- URL hashes

## Installation

NPM:
```
npm install react-formik-step-wizard
```

Yarn:
```
yarn add react-formik-step-wizard formik
```

**Note:** It is also recommended to install `yup` for validation and examples below use it. You can install `yup` with `npm install yup` or `yarn add yup`. However, it's not mandatory as you can define `validate` function for [steps](#step-object) as well. 

## Quickstart

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Wizard, useWizard, BasicFooter } from 'react-formik-step-wizard'
import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function StepName() {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <Field id="name" name="name" type="text" />
      <ErrorMessage name="name" />
    </div>
  )
}

function StepAge() {
  return (
    <div>
      <label htmlFor="age">Age</label>
      <Field id="age" name="age" type="number" min="0" max="125" />
      <ErrorMessage name="age" />
    </div>
  )
}

function StepFinal() {
  const { values } = useWizard()
  const name = values.StepName.name
  const age = values.StepAge.age
  return (
    <div>
      <h1>You did it!</h1>
      <p>Your name is {name} and your age is {age}.</p>
      <p>Press button to complete the wizard.</p>
      <button type="submit">Finish</button>
    </div>
  )
}

function App() {
  const steps = [
    {
      id: 'StepName',
      component: <StepName />,
      initialValues: { name: 'John' },
      validationSchema: Yup.object({
        name: Yup.string().required('This field is required'),
      }),
      hidePrevious: true
    },
    {
      id: 'StepAge',
      component: <StepAge />,
      initialValues: { age: 30 },
      validationSchema: Yup.object({
        age: Yup.number().min(0).max(125).required('This field is required')
      })
    },
    {
      id: 'StepFinal',
      component: <StepFinal />,
      hideNext: true
    }
  ]

  return (
    <Wizard
      steps={steps}
      onStepChanged={(fromStep, toStep, wizardValues) => {
        console.log('step changed', fromStep?.id, toStep?.id, wizardValues)
      }}
      onCompleted={values => {
        alert('wizard completed')
        console.log('wizard completed', values)
      }}
      footer={<BasicFooter />}
    />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

## How it works

You can follow this tutorial step by step. Full code is shown in the end.

### 1. Configuring list of steps

`Wizard` component requires a list of steps. Here's a basic example what the list looks like:

```js
const steps = [
  {
    id: 'StepName',
    component: <StepName />,
    initialValues: { name: '' },
    validationSchema: Yup.object({ name: Yup.string().required('Name is required') })
  },
  {
    id: 'StepAge',
    component: <StepAge />,
    initialValues: { age: '' },
    validationSchema: Yup.object({ age: Yup.number().positive().required('Age is required') })
  },
  {
    id: 'StepFinal',
    component: <StepFinal />
  }
]
```

Each step object defines `component` that is used to render the step. `Wizard` wraps the currently active step inside `<Formik><Form></Form></Formik>`. The following step object attributes are passed automatically to Formik instance:

- `initialValues`: Initial values of the `Formik` fields that are rendered in the `component`.
- `validationSchema` / `validate`: Either define Yup schema or function that validates the form fields.
- `validateOnChange`: Tells Formik to validate the form on each input's onChange event. Defaults to `true`.
- `validateOnBlur`: Tells Formik to validate the form on each input's onBlur event. Defaults to `true`.

Usually you would need to define at least `initialValues` and `validationSchema` / `validate` (presuming that your step `component` contains form fields).

You can view the full list of step options [here](#step-object).

### 2. Writing your step component(s)

If you plan to have form fields in your step component, you should use Formik's `Field` component to render fields and `ErrorMessage` to render error messages. For instance, this is what `StepName` and `StepAge` could look like:

```js
import { Field, ErrorMessage } from 'formik'
import { useWizard } from 'react-formik-step-wizard'

function StepName() {
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" />
      </div>
      <button type="submit">Next</button>
    </div>
  )
}

function StepAge() {
  const { goToPreviousStep } = useWizard()
  return (
    <div>
      <div>
        <label htmlFor="age">Name</label>
        <Field id="age" name="age" type="number" />
        <ErrorMessage name="age" />
      </div>
      <button type="button" onClick={goToPreviousStep}>Previous</button>
      <button type="submit">Next</button>
    </div>
  )
}
```

Note that we retrieve `goToPreviousStep` utility function from `useWizard` hook. You can read more about it [here](#usewizard).

### 3. Setting up the Wizard

Now you can pass the list to `Wizard`:

```js
<Wizard
  steps={steps}
  onStepChanged={(fromStep, toStep, wizardValues) => {
    console.log('step changed', fromStep?.id, toStep?.id, wizardValues)
  }}
  onCompleted={values => console.log('wizard completed', values)}
/>
```

- `onStepChanged` is called each time step is changed. `fromStep` and `toStep` represent step objects. `wizardValues` is a collection of all inputted values in previously completed steps.
- `onCompleted` is called when user completes the wizard (i.e. submits last step). `values` contains the field-value pairs from all steps.

If we look at [Quickstart](#quickstart) example, then `onStepChanged` would print this after user has completed first step:

```js
> step changed, StepName, StepAge, { StepName: { firstName: 'John', lastName: 'Doe' }}
```

After user has completed the wizard, `onStepChanged` and `onCompleted` would print this:

```js
> step changed, StepFinal, undefined, { StepName: { firstName: 'John', lastName: 'Doe' }, StepAge: { age: 30 } }
> wizard completed, { firstName: 'John', lastName: 'Doe', age: 30 }
```

### 4. Full example

Here's what the finished code looks like:

```js
import React from 'react'
import { useWizard, Wizard } from 'react-formik-step-wizard'
import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function StepName() {
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" />
      </div>
      <button type="submit">Next</button>
    </div>
  )
}

function StepAge() {
  const { goToPreviousStep } = useWizard()
  return (
    <div>
      <div>
        <label htmlFor="age">Age</label>
        <Field id="age" name="age" type="number" min="0" />
        <ErrorMessage name="age" />
      </div>
      <button type="button" onClick={goToPreviousStep}>Previous</button>
      <button type="submit">Next</button>
    </div>
  )
}

function StepFinal() {
  const { values, goToPreviousStep } = useWizard()
  return (
    <div>
      <p>Your name is {values.StepName.name} and your age is {values.StepAge.age}</p>
      <button type="button" onClick={goToPreviousStep}>Previous</button>
      <button type="submit">Finish</button>
    </div>
  )
}

function App() {
  const steps = [
    {
      id: 'StepName',
      component: <StepName />,
      initialValues: { name: '' },
      validationSchema: Yup.object({ name: Yup.string().required('Name is required') })
    },
    {
      id: 'StepAge',
      component: <StepAge />,
      initialValues: { age: '' },
      validationSchema: Yup.object({ age: Yup.number().positive().required('Age is required') })
    },
    {
      id: 'StepFinal',
      component: <StepFinal />
    }
  ]

  return (
    <Wizard
      steps={steps}
      onStepChanged={(fromStep, toStep, wizardValues) => {
        console.log('step changed', fromStep?.id, toStep?.id, wizardValues)
      }}
      onCompleted={values => console.log('wizard completed', values)}
    />
  )
}
```

### What if I don't want to use Formik in step component?

Then you can omit `initialValues` and `validationSchema` / `validate` attributes from the step object and not just use Formik's `Field` and `ErrorMessage` in your step component. You can basically write anything in your component as long as it has a button of type `submit` for proceeding to the next step or alternatively you can use shared navigation component which will be explained next.

## Navigation

If you wish to include a shared navigation for all steps in your wizard, you can create your own component and pass it to `Wizard` using `footer` props. When you do that, the following properties would be useful to retrieve from `Wizard` using `useWizard` hook:

- `goToPreviousStep`: Function that goes to previous step.
- `isFirstStep`: Boolean indicating whether step is first step.
- `isLastStep`: Boolean indicating whether step is last step.
- `isLoading`: Boolean indicating whether step is in loading state.
- `hidePrevious`: Boolean indicating whether "Previous" button should be hidden. This comes from step object.
- `disablePrevious`: Boolean indicating whether "Previous" button should be disabled. This comes from step object.
- `hideNext`: Boolean indicating whether "Next" button should be hidden. This comes from step object.
- `disableNext`: Boolean indicating whether "Next" button should be disabled. This comes from step object.
- `onClickDisabledNext`: Function that validates form when `disableNext` is `true`. Useful ONLY if you want to allow form validation even when "Next" button is disabled.

Here's an example of simple navigation component:

```js
import React from 'react'
import { Wizard, useWizard } from 'react-formik-step-wizard'

const steps = [
  { id: 'Step1', component: <h1>Step 1</h1>, hidePrevious: true },
  { id: 'Step2', component: <h1>Step 2</h1>, hideNext: true }
]

function Navigation() {
  const {
    goToPreviousStep,
    isFirstStep,
    isLastStep,
    isLoading,
    hidePrevious,
    disablePrevious,
    hideNext,
    disableNext,
    disableNextOnErrors,
    onClickDisabledNext
  } = useWizard()

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <div>
      {!hidePrevious && (
        <button type="button" onClick={goToPreviousStep} disabled={disablePrevious}>Previous</button>
      )}
      {!hideNext && (
        <div onClick={onClickDisabledNext}>
          <button type="submit" disabled={disableNext}>Next</button>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <Wizard steps={steps} footer={<Navigation />} />
  )
}
```

### BasicFooter

If you don't wish to create your own navigation component, a basic footer with navigation buttons is included in `react-formik-step-wizard`. Here's how you can use it:

```js

import React from 'react'
import { Wizard, BasicFooter } from 'react-formik-step-wizard'

const steps = [
  { id: 'Step1', component: <h1>Step 1</h1>, hidePrevious: true },
  { id: 'Step2', component: <h1>Step 2</h1>, hideNext: true }
]

function App() {
  return (
    <Wizard
      steps={steps}
      footer={<BasicFooter textNext="Proceed" textPrevious="Go back" />}
    />
  )
}
```

Note that `BasicNavigation` has two additional props `textNext` and `textPrevious` for customizing button texts. By default they are "Next" and "Previous".

You can customize looks of the basic footer by defining CSS for classes `.navigation` and `.navigation-wrapper`.

### What if I want to use submit buttons directly in step component?

You can! Here's an example:

```js
function Step1() {
  const { activeStep, goToPreviousStep } = useWizard()
  const { hidePrevious, hideNext, disablePrevious, disableNext } = activeStep
  return (
    <div>
      {!hidePrevious && (
        <button type="button" onClick={goToPreviousStep} disabled={disablePrevious}>Previous</button>
      )}
      {!hideNext && (
        <button type="submit" disabled={disableNext}>Next</button>
      )}
    </div>
  )
}
```

## API

### Step object

List of step objects that are passed to `Wizard` have various options you can set. Here's the full specification:

| Name                   | Type                                                 | Default | Description                                                                                                                                                                                                                                                                                                                       |
|------------------------|------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                   | string                                               |         | _**(Required)**_ Unique ID for step component. Form values inputted by user are stored in the Wizard's `values` object under step ID key. E.g. `{ [id]: { [field]: [value] } }`. Values can be retrieved from Wizard using `useWizard` hook.                                                                                          |
| `component`            | ReactElement                                         |         | Component used for rendering step content. Usually this is always required unless you implement default component object like in the `demo/` code.                                                                                                                                                                                |
| `initialValues`        | object                                               | {}      | Contains key-value pairs for step's form fields.<br><br>Example:<br>`initialValues: { name: '', email: '' }`                                                                                                                                                                                                                      |
| `submitOnChange`       | boolean                                              | false   | Submits form on field change. Useful when user e.g. has to pick a choice from  `radio` buttons.                                                                                                                                                                                                                                   |
| `hideNext`             | boolean                                              | false   | Indicates whether to hide submit button.                                                                                                                                                                                                                                                                                          |
| `hidePrevious`         | boolean                                              | false   | Indicates whether to hide "Previous" button.                                                                                                                                                                                                                                                                                      |
| `disableNext`          | boolean                                              | false   | Indicates whether to disable submit button.                                                                                                                                                                                                                                                                                       |
| `disableNextOnErrors`  | boolean                                              | false   | Indicates whether to disable submit button when form has errors.                                                                                                                                                                                                                                                                  |
| `disablePrevious`      | boolean                                              | false   | Indicates whether to disable "Previous" button.                                                                                                                                                                                                                                                                                   |
| `keepValuesOnPrevious` | boolean                                              | true    | Remembers inputted values in current step if user decides to navigate back to previous step without submitting the form.                                                                                                                                                                                                          |
| `shouldSkip`           | async (allValues, direction) => stepValues           |         | Function that returns boolean telling whether the step should be skipped or not.<br><br>Params:<br>- `allValues`: all form field values from previous steps<br>- `direction`: Tells whether user came to the current step by pressing "Previous" (-1) or by pressing "Next" (1)                                                   |
| `onSubmit`             | async (stepValues, allValues, actions) => stepValues |         | Function that serves as a custom submit handler where you can do things after successful form submission. You should return `stepValues`.<br><br>Params:<br>- `stepValues`: form field values filled in current step<br>- `allValues`: all form field values from previous steps<br>- `actions`: Includes Formik helper functions |
| `validate`             | (stepValues, allValues) => object                    |         | Validate the form's values with a function. If there are errors, return object containing field's name as key and error message as value.<br><br>Params:<br>- `stepValues`: form field values filled in current step<br>- `allValues`: all form field values from previous steps                                                  |
| `validationSchema`     | Yup.object                                           |         | A Yup schema. This is used for validation. Errors are mapped by key to the inner component's errors. Its keys should match of those values. Example here: [ https://formik.org/docs/guides/validation#validationschema ]( https://formik.org/docs/guides/validation#validationschema )                                            |
| `validateOnBlur`       | boolean                                              | true    | Use this option to tell Formik to run validations on blur events.                                                                                                                                                                                                                                                                 |
| `validateOnChange`     | boolean                                              | true    | Use this option to tell Formik to run validations on change events.                                                                                                                                                                                                                                                               |

### Wizard

`Wizard` controls the step flow. Only required props is `steps` which contains a list of step config objects. You can customize the wizard by passing custom components using `header`, `wrapper` and `footer` props.

| Name            | Type                                     | Description                                                                                                                                                      |
|-----------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `steps`         | list                                     | _**(Required)**_ List of step objects. See example and configuration instructions above.                                                                             |
| `onStepChanged` | (fromStep, toStep, wizardValues) => void | Function that is called when user either submits currently active step or navigates back to previous step.                                                       |
| `onCompleted`   | (values) => void                         | Function that is called when user completes the wizard.                                                                                                          |
| `header`        | ReactElement                             | Header that is shown above the active step.                                                                                                                      |
| `wrapper`       | ReactElement                             | Wrapper component that is wrapped around `step.component`. Useful if you need e.g. styling that is shared across all step components.                            |
| `footer`        | ReactElement                             | Footer that is shown below the active step.                                                                                                                      |
| `enableHash`    | boolean                                  | Enables URL hashes per step. Hash matches with slugified step `id` (e.g. `StepName` -> `#step-name`) and is updated accordingly every time when step is changed. |

### useWizard

`Wizard` hook that you can use in any step component or in custom header, wrapper and footer component. Used to retrieve info and utility functions related to wizard.

| Name              | Type                      | Description                                                                                                                                           |
|-------------------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `values`            | object                    | Contains all form field values from previously completed steps. Example:<br><br>`{ StepName: { firstName: 'John', lastName: 'Doe' }, StepAge: { age: 30 }` |
| `activeStep`              | object                    | Active step object.                                                                                                                                   |
| `stepNumber`        | number                    | Order number of currently active step. Indexing starts from 1.                                                                                        |
| `totalSteps`        | number                    | Number of total steps.                                                                                                                                |
| `isLoading`           | boolean                   | Is step in loading state or not. Set to `true` when `step.onSubmit` handler is called and back to `false` when executing handler is done.                                                                                                                      |
| `isFirstStep`       | boolean                   | Is the currently active step the first step.                                                                                                          |
| `isLastStep`        | boolean                   | Is the currently active step the last step.                                                                                                           |
| `setHideNext`    | (truthy: boolean) => void | Function used to set the step object's value of `hideNext` attribute.                      |
| `setDisableNext` | (truthy: boolean) => void | Function used to set the step object's value of `disableNext` attribute.               |
| `setHidePrevious` | (truthy: boolean) => void | Function used to set the step object's value of `hidePrevious` attribute. |
| `setDisablePrevious` | (truthy: boolean) => void | Function used to set the step object's value of `disablePrevious` attribute. |
| `setIsLoading`     | (truthy: boolean) => void | Function used to set the value of `isLoading` attribute.                                     |
| `goToPreviousStep`  | function                  | Go to previous step.                                                                                                                                  |
| `goToStep`          | (index) => void           | Go to step at the specified index.                                                                                                                    |

## Advanced topics

For more advanced use of the wizard I recommend playing with [demo](https://kennyhei.github.io/react-formik-step-wizard/) and reading code in `demo/` folder. Some topics are covered below:

### Skipping steps

You can define a `shouldSkip` function that returns boolean value in the step object. If `true`, step is skipped and wizard moves on the next step (or previous step, depending on if user pressed "Previous" button or "Next" button).

`shouldSkip` receives two parameters:
- `values`: All values that were inputted in previous steps
- `direction`: Either `-1` or `1`, indicating whether we are moving backwards or forwards in the wizard.

Example:
```js
import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { Wizard, useWizard } from 'react-formik-step-wizard'

function NonSkippableStep() {
  return (
    <div>
      <p>This is non-skippable step.</p>
      <p>Type "skip" if you want to skip next step.</p>
      <div>
        <Field name="text" type="text" />
        <ErrorMessage name="text" />
      </div>
      <button type="submit">Next</button>
    </div>
  )
}

function SkippableStep() {
  const { goToPreviousStep } = useWizard()
  return (
    <div>
      <p>This is skipped if user typed "skip" in previous step.</p>
      <button type="button" onClick={goToPreviousStep}>Previous</button>
      <button type="submit">Next</button>
    </div>
  )
}

function FinalStep() {
  const { goToPreviousStep } = useWizard()
  return (
    <div>
      <h1>You did it!</h1>
      <button type="button" onClick={goToPreviousStep}>
        Previous
      </button>
    </div>
  )
}

const steps = [
  {
    id: 'NonSkippableStep',
    component: <NonSkippableStep />,
    initialValues: { text: '' }
  },
  {
    id: 'SkippableStep',
    component: <SkippableStep />,
    shouldSkip: (values, direction) => {
      return values.NonSkippableStep.text === 'skip'
    }
  },
  {
    id: 'FinalStep',
    component: <FinalStep />
  }
]

function App() {
  return (
    <Wizard steps={steps} />
  )
}
```

### Validating form field based on what user inputted in previous step(s)

Sometimes there's a need to validate field based on what user inputted in previous steps. In this case, you can define a `validate` function to the step object.

`validate` receives following parameters:
- `stepValues`: form field values filled in current step
- `allValues`: all form field values from previous steps

Example:
```js
function StepName() {
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />
      </div>
      <button type="submit">Next</button>
    </div>
  )
}

function StepFullName() {
  const { goToPreviousStep } = useWizard()
  return (
    <div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <Field name="fullName" type="text" />
        <ErrorMessage name="fullName" />
      </div>
      <button type="button" onClick={goToPreviousStep}>Previous</button>
    </div>
  )
}

const steps = [
  {
    id: 'StepName',
    component: <StepName />,
    initialValues: {
      name: ''
    }
  },
  {
    id: 'StepFullName',
    component: <StepFullName />,
    initialValues: {
      fullName: ''
    },
    validate: (stepValues, allValues) => {
      const errors = {}
      if (!stepValues.fullName.includes(allValues.StepName.name)) {
        errors.fullName = 'Full name is missing your first name.'
      }
      return errors
    }
  }
]
```

### Saving form values in sessionStorage

If you want form fields to persist e.g. between page refreshes, you can use `sessionStorage` to your advantage. `react-formik-step-wizard` doesn't offer solution out of the box but here's one way you can implement the logic:

```js
function getStepInitialValues(stepId) {
  const values = JSON.parse(sessionStorage.getItem('wizardValues'))
  return values?.[stepId]
}

const steps = [{
  id: 'StepName',
  component: <StepName />,
  initialValues: getStepInitialValues('StepName') || {
    name: ''
  }
}]

return (
  <Wizard
    steps={steps}
    onStepChanged={(fromStep, toStep, wizardValues) => {
      sessionStorage.setItem('wizardValues', JSON.stringify(wizardValues))
    }}
  />
)
```

## Using URL hashes in the wizard

When initiating `Wizard`, you can enable URL hashes with prop `enableHash`:

```js
<Wizard
  enableHash
  steps={[
    { id: 'StepName', component: <div>Name</div> },
    { id: 'StepAge', component: <div>Age</div> }
  ]}
/>
```

Step IDs are converted into URL-friendly hashes. When user is in the first step, URL will be updated with hash `/#step-name` and when user proceeds to the next step, URL is updated with hash `/#step-age`. When refreshing page, active step will be chosen based on URL hash. If there is no hash or hash doesn't match with any step, first step is shown.

## Animations

Check `demo/components/WizardStepWrapper.jsx` on how to use `framer-motion` in your steps.

### Caveats

If you use animation library in your custom wrapper component, then during step change Formik logs warning `"A component is changing a controlled input to be uncontrolled."` to console. Tested with `react-spring` and `framer-motion`.

Since steps are internally using shared Formik instance, I think the issue is that when step is changed, then Formik's `initialValues` is also updated according to what has been configured in new step object. However, during transition the old step is still rendered couple of times. If old step component is using Formik `<Field />`, internally it's retrieving `initialValues` which now has the new values from new step, causing said warning as it cannot find anymore corresponding initial value for `<Field />`. This results in component being changed from controlled input to uncontrolled.

Simplified example:

```js
const steps = [
  { id: 'Step1', component: <Field name="name" type="text" />, initialValues: { name: '' }},
  { id: 'Step2', component: <Field name="age" type="number" />, initialValues: { age: '' }}
]

function Wrapper() {
  const { activeStep } = useWizard()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeStep.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
      >
        {activeStep.component}
      </motion.div>
    </AnimatePresence>
  )
}

return (
  <Wizard steps={steps} wrapper={<Wrapper />} />
)
```

1. First step is rendered, internal Formik instance now has `initialValues` that equals to `{ name: '' }`
2. User clicks next:
    - Active step is changed to `Step2`
    - Internally `Wizard` provides Formik instance with new `initialValues` that equals to `{ age: '' }`
3. Transition begins, `Step1` is still being rendered and `<Field name="name" type="text" />` cannot find corresponding initial value, causing `Field` to change from controlled input to uncontrolled.
4. After transition is done, `Step1` is not rendered anymore and everything is OK again.

To my understanding, in this case the warning message is annoying but harmless. It doesn't seem to break anything nor is it visible to end user otherwise in any way. Also when `NODE_ENV` is set to `production`, warning message is not logged at all so it will be omitted from your build.

One solution would be to combine all `initialValues` from step objects to a single one that is then passed to Formik. E.g. for every step in aforementioned example Formik would always be given `initialValues` that equals to `{ name: '', age: '' }`. However, this basically prevents from using same field names in multiple step objects. Other solution would be to prefix every initial value but that's clumsy as well.

## Creating wrapper for steps

You can wrap steps by defining your own wrapper component. Here's an example:

```js
import { useWizard, Wizard } from 'react-formik-step-wizard'

function StepWrapper() {
  const { activeStep } = useWizard()
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h1>Wrapper</h1>
      {activeStep.component}
    </div>
  )
}

const steps = [{ id: 'Step', component: <p>I'm a simple step.</p> }]

function App() {
  return (
    <Wizard
      steps={steps}
      wrapper={<StepWrapper />}
    />
  )
}
```

## Creating header for wizard

You can create header for wizard by defining your own header component. Here's an example:

```js
import { useWizard, Wizard } from 'react-formik-step-wizard'

function Header() {
  const { activeStep } = useWizard()
  return (
    <div style={{ padding: '2rem 0', background: 'yellow' }}>
      <h1 style={{ textAlign: 'center' }}>{activeStep.id}</h1>
    </div>
  )
}

const steps = [{ id: 'Step', component: <p>I'm a simple step.</p> }]

function App() {
  return (
    <Wizard
      steps={steps}
      header={<Header />}
    />
  )
}
```

### TODO examples

- Defining custom submit handlers with async operations
