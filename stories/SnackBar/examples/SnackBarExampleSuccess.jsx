import React from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExampleSuccess extends React.Component {
  constructor() {
    super();

    this.state = {
      showSnackBar: false,
    };
  }

  openSnackBar = () => this.setState({ showSnackBar: true });

  closeSnackBar = () => this.setState({ showSnackBar: false });

  actionCallback = () => this.closeSnackBar();

  render() {
    const { showSnackBar } = this.state;

    return (
      <>
        <Button onClick={this.openSnackBar}>Open SnackBar Success</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar success text content"
            onClose={this.closeSnackBar}
            skin="success"
          />
        )}
      </>
    );
  }
}

SnackBarExampleSuccess.code = `
import React from 'react';
import Button from '../../../components/Button';
import SnackBar from '../../../components/SnackBar';

class SnackBarExampleSuccess extends React.Component {
  constructor() {
    super();

    this.state = {
      showSnackBar: false,
    };
  }

  openSnackBar = () => this.setState({ showSnackBar: true });

  closeSnackBar = () => this.setState({ showSnackBar: false });

  actionCallback = () => this.closeSnackBar();

  render() {
    const { showSnackBar } = this.state;

    return (
      <>
        <Button onClick={this.openSnackBar}>Open SnackBar Success</Button>
        {showSnackBar && (
          <SnackBar
            text="SnackBar success text content"
            onClose={this.closeSnackBar}
            skin="success"
          />
        )}
      </>
    );
  }
}
`;

export default SnackBarExampleSuccess;
