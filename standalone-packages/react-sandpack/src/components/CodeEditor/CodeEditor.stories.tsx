import React from 'react';
import { Story } from '@storybook/react';

import { CodeEditor, CodeEditorProps } from './index';
import { SandpackLayout } from '../../components/SandpackLayout';

import { SandpackProvider } from '../../utils/sandpack-context';
import { SANDBOX_TEMPLATES } from '../../templates';
import { compileStitchesTheme, ThemeProvider } from '../../utils/theme-context';
import { sandpackDarkTheme } from '../../themes';

export default {
  title: 'components/Code Editor',
  component: CodeEditor,
};

export const Component: Story<CodeEditorProps> = args => (
  <SandpackProvider
    entry="/index.js"
    files={{
      '/index.js': {
        code: 'const title = "This is a simple code editor"',
      },
    }}
    dependencies={{}}
  >
    <SandpackLayout>
      <CodeEditor {...args} />
    </SandpackLayout>
  </SandpackProvider>
);

const reactTemplate = SANDBOX_TEMPLATES.react;

export const ReactCode = args => (
  <SandpackProvider
    entry={reactTemplate.entry}
    environment="create-react-app"
    files={reactTemplate.files}
    openPaths={[reactTemplate.main]}
    dependencies={reactTemplate.dependencies}
  >
    <SandpackLayout>
      <CodeEditor {...args} />
    </SandpackLayout>
  </SandpackProvider>
);

ReactCode.args = {
  showLineNumbers: true,
};

const vueTemplate = SANDBOX_TEMPLATES.vue;

export const VueCode = args => (
  <SandpackProvider
    entry={vueTemplate.entry}
    environment="vue-cli"
    files={vueTemplate.files}
    openPaths={[vueTemplate.main]}
    dependencies={vueTemplate.dependencies}
  >
    <SandpackLayout>
      <CodeEditor {...args} />
    </SandpackLayout>
  </SandpackProvider>
);

export const DarkTheme = args => (
  <ThemeProvider value={sandpackDarkTheme}>
    <SandpackProvider
      entry={vueTemplate.entry}
      environment="vue-cli"
      files={vueTemplate.files}
      openPaths={[vueTemplate.main]}
      dependencies={vueTemplate.dependencies}
    >
      <SandpackLayout className={compileStitchesTheme(args.theme)}>
        <CodeEditor {...args} />
      </SandpackLayout>
    </SandpackProvider>
  </ThemeProvider>
);

DarkTheme.args = {
  theme: sandpackDarkTheme,
};
