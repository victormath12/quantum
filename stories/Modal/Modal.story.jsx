import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import CodeExample from '../../.storybook/components/CodeExample';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Atom from '../static/atom.svg';

const stories = storiesOf('5. Modals', module);

class ModalStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpen = () => this.setState({ showModal: !this.state.showModal });

  render() {
    return (
      <Heading image={Atom} title="<Modal />">
        <TabbedView>
          <Tab title="Usage">
            <Button skin="primary" onClick={this.handleOpen}>
              {this.state.showModal ? 'Close' : 'Open'} Modal
            </Button>

            { this.state.showModal &&
              (
                <Modal
                  title="Example Title"
                  closeModal={this.handleOpen}
                >
                  Example Message
                </Modal>
              )
            }

            <CodeExample component={<Modal />} />
          </Tab>

          <Tab title="API">
            <AutoPropsApi component={Modal} />
          </Tab>
        </TabbedView>
      </Heading>
    );
  }
}

stories
  .add('Basic', () => (
    <ModalStory />
  ));
