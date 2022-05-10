import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import Button from '../button/Button';

export default {
  title: 'Base/Modal/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic label',
};

export const Full = Template.bind({});
Full.args = {
  children: (
    <>
      <ModalHeader>Modal header</ModalHeader>
      <ModalBody>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
        eligendi repudiandae voluptatem tempore!
      </ModalBody>
      <ModalFooter>
        <Button className="w-full sm:w-auto" variant="outline">
          Cancel
        </Button>
        <Button className="w-full sm:w-auto">Accept</Button>
      </ModalFooter>
    </>
  ),
};
