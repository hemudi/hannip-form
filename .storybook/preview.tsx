import React from 'react';
import type { Preview } from '@storybook/react';
import { Pretendard } from '../src/styles/fonts';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },

  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={Pretendard.variable}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
