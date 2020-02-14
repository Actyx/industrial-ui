/* tslint:disable: no-this no-class */
import * as React from 'react';
import { Dialog, Size } from './Dialog';

/*TODO this component will handle the animation */

type CompProps = Readonly<{
  open: boolean;
  size: Size;
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  onClose?: () => void;
}>;

type State = Readonly<{
  open: boolean;
}>;

export class DialogAnimated extends React.Component<CompProps, State> {
  state: State = {
    open: this.props.open
  };

  handleClose = () => {
    const { onClose } = this.props;
    this.setState({ open: false });

    if (onClose) {
      // tslint:disable-next-line:no-expression-statement
      onClose();
    }
  };

  handleOpen = () => this.setState({ open: true });

  render(): React.ReactNode {
    const { size, header, content, footer: action } = this.props;
    const { open } = this.state;
    return (
      open && (
        <Dialog
          size={size}
          header={header}
          content={content}
          footer={action}
          onClose={this.handleClose}
        />
      )
    );
  }
}
