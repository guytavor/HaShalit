import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import EffectStory from './Effect.story';

storiesOf('Effect', module)
  .add('one Icon', () => <EffectStory />);
