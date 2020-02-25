import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

const converter = new Stories2SnapsConverter();

initStoryshots({
  configPath: '.storybook',
  framework: 'react',
  test: ({ story, context }) => {
    const snapshotFileName = converter.getSnapshotFileName(context);

    if (snapshotFileName) {
      const storyElement = story.getOriginal()();
      try {
        const tree = mount(storyElement);
        expect(toJson(tree)).toMatchSpecificSnapshot(snapshotFileName);
      } catch (error) {
        console.error(error.message);
        console.log(snapshotFileName);
        throw new Error(error.message);
      }
    }
  }
});
