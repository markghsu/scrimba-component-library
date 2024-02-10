import Badge from './Badge'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    shape: {
      options: ['square','pill']
    },
  },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Badge'
  },
}

export const Square = {
  args: {
    shape: 'square',
    label: 'Square',
  },
}

export const Pill = {
  args: {
    shape: 'pill',
    label: 'Pill',
  },
}

export const Gray = {
  args: {
    ...Default.args,
    color: 'gray',
  },
}

export const Red = {
  args: {
    ...Default.args,
    color: 'red',
  },
}

export const Yellow = {
  args: {
    ...Default.args,
    color: 'yellow',
  },
}

export const Green = {
  args: {
    ...Default.args,
    color: 'green',
  },
}

export const Blue = {
  args: {
    ...Default.args,
    color: 'blue',
  },
}

export const Indigo = {
  args: {
    ...Default.args,
    color: 'indigo',
  },
}

export const Purple = {
  args: {
    ...Default.args,
    color: 'purple',
  },
}

export const Pink = {
  args: {
    ...Default.args,
    color: 'pink',
  },
}

export const GrayPill = {
  args: {
    ...Pill.args,
    color: 'gray',
  },
}

export const RedPill = {
  args: {
    ...Pill.args,
    color: 'red',
  },
}

export const YellowPill = {
  args: {
    ...Pill.args,
    color: 'yellow',
  },
}

export const GreenPill = {
  args: {
    ...Pill.args,
    color: 'green',
  },
}

export const BluePill = {
  args: {
    ...Pill.args,
    color: 'blue',
  },
}

export const IndigoPill = {
  args: {
    ...Pill.args,
    color: 'indigo',
  },
}

export const PurplePill = {
  args: {
    ...Pill.args,
    color: 'purple',
  },
}

export const PinkPill = {
  args: {
    ...Pill.args,
    color: 'pink',
  },
}