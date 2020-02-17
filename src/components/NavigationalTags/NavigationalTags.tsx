import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { COLOR_TAG, Tag } from './Tag';
import { WithStyles, StyleSheet } from '../../utils/jss';

type CompProps = Readonly<{
  tags: ReadonlyArray<{
    id: string;
    name: string;
    onClose?: () => void;
  }>;
  onTagClose?: (tagId: string) => void;
}>;

type ClassKey = 'root' | 'content' | 'bar';

type Props = WithStyles<ClassKey> & CompProps;

const NavigationalTagsComp = ({ classes, tags, onTagClose }: Props) => (
  <div className={classes.root}>
    <div className={classes.bar} />
    <div className={classes.content}>
      {tags.map(({ id, name, onClose }, idx) => (
        <div style={{ zIndex: tags.length - idx }} key={`${idx}-${id}`}>
          <Tag
            name={name}
            onClose={() => {
              if (onTagClose) {
                // tslint:disable-next-line no-expression-statement
                onTagClose(id);
              }

              if (onClose) {
                // tslint:disable-next-line no-expression-statement
                onClose();
              }
            }}
          />
        </div>
      ))}
    </div>
  </div>
);
const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'relative'
  },
  content: {
    display: 'flex',
    '& > div': {
      marginLeft: -5
    }
  },
  bar: {
    position: 'absolute',
    width: `calc(100% - ${20}px)`,
    height: '100%',
    backgroundColor: COLOR_TAG
  }
};

export const NavigationalTags = compose<Props, CompProps>(
  setDisplayName('NavigationalTags'),
  injectSheet(styles)
)(NavigationalTagsComp);
